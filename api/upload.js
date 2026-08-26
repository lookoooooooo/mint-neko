var blob = require('@vercel/blob');

module.exports = async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  var url = new URL(request.url, 'http://localhost');
  var filename = url.searchParams.get('filename');

  var uploadedBlob = await blob.put(filename, request, {
    access: 'public'
  });

  return response.status(200).json(uploadedBlob);
};

module.exports.config = {
  api: {
    bodyParser: false
  }
};
