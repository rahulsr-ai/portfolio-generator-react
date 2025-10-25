# Portfolio Builder Platform

A modern portfolio builder with customizable templates. Create stunning developer portfolios in minutes using Next.js, MongoDB, and Cloudinary.

## ✨ Features

- **2 Beautiful Templates** - Choose between classic and modern designs
- **Complete Portfolio Sections** - Hero, About, Skills, Projects, Testimonials, Blog, Contact
- **Image Upload** - Cloudinary integration for optimized images
- **Step-by-step Builder** - Easy 4-step portfolio creation
- **Edit Functionality** - Update portfolios anytime
- **Responsive Design** - Mobile-first approach

## 🚀 Quick Setup

### 1. Clone & Install
git clone https://github.com/rahulsr-ai/portfolio-generator-react.git
cd portfolio-generator-react
npm install

text

### 2. Environment Variables
Create `.env.local`:
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud_name"
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="portfolio_uploads"
NEXT_PUBLIC_CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
MONGO_URI="mongodb+srv://username:password@cluster.mongodb.net/portfolio-db"
NEXT_PUBLIC_URL="http://localhost:3000"
NODE_ENV="development"

text

### 3. Setup Services
- **MongoDB Atlas**: Create cluster → Get connection string
- **Cloudinary**: Create account → Create unsigned upload preset `portfolio_uploads`

### 4. Run
npm run dev

text

## 📦 Tech Stack

- **Frontend**: Next.js 14, React, Bootstrap 5
- **Backend**: Next.js API Routes
- **Database**: MongoDB Atlas
- **Storage**: Cloudinary
- **Deployment**: Vercel

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables
4. Deploy!

## 📱 Usage

1. **Create Portfolio**: Choose template → Fill 4-step form → Submit
2. **View Portfolios**: Browse showcase with search/filter
3. **Edit Portfolio**: Click edit button → Update → Save

---
