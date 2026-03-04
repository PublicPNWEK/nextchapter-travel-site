#!/bin/bash

# Next Chapter Travel - Quick Setup Script
# This script helps you get started quickly

echo "╔═══════════════════════════════════════════╗"
echo "║   Next Chapter Travel - Quick Setup      ║"
echo "╚═══════════════════════════════════════════╝"
echo ""

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16+ from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Check for npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✅ npm found: $(npm --version)"

# Check for MongoDB
if command -v mongod &> /dev/null; then
    echo "✅ MongoDB found: $(mongod --version | head -n 1)"
else
    echo "⚠️  MongoDB not found locally. You can:"
    echo "   1. Install MongoDB: https://docs.mongodb.com/manual/installation/"
    echo "   2. Use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas"
fi

# Check for Redis
if command -v redis-server &> /dev/null; then
    echo "✅ Redis found: $(redis-server --version)"
else
    echo "⚠️  Redis not found. Caching will be disabled (optional feature)."
    echo "   Install Redis: https://redis.io/docs/getting-started/installation/"
fi

echo ""
echo "────────────────────────────────────────────"
echo "Installing dependencies..."
echo "────────────────────────────────────────────"
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "────────────────────────────────────────────"
echo "Setting up environment..."
echo "────────────────────────────────────────────"

if [ ! -f .env ]; then
    echo "Creating .env file from .env.example..."
    cp .env.example .env
    
    # Generate random secrets
    JWT_SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
    SESSION_SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
    
    # Update .env with generated secrets
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s/your-super-secret-jwt-key-change-this-in-production/$JWT_SECRET/" .env
        sed -i '' "s/your-session-secret-change-this-in-production/$SESSION_SECRET/" .env
    else
        # Linux
        sed -i "s/your-super-secret-jwt-key-change-this-in-production/$JWT_SECRET/" .env
        sed -i "s/your-session-secret-change-this-in-production/$SESSION_SECRET/" .env
    fi
    
    echo "✅ .env file created with secure secrets"
    echo "⚠️  Please edit .env to configure MongoDB and other settings"
else
    echo "✅ .env file already exists"
fi

echo ""
echo "╔═══════════════════════════════════════════╗"
echo "║            Setup Complete! ✅             ║"
echo "╚═══════════════════════════════════════════╝"
echo ""
echo "Next steps:"
echo ""
echo "1. Configure your environment:"
echo "   nano .env"
echo ""
echo "2. Make sure MongoDB is running:"
echo "   mongod  # or use MongoDB Atlas"
echo ""
echo "3. (Optional) Start Redis:"
echo "   redis-server"
echo ""
echo "4. Start the development server:"
echo "   npm run dev"
echo ""
echo "5. Open your browser:"
echo "   http://localhost:5000"
echo ""
echo "📚 Documentation:"
echo "   - Backend Setup: ./BACKEND_SETUP.md"
echo "   - API Docs: ./API_DOCUMENTATION.md"
echo "   - Contributing: ./CONTRIBUTING.md"
echo ""
