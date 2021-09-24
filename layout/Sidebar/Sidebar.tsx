import {FC} from "react";
import {SidebarProps} from "./Sidebar.props";
import style from './Sidebar.module.css'

export const Sidebar: FC<SidebarProps> = ({...props}) => {
    return (
        <div {...props} >
            Sidebar
        </div>
    )
}