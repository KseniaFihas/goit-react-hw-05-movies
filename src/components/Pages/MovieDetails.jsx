import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useParams, Outlet, useLocation, Link } from "react-router-dom";
import MovieCard from "components/MovieCard/MovieCard";
import { LoadingIndicator } from "components/SharedLayout/SharedLayout";
import { fetchMovieByID } from "components/API/Api";
import css from './MovieDetails.module.css'

const MovieDetails = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const [selectedMovie, setSelectedMovie] = useState({});


    useEffect(() => {
        const fetchSelectedMovie = async movieId => {
            try {
                const movieData = await fetchMovieByID(movieId);
                setSelectedMovie(movieData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchSelectedMovie(movieId);
    }, [movieId]);


    return (
        <main>
            <div className={css.container}>
                <Link to={location?.state?.from ?? '/'}>
                    <button className={css.Button} type="button">
                        Go back
                    </button>
                </Link>

                <MovieCard movie={selectedMovie} />

                <Suspense fallback={<LoadingIndicator />}>
                    <Outlet />
                </Suspense>
            </div>
        </main>
    );
};

export default MovieDetails;

