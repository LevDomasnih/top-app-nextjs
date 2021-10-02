import {FC} from "react";
import {SidebarProps} from "./Sidebar.props";
import style from './Sidebar.module.css'
import {Menu} from "../../Menu/Menu";
import Logo from '../logo.svg'
import cn from "classnames";

export const Sidebar: FC<SidebarProps> = ({className, ...props}) => {
    return (
        <div className={cn(className, style.sidebar)} {...props}>
            <Logo className={style.logo} />
            <div>Поиск</div>
            <Menu />
        </div>
    )
}