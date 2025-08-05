import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_DRIVE_API_KEY')
    if (!apiKey) {
      throw new Error('Google Drive API key not configured')
    }

    // List files from a specific Google Drive folder
    // You'll need to set the GOOGLE_DRIVE_FOLDER_ID in Supabase secrets
    const folderId = Deno.env.get('GOOGLE_DRIVE_FOLDER_ID') || 'root'
    
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&fields=files(id,name,webViewLink,thumbnailLink,createdTime)&key=${apiKey}`
    )

    if (!response.ok) {
      throw new Error(`Google Drive API error: ${response.statusText}`)
    }

    const data = await response.json()
    
    return new Response(
      JSON.stringify({ photos: data.files || [] }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  } catch (error) {
    console.error('Error fetching photos:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})