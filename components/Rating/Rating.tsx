import {useEffect, useState, KeyboardEvent, ForwardedRef, forwardRef, useRef} from "react";
import {RatingProps} from "./Rating.props";
import StarIcon from './star.svg'
import cn from "classnames";
import styles from './Rating.module.css'

export const Rating = forwardRef(({isEditable = false, error, rating, setRating, tabIndex, ...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([])

    useEffect(() => {
        constructRating(rating)
    }, [rating, tabIndex])

    const computeFocus = (r: number, i: number): number => {
        if (!isEditable) {
            return -1
        }

        if (!rating && i === 0) {
            return tabIndex ?? 0
        }

        if (r == i + 1) {
            return tabIndex ?? 0
        }

        return -1
    }

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

                    tabIndex={computeFocus(rating, i)}
                    onKeyDown={handleKey}
                    ref={r=> ratingArrayRef.current?.push(r)}
                    role={isEditable ? 'slider' : ''}
                    aria-label={isEditable ? "Укажите рейтинг стрелками" : "рейтинг " + rating}
                    aria-valuenow={rating || 1}
                    aria-valuemax={5}
                    aria-valuemin={1}
                >
                    <StarIcon />
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
    
    const handleKey = (e: KeyboardEvent) => {
        if (!isEditable || !setRating) {
            return;
        }

        if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
            e.preventDefault()
            setRating(rating < 5 ? (rating || 0) + 1 : 5)
            ratingArrayRef.current[rating]?.focus()
        }
        if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
            e.preventDefault()
            setRating(rating > 1 ?(rating || 0) - 1 : 1)
            ratingArrayRef.current[rating - 2]?.focus()
        }
    }

    return (
        <div
            className={cn(styles.ratingWrapper, {
                [styles.error]: error
            })}
            {...props} ref={ref}
        >
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
            {error && <span className={styles.errorMessage} role='alert'>{error.message}</span>}
        </div>
    )
})