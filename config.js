require('dotenv/config');

module.exports = {
  dbDev: process.env.MONGODB_DEV_URI,
  dbProduction: process.env.MONGODB_PROD_URI,
  allowedHostname: process.env.ALLOWED_HOSTNAMES.split(','),
  kucosServerUrl: process.env.SERVER_URL,
  adminPassword: process.env.ADMIN_PASSWORD,

  // Antispam by Akismet
  // Visit https://akismet.com/account/ for your own API Key, its free.
  enableAkismet: process.env.AKISMET_API_KEY != null,
  akismetTesting: process.env.NODE_ENV !== 'production',
  akismetApiKey: process.env.AKISMET_API_KEY,
};
