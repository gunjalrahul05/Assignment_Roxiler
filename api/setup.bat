@echo off
echo Store Rating Application API Setup

echo Installing dependencies...
call npm install

echo Creating .env file if it doesn't exist...
if not exist .env (
  copy .env.example .env
  echo Please update the .env file with your database credentials.
)

echo Setup completed!
echo To start the development server, run: npm run dev
