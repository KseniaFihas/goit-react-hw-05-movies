import { Routes, Route, Navigate } from "react-router-dom";
// import { lazy } from "react";
import { Toaster } from 'react-hot-toast';
import SharedLayout from "./SharedLayout/SharedLayout";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MovieDetails from "./Pages/MovieDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

// const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
// const Home = lazy(() => import('./Pages/Home'));
// const Movies = lazy(() => import('./Pages/Movies'));
// const MovieDetails = lazy(() => import('./Pages/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
    return (
        <>
      <Routes>
                <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="movies/:movieId" element={<MovieDetails />} >
                <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route >
            </Routes>
      <Toaster />
        </>
    );
};

