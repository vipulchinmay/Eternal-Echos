import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: corsHeaders })
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_DRIVE_API_KEY')
    if (!apiKey) {
      throw new Error('Google Drive API key not configured')
    }

    const formData = await req.formData()
    const file = formData.get('photo') as File
    
    if (!file) {
      throw new Error('No file provided')
    }

    const folderId = Deno.env.get('GOOGLE_DRIVE_FOLDER_ID') || 'root'
    
    // Convert file to base64
    const arrayBuffer = await file.arrayBuffer()
    const base64Data = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))

    // Upload to Google Drive
    const metadata = {
      name: `wedding-photo-${Date.now()}-${file.name}`,
      parents: [folderId]
    }

    const uploadResponse = await fetch(
      `https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/related; boundary="foo_bar_baz"'
        },
        body: [
          '--foo_bar_baz',
          'Content-Type: application/json; charset=UTF-8',
          '',
          JSON.stringify(metadata),
          '',
          '--foo_bar_baz',
          `Content-Type: ${file.type}`,
          'Content-Transfer-Encoding: base64',
          '',
          base64Data,
          '--foo_bar_baz--'
        ].join('\r\n')
      }
    )

    if (!uploadResponse.ok) {
      throw new Error(`Upload failed: ${uploadResponse.statusText}`)
    }

    const result = await uploadResponse.json()
    
    return new Response(
      JSON.stringify({ success: true, fileId: result.id }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  } catch (error) {
    console.error('Error uploading photo:', error)
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