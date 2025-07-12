#!/bin/bash

# Simple script to run the Codex documentation website

echo "🚀 Starting Codex Documentation..."
echo ""

# Navigate to docs directory
cd docs

# Check if node_modules exists, if not install dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the development server
echo "🌐 Starting server at http://localhost:3000"
echo "Press Ctrl+C to stop"
echo ""
npm run dev 