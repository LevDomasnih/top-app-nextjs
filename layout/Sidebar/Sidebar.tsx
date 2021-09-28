import {FC} from "react";
import {SidebarProps} from "./Sidebar.props";
import style from './Sidebar.module.css'
import {Menu} from "../../Menu/Menu";

export const Sidebar: FC<SidebarProps> = ({...props}) => {
    return (
        <div {...props} >
            <Menu />
        </div>
    )
}