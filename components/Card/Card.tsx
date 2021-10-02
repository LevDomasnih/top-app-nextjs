import {FC} from "react";
import {CardProps} from "./Card.props";
import cn from "classnames";
import styles from './Card.module.css'

export const Card: FC<CardProps> = ({ color= 'white', className, children, ...props}) => {
    return (
        <div
            className={cn(styles.card, className, {
                [styles.blue]: color === 'blue'
            })}
            {...props}
        >
            {children}
        </div>
    )
}