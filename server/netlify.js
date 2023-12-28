const server = require('./server'); 

exports.handler = async function (event, context) {
  const response = await server.handleRequest(event);
  return {
    statusCode: response.statusCode,
    body: response.body,
  };
};
