import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ trendingMovies }) => {
    return (
        <div className={css.Section}>
            <h2 className={css.title}>Trending today</h2>
            <ul className={css.list}>
                {trendingMovies.map(trendingMovie => (
                    <li className={css.listItem} key={trendingMovie.id}>
                        <Link className={css.link} to={`/movies/${trendingMovie.id}`}>
                            {trendingMovie.title}
                        </Link>
                    </li>
                ))}
                    
            </ul>
            
        </div>
    );
};

export default MovieList;

MovieList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};