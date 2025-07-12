#!/bin/bash

# OpenAI Codex CLI Documentation Runner

echo "🚀 Starting OpenAI Codex CLI Documentation..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Check if running in production mode
if [ "$1" = "build" ]; then
  echo "🔨 Building for production..."
  npm run build
  echo "✅ Build complete! Run './run.sh start' to start the production server."
elif [ "$1" = "start" ]; then
  echo "🌐 Starting production server..."
  npm start
else
  echo "🔧 Starting development server..."
  echo "📍 Documentation will be available at http://localhost:3000"
  npm run dev
fi 