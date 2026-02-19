import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";


import Login from "../pages/login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AdminAddMovie from "../pages/AdminAddMovie";
import Dashboard from "../pages/Dashboard";
import History from "../pages/History";
import MovieDetails from "../pages/MovieDetails";
import Movies from "../pages/Movies";
import Profile from "../pages/Profile";
import Recommendations from "../pages/Recommendations";
import AdminMovies from "../pages/AdminMovies";
import AdminEditMovie from "../pages/AdminEditMovie";


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                {/* PUBLIC ROUTES */}
                <Route
                    path="/"
                    element={
                        <PublicRoute>
                            <Home />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    }
                />

                {/* PROTECTED ROUTES */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/movies"
                    element={
                        <ProtectedRoute>
                            <Movies />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/movies/:id"
                    element={
                        <ProtectedRoute>
                            <MovieDetails />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/recommend"
                    element={
                        <ProtectedRoute>
                            <Recommendations />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/history"
                    element={
                        <ProtectedRoute>
                            <History />
                        </ProtectedRoute>
                    }
                />

                <Route path="/admin" element={
                        <ProtectedRoute role="ADMIN">
                            <AdminAddMovie />
                        </ProtectedRoute>
                    }
                />
                


                {/* FALLBACK */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />.
        </BrowserRouter>
    );
}