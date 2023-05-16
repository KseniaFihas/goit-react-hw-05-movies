import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { fetchMovieByName } from '../API/Api';
import SearchMovies from '../SearchMovies/SearchMovies';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  
  useEffect(() => {
    const query = searchParams.get('query') ?? ''

   
    const getMovie = async () => {
      try {
        const { results } = await fetchMovieByName(query);

        
        if (results.length === 0) {
          toast.dismiss(); 
          toast.error('No movies found');
          setMovies([]); 
        } else {
          setMovies(results); 
        }
      } catch (error) {
        toast.error(error.message);
        setMovies([]);
      }
    };

   
      getMovie();
  }, [searchParams]);

  
  const handleSubmit = query => {
    setSearchParams({ query }); 
  };

  return (
    <main>
      <div className={css.Section}>
        <h2 className={css.title}>Movies Page</h2>

        <SearchMovies onSubmit={handleSubmit} /> 

        <ul className={css.list}>
          {movies.map(movie => (
            <li className={css.listItem} key={movie.id}>

              
              <Link className={css.link} to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Movies;

