# GITHUB PAGES DEPLOYMENT - QUICK START

## Replace YOUR-USERNAME with your actual GitHub username in all commands

---

## FASTEST WAY (Copy & Paste in PowerShell)

```powershell
# 1. Navigate to project
cd C:\Users\sharm\Downloads\samarjith-portfolio

# 2. Initialize Git
git init
git config user.name "Your Name"
git config user.email "your-email@example.com"

# 3. Create .gitignore
@'
node_modules/
dist/
.env
.env.local
.DS_Store
'@ | Out-File .gitignore

# 4. Stage all files
git add .
git commit -m "Initial commit: Samarjith Portfolio"

# 5. Add GitHub Remote (REPLACE YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/samarjith-portfolio.git

# 6. Push to GitHub
git branch -M main
git push -u origin main

# 7. Install gh-pages
npm install --save-dev gh-pages

# 8. Build & Deploy
npm run build
npm run deploy
```

---

## STEP-BY-STEP INSTRUCTIONS

### 1. Create GitHub Repository
- Go to https://github.com/new
- Repo name: `samarjith-portfolio`
- Make it **Public**
- Click "Create repository"
- Copy the HTTPS URL (you'll need it)

### 2. Run Commands in PowerShell

**Replace `YOUR-USERNAME` in the git remote command:**

```powershell
cd C:\Users\sharm\Downloads\samarjith-portfolio

git init
git config user.name "Samarjith"
git config user.email "samarjith2007@gmail.com"

git add .
git commit -m "Initial commit"

git remote add origin https://github.com/YOUR-USERNAME/samarjith-portfolio.git
git branch -M main
git push -u origin main
```

### 3. Install Deployment Package

```powershell
npm install --save-dev gh-pages
```

### 4. Build & Deploy

```powershell
npm run build
npm run deploy
```

### 5. Enable GitHub Pages

1. Go to GitHub repo → Settings → Pages
2. Source: **gh-pages** branch
3. Folder: **(root)**
4. Click Save

---

## LIVE SITE URL

After deployment (5-10 minutes):
```
https://YOUR-USERNAME.github.io/samarjith-portfolio
```

---

## UPDATING YOUR SITE LATER

Every time you make changes:

```powershell
# Make changes in your files, then:
git add .
git commit -m "Update: description of changes"
git push origin main
npm run deploy
```

---

## TROUBLESHOOTING

### Site shows 404
- Check Settings → Pages
- Ensure Source is set to **gh-pages** branch
- Wait 5 minutes for rebuild

### Build fails
```powershell
# Clear node_modules and reinstall
Remove-Item node_modules -Recurse -Force
npm install
npm run build
npm run deploy
```

### Git permission denied
- Generate GitHub Personal Access Token: https://github.com/settings/tokens
- Use token as password when prompted

---

## FILES CREATED FOR DEPLOYMENT

- `GITHUB_DEPLOYMENT_GUIDE.md` - Full guide
- `DEPLOY_WINDOWS.ps1` - PowerShell script
- `deploy.sh` - Bash script (for Mac/Linux)
- `PACKAGE_JSON_UPDATE.json` - Reference
- Updated `package.json` - Added deploy scripts

---

## IMPORTANT: UPDATE THESE VALUES

1. In `package.json`:
   ```json
   "homepage": "https://YOUR-USERNAME.github.io/samarjith-portfolio"
   ```

2. In git commands:
   ```bash
   https://github.com/YOUR-USERNAME/samarjith-portfolio.git
   ```

Replace `YOUR-USERNAME` with your actual GitHub username!

---

## WHAT HAPPENS AFTER DEPLOYMENT

✅ Your code is pushed to GitHub main branch
✅ npm run build creates production files in `dist/`
✅ npm run deploy copies `dist/` to `gh-pages` branch
✅ GitHub automatically serves from `gh-pages` branch
✅ Site is live in 5-10 minutes!

---

Good luck! 🚀
