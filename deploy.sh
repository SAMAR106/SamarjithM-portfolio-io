#!/bin/bash
# Automated GitHub Deployment Script for Samarjith Portfolio
# Run this script to deploy your project to GitHub Pages

set -e  # Exit on error

echo "=========================================="
echo "GitHub Pages Deployment Script"
echo "=========================================="
echo ""

# Step 1: Verify git is installed
echo "✓ Checking Git installation..."
if ! command -v git &> /dev/null; then
    echo "✗ Git is not installed. Please install it first."
    exit 1
fi

# Step 2: Initialize git if not already done
echo "✓ Initializing Git repository..."
if [ ! -d .git ]; then
    git init
    git config user.name "GitHub User"
    git config user.email "user@github.com"
    echo "  → Git initialized (update user.name and user.email as needed)"
else
    echo "  → Git repository already initialized"
fi

# Step 3: Create .gitignore if it doesn't exist
echo "✓ Creating .gitignore..."
if [ ! -f .gitignore ]; then
    cat > .gitignore << EOF
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
build/
.vscode/
.idea/
EOF
    echo "  → .gitignore created"
else
    echo "  → .gitignore already exists"
fi

# Step 4: Install dependencies
echo "✓ Installing dependencies..."
npm install

# Step 5: Install gh-pages for deployment
echo "✓ Installing gh-pages..."
npm install --save-dev gh-pages

# Step 6: Build project
echo "✓ Building project for production..."
npm run build

# Step 7: Add files to git
echo "✓ Staging files..."
git add .
git commit -m "Deploy: Portfolio with enhanced CSS and glow effects" 2>/dev/null || echo "  → No changes to commit"

# Step 8: Check if remote exists
echo "✓ Configuring remote repository..."
if git remote get-url origin &> /dev/null; then
    echo "  → Remote 'origin' already configured"
else
    echo ""
    echo "⚠ Remote repository not configured!"
    echo "Please enter your GitHub repository URL:"
    read -p "GitHub URL (e.g., https://github.com/username/samarjith-portfolio.git): " github_url
    git remote add origin "$github_url"
    echo "  → Remote added: $github_url"
fi

# Step 9: Push to main branch
echo "✓ Pushing code to GitHub..."
git branch -M main 2>/dev/null || true
git push -u origin main

# Step 10: Deploy to GitHub Pages
echo "✓ Deploying to GitHub Pages..."
npm run deploy

echo ""
echo "=========================================="
echo "✓ Deployment Complete!"
echo "=========================================="
echo ""
echo "Your portfolio will be available at:"
echo "https://YOUR-USERNAME.github.io/samarjith-portfolio"
echo ""
echo "Note: It may take a few minutes for the site to go live."
echo "Check GitHub repository Settings → Pages to verify deployment."
echo ""
