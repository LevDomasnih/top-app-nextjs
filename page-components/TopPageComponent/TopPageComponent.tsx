import {FC} from "react";
import {TopPageComponentProps} from "./TopPageComponent.props";
import {Advantages, HhData, Htag, Sort, Tag} from "../../components";
import styles from "./TopPageComponent.module.css"
import {TopLevelCategory} from "../../interfaces/page.interface";
import {SortEnum} from "../../components/Sort/Sort.props";

export const TopPageComponent: FC<TopPageComponentProps> = ({firstCategory, page, products}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products.length && <Tag color="green" size="m">{products.length}</Tag>}
                <Sort sort={SortEnum.Rating} setSort={() => {return false}} />
            </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
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