import { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'components/API/Api';
import MovieList from 'components/MovieList/MovieList';
import { LoadingIndicator } from 'components/SharedLayout/SharedLayout';

const Home = () => {
  const [trendingMovies, setTrendingMoves] = useState([]);
  const [isLoading, setIsLoadiong] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setError(false);
        setIsLoadiong(true);
        const { results } = await fetchTrendMovies();
        setTrendingMoves(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoadiong(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : error ? (
        <p>
          Sorry, we could not fetch the trending movies. Please try again later.
        </p>
      ) : (
        <MovieList trendingMovies={trendingMovies} />
      )}
    </>
  );
};

export default Home;
