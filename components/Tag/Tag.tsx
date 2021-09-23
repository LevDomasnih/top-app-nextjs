import {FC} from "react";
import {TagProps} from "./Tag.props";
import cn from "classnames";
import style from "./Tag.module.css";

export const Tag: FC<TagProps> = ({size = 's' ,children, href, color= 'ghost', className, ...props}) => {
    return (
        <div
            className={cn(style.tag, className, {
                [style.s]: size === 's',
                [style.m]: size === 'm',
                [style.ghost]: color === 'ghost',
                [style.primary]: color === 'primary',
                [style.green]: color === 'green',
                [style.grey]: color === 'grey',
                [style.red]: color === 'red',
            })}
            {...props}
        >
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    )
}