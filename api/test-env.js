const path = require('path');
require('dotenv').config({ 
  path: path.resolve(__dirname, '.env') 
});

console.log('Testing environment variables:');
console.log({
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  // Don't log DB_PASSWORD for security reasons
});