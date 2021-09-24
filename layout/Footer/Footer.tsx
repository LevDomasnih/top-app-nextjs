import {FC} from "react";
import {FooterProps} from "./Footer.props";
import style from './Footer.module.css'

export const Footer: FC<FooterProps> = ({...props}) => {
    return (
        <div {...props} >
            Footer
        </div>
    )
}