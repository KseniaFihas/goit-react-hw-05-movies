import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LoadingIndicator } from 'components/SharedLayout/SharedLayout';
import { Link } from 'react-router-dom';
import css from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } =
    movie;
  const location = useLocation();
  const releaseDate = new Date(release_date);

  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  if (!title) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <div className={css.container}>
        <img className={css.img} src={posterUrl} alt={`${title} poster`} />
        <div className={css.movie_info}>
          <h2 className={css.movie_name}>
            {title ?? 'Unknown'} ({releaseYear})
          </h2>
          <p className={css.movie_info_text}>
            User Score: {userScore}
            <span className={css.movie_info_text_bold}>Overview: </span>{' '}
            {overview}
          </p>

          {genres && genres.length > 0 && (
            <p className={css.movie_info_text}>
              <span className={css.movie_info_text_bold}>Genres:</span>
              {genres.map(genre => genre.name).join(', ')}
            </p>
          )}
        </div>
      </div>

      <div className={css.wrapper}>
        <h3 className={css.info}>Additional information</h3>

        <ul className={css.list}>
          <li className={css.list_item}>
            <Link
              className={css.link}
              to="cast"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Cast
            </Link>
          </li>
          <li className={css.list_item}>
            <Link
              className={css.link}
              to="reviews"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Reviewes
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};

export default MovieCard;
