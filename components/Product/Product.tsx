import {ProductProps} from "./Product.props";
import {FC} from "react";

export const Product: FC<ProductProps> = ({ product, className, ...props}) => {
    return (
        <div>
            {product.title}
        </div>
    )
}