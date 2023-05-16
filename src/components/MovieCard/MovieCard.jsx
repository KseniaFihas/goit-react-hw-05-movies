import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { LoadingIndicator } from "components/SharedLayout/SharedLayout";
import { Link } from "react-router-dom";
import css from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
    const { title, relese_date, poster_path, vote_average, overview, genres } = movie;
    const location = useLocation();
    const releseDate = new Date(relese_date);

    const releaseYear = isNaN(releseDate) ? 'Unknown' : releseDate.getFullYear();
    const posterUrl = poster_path ? `https://image.tmdb.org/t/p/w400/${poster_path}` : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

    const userScore = vote_average ? `${(vote_average * 10).toFixed(0)}%` : 'Not rated yet';
    

    if (!title) {
        return <LoadingIndicator />;
    }

    return (
        <>
            <div className={css.Container}>
                <img className={css.img} src={posterUrl} alt={`${title} poster`} />
                <div className={css.MovieInfo}>
                    <h2 classsName={css.MovieName}>
                        {title ?? 'Unknown'} ({releaseYear})
                    </h2>
                    <p className={css.MovieInfoText}>User Score: {userScore}
                        <span className={css.MovieInfoTextBold}>Overview: </span> {overview}
                    </p>
                   
                    
                    {genres && genres.length > 0 && (
                        <p className={css.MovieInfoText}>
                            <span className={css.MovieInfoTextBold}>Genres:</span>
                            {genres.map(genre => genre.name).join(', ')}
                        </p>
                    )}
                </div>
            </div>
            
            <div className={css.Wrapper}>
                <h3 className={css.Info}>Additional information</h3>

                <ul className={css.List}>
                    <li className={css.ListItem}>
                        <Link className={css.Link} to="cast" state={{ from: location?.state?.from ?? '/' }}>
                            Cast
                        </Link>
                    </li>
                    <li className={css.ListItem}>
                        <Link className={css.Link} to='reviews' state={{ from: location?.state?.from ?? '/' }}>
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
        relese_date: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        vote_average: PropTypes.number,
        overview: PropTypes.string,
        genres: PropTypes.arrayOf(
            PropTypes.shape({ name: PropTypes.string.isRequired })
        ),
    }).isRequired,
};

export default MovieCard;