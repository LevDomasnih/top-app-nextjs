import {FC} from "react";
import {TextareaProps} from "./Textarea.props";
import cn from "classnames";
import styles from './Textarea.module.css'

export const Textarea: FC<TextareaProps> = ({ className, ...props}) => {
    return (
        <textarea className={cn(className, styles.textarea)} {...props} />
    )
}