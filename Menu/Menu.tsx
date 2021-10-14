import {FC, KeyboardEvent, useContext} from "react";
import {AppContext} from "../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../interfaces/menu.interface";
import styles from './Menu.module.css'
import cn from "classnames";
import Link from "next/link";
import {useRouter} from "next/router";
import {firstLevelMenu} from "../helpers/helpers";
import {motion} from 'framer-motion'

export const Menu: FC = () => {
    const { menu, setMenu, firstCategory } = useContext(AppContext)
    const router = useRouter()
    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: {
            marginBottom: 0
        }
    }

    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 29
        },
        hidden: {
            opacity: 0,
            height: 0
        }
    }

    const openSecondLevel= (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory === secondCategory) {
                m.isOpened = !m.isOpened
            }
            return m
        }))
    }

    const openSecondLevelKey = (key: KeyboardEvent, category: string) => {
        if (key.code === 'Space' || key.code === 'Enter') {
            key.preventDefault()
            openSecondLevel(category)
        }
    }

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menu => (
                    <div key={menu.route}>
                        <Link href={`/${menu.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: menu.id === firstCategory
                            })}>
                                {menu.icon}
                                <span>
                                    {menu.name}
                                </span>
                            </div>
                        </Link>
                        {menu.id === firstCategory && buildSecondLevel(menu)}
                    </div>
                ))}
            </>
        )
    }

    const buildSecondLevel = ({ route }: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => {
                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true
                    }
                    return (
                        <div
                            tabIndex={0}
                            onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
                            key={m._id.secondCategory}
                        >
                            <div className={styles.secondLevel}
                                 onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}
                            </div>
                            <motion.div
                                layout
                                variants={variants}
                                initial={m.isOpened ? 'visible' : 'hidden'}
                                animate={m.isOpened ? 'visible' : 'hidden'}
                                className={cn(styles.secondLevelBlock)}
                            >
                                {buildThirdLevel(m.pages, route, m.isOpened ?? false)}
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        )
    }


    const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
        return (
            pages.map(p => (
                <motion.div
                    variants={variantsChildren}
                    key={p.alias}
                >
                    <Link href={`/${route}/${p.alias}`} >
                        <a tabIndex={isOpened ? 0 : -1} className={cn(styles.thirdLevel, {
                            [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
                        })}
                        >
                            {p.category}
                        </a>
                    </Link>
                </motion.div>
            ))
        )
    }


    return (
        <nav className={styles.menu} role='navigation'>
            {buildFirstLevel()}
        </nav>
    )
}