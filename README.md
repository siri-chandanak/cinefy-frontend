# 🎬 Movie Recommendation Frontend

A modern frontend for the **Movie Recommendation System** built with **React**, **Vite**, and **Material UI**.  
This UI enables users to explore movies, view details, rate, like, and view personalized recommendations from the backend.

> ⚡ Powered by a backend API that handles authentication, recommendations, and analytics.

---

## 🚀 Features

- 🔍 Browse all movies
- 📊 Personalized recommendations
- ⭐ Rating & reviews
- ❤️ Likes & watch history
- 🔒 Authentication (Login / Register)
- 🧠 Dynamic trending & recommended movies
- 🎥 Poster images displayed from API

---

## 📦 Built With

- **React** (UI library)
- **Vite** (Fast development tooling)
- **Material UI** (UI components)
- **React Router** (Client routing)
- **Fetch / authFetch** API helpers

---

## 📥 Getting Started

### 🧰 Prerequisites

Ensure you have the following installed:

- Node.js (v16+)
- npm or yarn

---

### 🛠 Installation

1. Clone the repository:
```bash
git clone https://github.com/siri-chandanak/movie-recommendation-frontend.git
cd movie-recommendation-frontend
```

2. Install Dependencies:
```bash
npm install
# or
yarn
```

3. Create environment configuration:

Create a .env file in the root (optional if using defaults), e.g.:
```bash
VITE_API_BASE_URL=http://localhost:8080
```

4. Start frontend server:
```bash
npm run dev
# or
yarn dev
```

5. Open in browser:
```bash
http://localhost:5173
```

---

## 🧠 API Requirements

This frontend connects to a backend API that supports the following endpoints:

| Endpoint | Purpose |
|----------|----------|
| `POST /api/auth/login` | User login |
| `POST /api/auth/register` | User registration |
| `GET /api/movies` | List all movies |
| `GET /api/movies/:id` | Movie details |
| `GET /api/movies/:id/recommendations` | Personalized recommendations |
| `POST /api/movies/:id/rate` | Submit rating |
| `POST /api/movies/:id/review` | Add review |
| `GET /api/movies/:id/reviews` | List reviews |
| `GET /api/genres` | Fetch genres |

> ⚠️ Ensure the backend server is running before starting the frontend.

---

## 🗂 Folder Structure

```bash
movie-recommendation-frontend/
├─ public/
├─ src/
│  ├─ components/
│  ├─ pages/
│  ├─ api/
│  ├─ App.jsx
│  └─ main.jsx
├─ .gitignore
├─ package.json
└─ vite.config.js
```

---

## 🔒 Authentication Flow

- Users can **register** and **login**
- After login, a **JWT token** is stored in `localStorage`
- Protected routes (**recommendations, profile, history**) only work when logged in
- Token expiration automatically triggers logout

---

## 🧩 Authentication Helper

The project contains `authFetch` which:

- Adds the **Authorization header**
- Handles **401 errors / token expiration**
- Works with both **JSON** and **FormData** requests

---

## 🧠 Related Backend

To use this frontend, see the companion backend repository:

📦 **Backend:** `movie-recommendation-backend`  
(Link your backend repository here)

---

## 💡 Contributions

Contributions are welcome!  
Feel free to open issues or submit PRs for new features, bug fixes, or improvements.

---

## ⭐ License

This project is open-source and free to use.

---

## ❤️ Acknowledgements

Inspired by various React movie recommendation full-stack projects and tutorials online.