import {FC, useEffect, useState} from "react";
import {HeaderProps} from "./Header.props";
import styles from './Header.module.css'
import Logo from '../logo.svg'
import cn from "classnames";
import {ButtonIcon} from "../../components/ButtonIcon/ButtonIcon";
import { motion } from "framer-motion";
import {Sidebar} from "../Sidebar/Sidebar";
import { useRouter } from 'next/router'

export const Header: FC<HeaderProps> = ({className, ...props}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
        setIsOpened(false)
    }, [router])

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: 0,
            x: '100%'
        }
    }

    return (
        <header {...props} className={cn(className, styles.header)} >
            <Logo />
            <ButtonIcon onClick={() => setIsOpened(true)} icon='menu' appearance='white' />
            <motion.div
                variants={variants}
                initial='closed'
                className={styles.mobileMenu}
                animate={isOpened ? 'opened' : 'closed'}
            >
                <Sidebar />
                <ButtonIcon onClick={() => setIsOpened(false)} className={styles.menuClose} icon='close' appearance='white' />
            </motion.div>
        </header>
    )
}