exports.handler = async (event, context) => {
    const response = await fetch('https://ws-foot-stat.onrender.com/defenseAway');
    const data = await response.json();
  
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  };
  