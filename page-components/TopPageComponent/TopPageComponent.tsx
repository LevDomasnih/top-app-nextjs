import {FC} from "react";
import {TopPageComponentProps} from "./TopPageComponent.props";

export const TopPageComponent: FC<TopPageComponentProps> = ({ firstCategory, page, products }) => {
    return (
        <>
            {products && products.length}
        </>
    )
}