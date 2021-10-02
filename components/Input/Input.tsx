import {FC} from "react";
import {InputProps} from "./Input.props";
import cn from "classnames";
import styles from './Input.module.css'

export const Input: FC<InputProps> = ({ className, ...props}) => {
    return (
        <input className={cn(className, styles.input)} {...props} />
    )
}