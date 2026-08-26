import { put } from '@vercel/blob';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  var url = new URL(request.url, 'http://localhost');
  var filename = url.searchParams.get('filename');

  var blob = await put(filename, request, {
    access: 'public'
  });

  return response.status(200).json(blob);
}

export var config = {
  api: {
    bodyParser: false
  }
};
