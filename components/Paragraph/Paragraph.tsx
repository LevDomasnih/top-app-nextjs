import {FC} from "react";
import {ParagraphProps} from "./Paragraph.props";
import style from './Paragraph.module.css'
import cn from "classnames";

export const Paragraph: FC<ParagraphProps> = ({size = 'm' ,children, ...props}) => {
    return (
        <p className={cn(style.p, {
            [style.s]: size === 's',
            [style.m]: size === 'm',
            [style.l]: size === 'l',
        })}
           {...props}
        >
            {children}
        </p>
    )
}
