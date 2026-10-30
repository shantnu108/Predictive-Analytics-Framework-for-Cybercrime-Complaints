#!/bin/bash

echo "Starting I4C Cybercrime Framework..."
echo ""

echo "Starting Backend..."
cd backend && npm start &
BACKEND_PID=$!

echo "Starting Frontend..."
cd ../frontend && npm run dev &
FRONTEND_PID=$!

echo ""
echo "Both Backend and Frontend are starting..."
echo "Backend: http://localhost:5000 (or configured port)"
echo "Frontend: http://localhost:4321 (or configured port)"
echo ""
echo "Press Ctrl+C to stop both services"

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
