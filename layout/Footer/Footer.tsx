import {FC} from "react";
import {FooterProps} from "./Footer.props";
import style from './Footer.module.css'
import cn from "classnames";
import { format } from 'date-fns'

export const Footer: FC<FooterProps> = ({className, ...props}) => {
    return (
        <footer {...props} className={cn(className, style.footer)}>
            <div>
                OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </div>
            <a href='#' target='_blank'>Пользовательское соглашение</a>
            <a href='#' target='_blank'>Политика конфиденциальности</a>
        </footer>
    )
}