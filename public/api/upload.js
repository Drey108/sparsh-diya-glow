
import { put } from '@vercel/blob';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');
    
    if (!filename) {
      return response.status(400).json({ error: 'Filename is required' });
    }

    const blob = await put(filename, request.body, {
      access: 'public'
    });

    return response.json(blob);
  } catch (error) {
    console.error('Upload error:', error);
    return response.status(500).json({ error: 'Upload failed' });
  }
}
