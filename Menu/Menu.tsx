import {FC, useContext} from "react";
import {AppContext} from "../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../interfaces/menu.interface";
import CoursesItem from './icons/courses.svg'
import ServicesItem from './icons/services.svg'
import BooksItem from './icons/books.svg'
import ProductsItem from './icons/products.svg'
import {TopLevelCategory} from "../interfaces/page.interface";
import styles from './Menu.module.css'
import cn from "classnames";
import Link from "next/link";
import {useRouter} from "next/router";

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesItem />, id: TopLevelCategory.Courses},
    { route: 'services', name: 'Сервисы', icon: <ServicesItem />, id: TopLevelCategory.Services},
    { route: 'books', name: 'Книги', icon: <BooksItem />, id: TopLevelCategory.Books},
    { route: 'products', name: 'Продукты', icon: <ProductsItem />, id: TopLevelCategory.Products}
]

export const Menu: FC = () => {
    const { menu, setMenu, firstCategory } = useContext(AppContext)
    const router = useRouter()

    const openSecondLevel= (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory === secondCategory) {
                m.isOpened = !m.isOpened
            }
            return m
        }))
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
                        <div key={m._id.secondCategory}>
                            <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
                            <div className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: m.isOpened
                            })}>
                                {buildThirdLevel(m.pages, route)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }


    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <Link href={`/${route}/${p.alias}`}>
                    <a className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
                    })}
                    >
                        {p.category}
                    </a>
                </Link>
            ))
        )
    }


    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
}