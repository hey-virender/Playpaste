# 🎵 YouTube Playlist Generator

A full-stack web application that allows users to paste a list of song names, authenticate with Google, and automatically create a YouTube playlist using the YouTube Data API.

---

## 📌 Features

- 🔐 **Google Authentication** (OAuth 2.0)
- 🎶 **Paste song list** to auto-create playlists
- 🔍 **Song Search** via YouTube API
- 🧠 Smart matching of song titles
- 📜 Auto-generated `sitemap.xml` and `robots.txt` for SEO
- 📱 Fully responsive design
- ⚡ Deployed on **Vercel**

---

## 🚀 Tech Stack

- **Frontend**: Next.js (App Router), Tailwind CSS
- **Backend/API**: Next.js Server Actions (Edge Functions)
- **Authentication**: NextAuth.js + Google Provider
- **SEO**: Metadata API + `next-sitemap`
- **Deployment**: Vercel

---

## 🛠️ Installation

```bash
git clone https://github.com/yourusername/yt-playlist-generator.git
cd yt-playlist-generator
npm install
