//Create a config.js file like this before running the server

module.exports = {
  port: 3000,
  jwtSecret: '##FRC2024!!', // API Key Seeds
  jwtExpirationInSeconds: 60 * 60, // 1 hour
  roles: {
    USER: 'user',
    ADMIN: 'admin'
  },
  blueAllianceAPIKey: 'PUT BLUE ALLIANCE API KEY HEREs',
  firstAPIKey: 'PUT FIRST API KEY HERE: username:apikey'
}
