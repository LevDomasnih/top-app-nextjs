import styles from './Up.module.css'
import ArrowIcon from './arrow.svg'
import {useScrollY} from "../../hooks/useScrollY";
import {useAnimation, motion} from "framer-motion";
import {useEffect} from "react";

export const Up = () => {
    const controls = useAnimation()
    const y = useScrollY()

    useEffect(() => {
        controls.start({
            opacity: y / document.body.scrollHeight
        })
    }, [y, controls])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <motion.button
            className={styles.up}
            onClick={scrollToTop}
            animate={controls}
            initial={{ opacity: 0 }}
        >
            <ArrowIcon />
        </motion.button>
    )
}