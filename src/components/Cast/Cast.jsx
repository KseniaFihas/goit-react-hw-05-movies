import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'components/API/Api';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div className={css.Wrapper}>
      <h2 className={css.CastHeader}>Cast</h2>

      {cast.length ? (
        <ul className={css.CastList}>
          {cast.map(actor => (
            <li className={css.CastListItem} key={actor.id}>
              {actor.profole_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <img
                  src={`https://via.placeholder.com/200x300?text=No+Image`}
                  alt={`${actor.name} profile`}
                />
              )}

              <div className={css.CastInfo}>
                <h3 className={css.CastName}>{actor.name}</h3>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.NoCastText}>
          We don't have any information about the cast yet.
        </p>
      )}
    </div>
  );
};

export default Cast;
