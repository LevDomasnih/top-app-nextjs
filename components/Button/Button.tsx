import {FC} from "react";
import styles from './Button.module.css'
import {ButtonProps} from "./Button.props";
import ArrowIcon from './arrow.svg'
import cn from 'classnames'

export const Button: FC<ButtonProps> = ({children, arrow = 'none', appearance, className, ...props})=> {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost',
            })}
            {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down',
                [styles.right]: arrow === 'right'
            })}>
                <ArrowIcon />
            </span>}
        </button>
    )
}