import { put } from '@vercel/blob';

export default async function handler(request, response) {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');

    const blob = await put(filename, request, {
      access: 'public',
    });

    return response.status(200).json(blob);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
