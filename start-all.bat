@echo off
echo Starting I4C Cybercrime Framework...
echo.

echo Starting Backend...
start "Backend" cmd /k "cd backend && npm start"

echo Starting Frontend...
start "Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo Both Backend and Frontend are starting in separate windows.
echo Backend: http://localhost:5000 (or configured port)
echo Frontend: http://localhost:4321 (or configured port)
echo.
pause
