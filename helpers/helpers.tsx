import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import CoursesItem from "./icons/courses.svg";
import {TopLevelCategory} from "../interfaces/page.interface";
import ServicesItem from "./icons/services.svg";
import BooksItem from "./icons/books.svg";
import ProductsItem from "./icons/products.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesItem />, id: TopLevelCategory.Courses},
    { route: 'services', name: 'Сервисы', icon: <ServicesItem />, id: TopLevelCategory.Services},
    { route: 'books', name: 'Книги', icon: <BooksItem />, id: TopLevelCategory.Books},
    { route: 'products', name: 'Продукты', icon: <ProductsItem />, id: TopLevelCategory.Products}
]

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽')

export const declOfNum = (number: number, titles: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2]
    return titles[(number % 100 > 4 &&  number %100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
}