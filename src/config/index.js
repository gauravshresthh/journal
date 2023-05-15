const dotenv = require('dotenv');

// Sets the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const result = dotenv.config();

// Crashes the node process if ..env file not found
if (result.error) {
  throw result.error;
}

const config = {
  api: {
    prefix: '/api/v1'
  },
  name: `Task API - ${process.env.NODE_ENV}`,
  port: process.env.PORT || '8000',
  logs: {
    level: process.env.LOG_LEVEL || 'silly'
  },
  sendgrid: {
    apiKey: process.env.SENDGRID_API_KEY
  },
  email: {
    from: 'hello@learnt.global'
  }
};

module.exports = config;
