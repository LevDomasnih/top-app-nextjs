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

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesItem />, id: TopLevelCategory.Courses},
    { route: 'services', name: 'Сервисы', icon: <ServicesItem />, id: TopLevelCategory.Services},
    { route: 'books', name: 'Книги', icon: <BooksItem />, id: TopLevelCategory.Books},
    { route: 'products', name: 'Продукты', icon: <ProductsItem />, id: TopLevelCategory.Products}
]

export const Menu: FC = () => {
    const { menu, setMenu, firstCategory } = useContext(AppContext)

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menu => (
                    <div key={menu.route}>
                        <a href={`/${menu.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: menu.id === firstCategory
                            })}>
                                {menu.icon}
                                <span>
                                    {menu.name}
                                </span>
                            </div>
                        </a>
                        {menu.id === firstCategory && buildSecondLevel(menu)}
                    </div>
                ))}
            </>
        )
    }

    const buildSecondLevel = ({ route }: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages, route)}
                        </div>
                    </div>
                ))}
            </div>
        )
    }


    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <a href={`/${route}/${p.alias}`}
                   className={cn(styles.thirdLevel, {
                       [styles.thirdLevelActive]: false
                   })}
                >
                    {p.category}
                </a>
            ))
        )
    }


    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
}