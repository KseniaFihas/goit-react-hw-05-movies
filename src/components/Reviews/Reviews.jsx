import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from './Reviews.module.css';
import { fetchMovieRevies } from "components/API/Api";


const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const { results } = await fetchMovieRevies(movieId);
                setReviews(results);
            } catch (error) {
                console.log(error);
            }
        };
        fetchReviews();
    }, [movieId]);
    


    return (
        <div className={css.Wraper}>
            <h3 className={css.title}>Reviews</h3>

            {reviews.length ? (
                <ul className={css.list}>
                    {reviews.map(review => (
                        <li className={css.listItem} key={review.id}>
                            <h4 className={css.author}>Author: {review.author}</h4>
                            <p className={css.review}>{review.content}</p>
                        </li>
                    ))}
                   
                </ul>
            
            ) : (
                <p className={css.noReviews}> We don't have any reviews for this movie yet.</p>
            )}
                
        </div>
    );
    
};

export default Reviews;