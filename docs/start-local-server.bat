@echo off
cd /d "%~dp0"
echo Starting local server for this project...
echo Open http://127.0.0.1:4173 in your browser after the server starts.
node server.js
