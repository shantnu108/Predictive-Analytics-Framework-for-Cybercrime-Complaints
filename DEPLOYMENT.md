# Deployment Guide

## Overview
This project consists of:
- **Backend**: Node.js + Express API (deployed on Render)
- **Frontend**: Vite static site (deployed on Vercel OR Netlify - choose one)

---

## Step 1: Deploy Backend on Render

### 1. Push to GitHub
Ensure your code is pushed to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin master
```

### 2. Create Render Account
- Go to [render.com](https://render.com)
- Sign up/log in with GitHub

### 3. Create New Web Service
1. Click "New +"
2. Select "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `i4c-cybercrime-backend` (or any name)
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Runtime**: Node.js (latest)

### 4. Set Environment Variables
Add these in Render's Environment section:
```
PORT=5000
NODE_ENV=production
CORS_ORIGIN=*
I4C_MODEL_VERSION=2.4.0-ASTRO
```

### 5. Deploy
Click "Create Web Service" - Render will auto-deploy

### 6. Get Backend URL
After deployment, Render will give you a URL like:
```
https://i4c-cybercrime-backend.onrender.com
```
**Copy this URL** - you'll need it for the frontend.

---

## Step 2: Deploy Frontend on Vercel

### 1. Create Vercel Account
- Go to [vercel.com](https://vercel.com)
- Sign up/log in with GitHub

### 2. Create New Project
1. Click "Add New Project"
2. Select your GitHub repository
3. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 3. Set Environment Variables
Add this in Vercel's Environment Variables section:
```
VITE_API_BASE=https://your-backend-url.onrender.com/api
```
**Replace** `your-backend-url.onrender.com` with your actual Render backend URL.

### 4. Deploy
Click "Deploy" - Vercel will auto-deploy

### 5. Get Frontend URL
After deployment, Vercel will give you a URL like:
```
https://i4c-cybercrime-frontend.vercel.app
```

---

## Step 2B: Deploy Frontend on Netlify (Alternative to Vercel)

### 1. Create Netlify Account
- Go to [netlify.com](https://netlify.com)
- Sign up/log in with GitHub

### 2. Create New Site
1. Click "Add new site" → "Import an existing project"
2. Select your GitHub repository
3. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Branch to deploy**: `master`

### 4. Set Environment Variables
Click "Site settings" → "Environment variables" → "Add variable":
```
VITE_API_BASE=https://your-backend-url.onrender.com/api
```
**Replace** `your-backend-url.onrender.com` with your actual Render backend URL.

### 5. Deploy
Click "Deploy site" - Netlify will auto-deploy

### 6. Get Frontend URL
After deployment, Netlify will give you a URL like:
```
https://i4c-cybercrime-frontend.netlify.app
```

### Netlify Configuration File
The project includes `frontend/netlify.toml` which is automatically detected by Netlify:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Important Notes

### API Configuration
The frontend `api.js` already uses environment variables:
```javascript
const API_BASE = import.meta.env?.VITE_API_BASE || 'http://localhost:5000/api';
```

This means:
- **Local development**: Uses `http://localhost:5000/api`
- **Production**: Uses the `VITE_API_BASE` env var

### CORS Configuration
The backend is configured to allow all origins in production:
```javascript
CORS_ORIGIN=*
```

### Free Tier Limitations
- **Render Free Tier**: Spins down after 15 min inactivity (cold start ~30s)
- **Vercel Free Tier**: No spin-down, always fast
- **Netlify Free Tier**: No spin-down, always fast, generous bandwidth

### Next Steps After Deployment
1. Test your deployed frontend at the Vercel or Netlify URL
2. Verify API calls work by checking browser console
3. Monitor Render logs for any backend errors

---

## Troubleshooting

### Frontend shows API errors
- Check `VITE_API_BASE` is set correctly in Vercel or Netlify
- Verify backend is running on Render
- Check Render logs for errors

### Backend deployment fails
- Ensure `package.json` has correct `start` script
- Check all dependencies are in `package.json`
- Verify `server.js` is in the root of `backend/` folder

### CORS errors
- Backend has `CORS_ORIGIN=*` in production
- If needed, change to specific frontend URL

---

## Deployment URLs Example
After successful deployment:
- Backend: `https://i4c-cybercrime-backend.onrender.com`
- Frontend (Vercel): `https://i4c-cybercrime-frontend.vercel.app`
- Frontend (Netlify): `https://i4c-cybercrime-frontend.netlify.app`

Users will access the **frontend URL** (Vercel or Netlify) to use the application.
