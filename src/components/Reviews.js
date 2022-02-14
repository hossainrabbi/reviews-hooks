import React, { useState } from 'react';
import people from '../data';
import { ReviewsContainer } from '../styles/Elements.style';
import Review from './Review';

export default function Reviews() {
    const [index, setIndex] = useState(0);

    const checkLength = (num) => {
        if (num > people.length - 1) {
            return (num = 0);
        }

        if (num < 0) {
            return (num = people.length - 1);
        }

        return num;
    };

    const clickToRight = () => {
        setIndex((index) => {
            const newIndex = index + 1;
            return checkLength(newIndex);
        });
    };

    const clickToLeft = () => {
        setIndex((index) => {
            const newIndex = index - 1;
            return checkLength(newIndex);
        });
    };

    const randomReview = () => {
        const randomNumber = Math.floor(Math.random() * people.length);
        randomNumber === index
            ? setIndex(checkLength(randomNumber + 1))
            : setIndex(checkLength(randomNumber));
    };

    return (
        <ReviewsContainer>
            <Review
                {...people[index]}
                clickToRight={clickToRight}
                clickToLeft={clickToLeft}
                randomReview={randomReview}
            />
        </ReviewsContainer>
    );
}
