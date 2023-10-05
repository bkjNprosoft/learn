function getClientIP(req) {
  return req.headers['x-forwarded-for']?.split(',').shift() || req.headers['x-real-ip'] || req.connection.remoteAddress;
}

module.exports = { getClientIP };