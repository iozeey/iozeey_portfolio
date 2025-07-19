#!/bin/bash

# Deployment script for Iozeey Portfolio React App
# This script builds the React app and prepares it for deployment

echo "🚀 Starting deployment process for Iozeey Portfolio..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the react-portfolio directory."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run tests (optional - uncomment if you have tests)
# echo "🧪 Running tests..."
# npm test -- --coverage --watchAll=false

# Build the application
echo "🔨 Building the application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Built files are in the 'build' directory"
    echo ""
    echo "📋 Next steps:"
    echo "  1. Upload the contents of the 'build' directory to your web server"
    echo "  2. Configure your web server to serve index.html for all routes (for React Router)"
    echo "  3. Make sure all static assets (CSS, JS, images) are accessible"
    echo ""
    echo "🌐 For deployment to:"
    echo "  • Netlify: Drag and drop the 'build' folder to Netlify"
    echo "  • Vercel: Run 'vercel --prod' from this directory"
    echo "  • GitHub Pages: Use 'npm run deploy' (requires gh-pages package)"
    echo "  • Traditional hosting: Upload 'build' contents to your web root"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
