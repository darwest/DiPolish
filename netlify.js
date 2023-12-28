const server = require('./server/server'); // вам потрібно буде замінити це на шлях до вашого реального серверного коду

exports.handler = async function (event, context) {
  const response = await server.handleRequest(event);
  return {
    statusCode: response.statusCode,
    body: response.body,
  };
};
