import {FC} from "react";
import styles from './Button.module.css'
import {ButtonProps} from "./Button.props";
import cn from 'classnames'

export const Button: FC<ButtonProps> = ({children, appearance, className, ...props})=> {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost',
            })}
            {...props}
        >
            {children}
        </button>
    )
}