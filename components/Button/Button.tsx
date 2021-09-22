import {FC} from "react";
import styles from './Button.module.css'
import {ButtonProps} from "./Button.props";
import cn from 'classnames'

export const Button: FC<ButtonProps> = ({children, appearance})=> {
    return (
        <button
            className={cn(styles.button, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost',
            })}
        >
            {children}
        </button>
    )
}