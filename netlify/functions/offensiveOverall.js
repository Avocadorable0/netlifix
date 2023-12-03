exports.handler = async (event, context) => {
    const response = await fetch('https://ws-foot-stat.onrender.com/offensiveOverall');
    const data = await response.json();
  
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  };
  