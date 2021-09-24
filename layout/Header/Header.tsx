import {FC} from "react";
import {HeaderProps} from "./Header.props";
import style from './Header.module.css'

export const Header: FC<HeaderProps> = ({...props}) => {
    return (
        <div {...props} >
            Header
        </div>
    )
}