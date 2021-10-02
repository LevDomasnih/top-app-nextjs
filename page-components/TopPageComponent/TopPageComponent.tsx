import {FC} from "react";
import {TopPageComponentProps} from "./TopPageComponent.props";
import {HhData, Htag, Tag} from "../../components";
import styles from "./TopPageComponent.module.css"
import {TopLevelCategory} from "../../interfaces/page.interface";

export const TopPageComponent: FC<TopPageComponentProps> = ({ firstCategory, page, products }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products.length && <Tag color="green" size="m">{products.length}</Tag>}
                <span>Сортировка</span>
            </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                <Tag color="red" size="m">hh.ru</Tag>
            </div>
            {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
        </div>
    )
}