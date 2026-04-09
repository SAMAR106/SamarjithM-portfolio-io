# ============================================
# QUICK DEPLOYMENT COMMANDS FOR GITHUB PAGES
# Windows PowerShell Version
# ============================================

# STEP 1: Initialize & Configure Git
git init
git config user.name "Your Name"
git config user.email "your-email@example.com"

# STEP 2: Create .gitignore
@"
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
"@ | Out-File -FilePath .gitignore -Encoding UTF8

# STEP 3: Stage and Commit
git add .
git commit -m "Initial commit: Portfolio with enhanced design"

# STEP 4: Add GitHub Remote (Replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/samarjith-portfolio.git

# STEP 5: Push to GitHub
git branch -M main
git push -u origin main

# STEP 6: Install gh-pages
npm install --save-dev gh-pages

# STEP 7: Build Project
npm run build

# STEP 8: Deploy to GitHub Pages
npm run deploy

# ============================================
# ✓ Done! Your site is now live at:
# https://YOUR-USERNAME.github.io/samarjith-portfolio
# ============================================
