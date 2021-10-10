import {FC, useEffect, useReducer} from "react";
import {TopPageComponentProps} from "./TopPageComponent.props";
import {Advantages, HhData, Htag, Product, Sort, Tag} from "../../components";
import styles from "./TopPageComponent.module.css"
import {TopLevelCategory} from "../../interfaces/page.interface";
import {SortEnum} from "../../components/Sort/Sort.props";
import {sortReducer} from "./sort.reducer";

export const TopPageComponent: FC<TopPageComponentProps> = ({firstCategory, page, products}) => {
    const [{ products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating})

    const setSort = (sort: SortEnum) => {
        dispatchSort({ type: sort })
    }

    useEffect(() => {
        dispatchSort({ type: 'reset', initialState: products })
    }, [products])

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products.length && <Tag color="grey" size="m">{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div>
                {sortedProducts && sortedProducts.map(p => (<Product key={p._id} product={p} />))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                <Tag color="red" size="m">hh.ru</Tag>
            </div>
            {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
            {page.advantages && page.advantages.length > 0 && (
                <>
                    <Htag tag='h2'>Преимущества</Htag>
                    <Advantages advantages={page.advantages}/>
                </>
            )}
            {page.seoText && (
                <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>
            )}
            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map(t => <Tag color='primary' key={t}>{t}</Tag>)}
        </div>
    )
}