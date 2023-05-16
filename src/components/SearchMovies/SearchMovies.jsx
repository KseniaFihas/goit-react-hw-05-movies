import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import css from './SearchMovies.module.css';

const SearchMovies = ({ onsubmit }) => {
    const handleSubmit = e => {
        e.preventDefault();


        const query = e.target.elements.query.value;


        if (!query) {
            toast.error('Please enter something');
            return;
        }

        onsubmit(query);
        e.target.reset();
    };
    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input className={css.input}
                name="query"
                type="text"
                placeholder='Search movies' />
            <button className={css.button} type='submit'>Search</button>
        </form>
    );
};


SearchMovies.propTypes = { onSubmit: PropTypes.func.isRequired };

export default SearchMovies;