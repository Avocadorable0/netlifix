const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  try {
    const baseUrl = 'https://ws-foot-stat.onrender.com';
    const path = event.path.replace('/.netlify/functions/api', '');
    const url = `${baseUrl}${path}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      },
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
