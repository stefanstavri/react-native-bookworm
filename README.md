# 📚 BookWorm – React Native Book Recommendation App

**BookWorm** is a full-stack mobile app built with React Native that allows users to share and discover book recommendations. Users can log in, browse community posts, share new books, and manage their own recommendations. 

This project uses a MERN-style stack adapted for mobile, with image upload, random avatars, and deployment handled in the cloud.

## ✨ Features

- 🔐 **User Authentication** – Secure login/register functionality
- 🏠 **Home Screen** – Feed of all user-submitted book recommendations
- ➕ **Create Recommendation** – Submit new books with description and image
- 👤 **Profile Screen** – View user info and manage personal book posts
  - Username, email, account creation date
  - List of submitted recommendations
  - Delete functionality for own posts
- 🖼️ **Image Uploads** via [Cloudinary](https://cloudinary.com/)
- 👤 **Avatar Generator** using [Dicebear](https://www.dicebear.com/)
- 🌐 **Backend Deployment** on [Render.com](https://render.com/)
- 🗃️ **Database** powered by [MongoDB](https://www.mongodb.com/)

## 🧑‍💻 Tech Stack

### Frontend
- React Native (Expo)
- React Navigation

### Backend
- Node.js
- MongoDB (Mongoose)
- Cloudinary SDK
- Dicebear Avatars API

### Deployment
- Backend hosted on Render.com
- Image storage via Cloudinary

### Prerequisites

- Node.js
- MongoDB Atlas account
- Cloudinary account
- Expo CLI


### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/react-native-bookworm.git
cd react-native-bookworm
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Environment Variables

Create .env files for both frontend and backend:

Frontend .env

```bash
API_URL=https://your-backend.onrender.com/api
```

Backend .env

```bash
MONGO_URI=your_mongo_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Run the App

```bash
cd mobile/
npx expo start
```

