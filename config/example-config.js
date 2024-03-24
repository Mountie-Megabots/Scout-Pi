//Create a config.js file like this before running the server

module.exports = {
  port: 3000,
  jwtSecret: '##FRC2024!!', // API Key Seeds
  jwtExpirationInSeconds: 60 * 60, // 1 hour
  defaultUser: {
    'username': 'Mount',
    'firstName': 'Mountie',
    'lastName': 'Megabots',
    'password': '12345',
    'role': 'supadmin'
  },
  roles: {
    USER: 'user',
    ADMIN: 'admin',
    SUPADMIN: 'supadmin'
  },
  blueAllianceAPIKey: 'PUT BLUE ALLIANCE API KEY HEREs',
  firstAPIKey: 'PUT FIRST API KEY HERE: username:apikey'
}
