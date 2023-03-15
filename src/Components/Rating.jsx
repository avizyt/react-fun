import React, { useState } from "react";
import styles from "./Rating.module.css";
// import { GiRoundStar } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

function Rating() {
    const [selectRating, setSelectRating] = useState();

    function handleRatingClick(rating) {
        setSelectRating(rating);
    }

    return (
        <div className={styles.panel}>
            <FaStar className={styles.star} />
            <h2 className={styles.title}>How did we do?</h2>

            <p className={styles.description}>
                Please let us know how we did with your support? All feedback is
                appreciated to help us improve our service.
            </p>

            <div className={styles.group}>
                {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                        onClick={() => handleRatingClick(1)}
                        className={styles.rating}>
                        {rating}
                    </button>
                ))}
                {/* <button onClick={handleRatingClick} className={styles.rating}>
                    2
                </button>
                <button onClick={handleRatingClick} className={styles.rating}>
                    3
                </button>
                <button onClick={handleRatingClick} className={styles.rating}>
                    4
                </button>
                <button onClick={handleRatingClick} className={styles.rating}>
                    5
                </button> */}
            </div>

            <button className={styles.submit}>Submit</button>
        </div>
    );
}

export default Rating;
