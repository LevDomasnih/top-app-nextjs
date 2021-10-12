import {ButtonIconProps, icons} from "./ButtonIcon.props";
import {FC} from "react";
import cn from "classnames";
import styles from "../Button/Button.module.css";

export const ButtonIcon: FC<ButtonIconProps> = ({appearance ,icon, className, ...props}) => {
    const IconComp = icons[icon]

    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.white]: appearance == 'white',
            })}
            {...props}
        >
            <IconComp />
        </button>
    )
}