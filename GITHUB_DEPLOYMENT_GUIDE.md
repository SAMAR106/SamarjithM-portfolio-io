# GitHub Deployment Guide for Samarjith Portfolio

## Step-by-Step Deployment Instructions

### Prerequisites:
- Git installed on your machine
- GitHub account
- Node.js and npm installed

---

## PART 1: LOCAL GIT SETUP

### 1. Initialize Git Repository (if not already done)
```bash
cd C:\Users\sharm\Downloads\samarjith-portfolio
git init
```

### 2. Configure Git User (one-time setup)
```bash
git config user.name "Your Name"
git config user.email "your-email@example.com"

# Or globally (for all projects)
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### 3. Create .gitignore File
```bash
# Run this command to create .gitignore
echo node_modules/ > .gitignore
echo dist/ >> .gitignore
echo .env >> .gitignore
echo .DS_Store >> .gitignore
```

### 4. Add All Files to Git
```bash
git add .
```

### 5. Create Initial Commit
```bash
git commit -m "Initial commit: Portfolio setup with enhanced CSS and glow effects"
```

---

## PART 2: CREATE GITHUB REPOSITORY

### Steps on GitHub Website:
1. Go to https://github.com/new
2. Enter Repository name: `samarjith-portfolio`
3. Add description: "AI/ML Developer Portfolio with React, TypeScript, and Tailwind CSS"
4. Choose: Public (so it can be deployed to GitHub Pages)
5. Click "Create repository"

---

## PART 3: PUSH TO GITHUB

### 6. Add Remote Repository
```bash
git remote add origin https://github.com/YOUR-USERNAME/samarjith-portfolio.git
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### 7. Rename Branch (if needed)
```bash
git branch -M main
```

### 8. Push Code to GitHub
```bash
git push -u origin main
```

You'll be prompted to authenticate. Use your GitHub credentials or Personal Access Token.

---

## PART 4: BUILD PROJECT FOR PRODUCTION

### 9. Build the Project
```bash
npm run build
```

This creates a `dist/` folder with production-ready files.

### 10. Verify Build Output
```bash
ls dist/
```

---

## PART 5: SETUP GITHUB PAGES DEPLOYMENT

### Option A: Deploy from `dist/` folder (Recommended)

#### 11. Install gh-pages Package
```bash
npm install --save-dev gh-pages
```

#### 12. Update package.json
Add these scripts to your `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### 13. Add Homepage to package.json
```json
{
  "homepage": "https://YOUR-USERNAME.github.io/samarjith-portfolio"
}
```

Replace `YOUR-USERNAME` with your GitHub username.

#### 14. Deploy to GitHub Pages
```bash
npm run deploy
```

---

### Option B: Deploy using GitHub Actions (Automatic)

#### 11. Create GitHub Actions Workflow
Create file: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build project
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### 12. Push Changes
```bash
git add .
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
```

---

## PART 6: CONFIGURE GITHUB PAGES SETTINGS

### 13. Enable GitHub Pages
1. Go to your repository on GitHub
2. Settings → Pages
3. Under "Build and deployment":
   - Source: Deploy from a branch (if using gh-pages) OR GitHub Actions
   - Branch: gh-pages (if using gh-pages) OR main (if using Actions)
   - Folder: /(root)
4. Click "Save"

---

## COMPLETE DEPLOYMENT COMMANDS (Quick Copy-Paste)

```bash
# Navigate to project
cd C:\Users\sharm\Downloads\samarjith-portfolio

# Initialize git (if first time)
git init

# Configure user
git config user.name "Your Name"
git config user.email "your-email@example.com"

# Create .gitignore
echo node_modules/ > .gitignore
echo dist/ >> .gitignore

# Add and commit
git add .
git commit -m "Initial commit: Portfolio with enhanced CSS"

# Add remote
git remote add origin https://github.com/YOUR-USERNAME/samarjith-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main

# Build project
npm run build

# Install gh-pages
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

---

## VERIFY DEPLOYMENT

### Check GitHub Pages Status:
1. Go to: `https://YOUR-USERNAME.github.io/samarjith-portfolio`
2. Your portfolio should be live!

### Troubleshooting:
- **Check Settings**: GitHub Repo → Settings → Pages
- **Check Actions**: Github Repo → Actions (to see build logs)
- **Clear Browser Cache**: Press Ctrl+Shift+Delete

---

## MAKING UPDATES AFTER DEPLOYMENT

### Every time you make changes:
```bash
# Stage changes
git add .

# Commit with message
git commit -m "Update: describe your changes"

# Push to GitHub
git push origin main

# Auto-deploy (if using gh-pages)
npm run deploy
```

---

## CUSTOM DOMAIN (Optional)

If you have a custom domain:
1. Go to GitHub Repo → Settings → Pages
2. Add custom domain under "Custom domain"
3. Follow DNS configuration instructions
4. Add CNAME file to public folder

---

## ADDITIONAL RESOURCES

- GitHub Docs: https://docs.github.com/en/pages
- Vite GitHub Pages Guide: https://vitejs.dev/guide/static-deploy.html#github-pages
- gh-pages Package: https://www.npmjs.com/package/gh-pages

---

## SUMMARY

Your portfolio will be deployed to: `https://YOUR-USERNAME.github.io/samarjith-portfolio`

Good luck with your deployment! 🚀
