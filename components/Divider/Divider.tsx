import {FC} from "react";
import {DividerProps} from "./Divider.props";
import styles from './Divider.module.css'
import cn from "classnames";

export const Divider: FC<DividerProps> = ({className, ...props}) => {
    return (
        <hr className={cn(className, styles.hr)} {...props} />
    )
}