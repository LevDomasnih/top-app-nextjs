import {useEffect, useState, KeyboardEvent, ForwardedRef, forwardRef} from "react";
import {RatingProps} from "./Rating.props";
import StarIcon from './star.svg'
import cn from "classnames";
import styles from './Rating.module.css'

export const Rating = forwardRef(({isEditable = false, error, rating, setRating, ...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r, i) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
                    />
                </span>
            )
        })
        setRatingArray(updatedArray)
    }

    const onClick = (i: number) => {
        if (isEditable && setRating) {
            setRating(i)
        }
    }

    const changeDisplay = (i: number) => {
        if (isEditable) {
            constructRating(i)
        }
    }
    
    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code !== 'Space' || !setRating) {
            return;
        }
        setRating(i)
    }

    return (
        <div
            className={cn(styles.ratingWrapper, {
                [styles.error]: error
            })}
            {...props} ref={ref}
        >
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    )
})