const fetch = require('node-fetch');
const cors = require('cors')();

exports.handler = async (event, context) => {
  try {
    await cors(event, context);
    const response = await fetch('https://ws-foot-stat.onrender.com/defenseOverall');
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
    console.error('Error fetching data:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
