import {FC, useEffect, useState} from "react";
import {RatingProps} from "./Rating.props";
import StarIcon from './star.svg'
import cn from "classnames";
import style from './Rating.module.css'

export const Rating: FC<RatingProps> = ({isEditable = false, rating, setRating, className, ...props}) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() => {
        constructRating(rating)
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r, i) => {
            return (
                <StarIcon className={cn(style.star, {
                    [style.filled]: i < currentRating
                })} />
            )
        })
        setRatingArray(updatedArray)
    }

    return (
        <div {...props} >
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
        </div>
    )
}