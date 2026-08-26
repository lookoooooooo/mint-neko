import { put } from '@vercel/blob';

export default async function handler(request, response) {
  var url = new URL(request.url, 'http://localhost');
  var filename = url.searchParams.get('filename');

  var blob = await put(filename, request, {
    access: 'public'
  });

  return response.status(200).json(blob);
}
