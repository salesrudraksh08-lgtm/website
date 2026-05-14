@echo off
title RudrakhsEnt Local Server
echo ==============================================
echo   Starting RudrakhsEnt Website Locally...
echo ==============================================
echo.

IF NOT EXIST "node_modules\" (
    echo [INFO] node_modules not found. Installing dependencies...
    npm install
    echo.
)

echo [INFO] Starting development server...
npm run dev
