import {Button, Htag, Paragraph, Rating, Tag} from "../components";
import {useState} from "react";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";

function Home({menu}: HomeProps): JSX.Element {

    const [rating, setRating] = useState<number>(4)

    return (
        <>
            <Htag tag='h1'>Текст</Htag>
            <Button appearance='primary' arrow='right'>Текст1</Button>
            <Button appearance='ghost'>Текст2</Button>
            <Paragraph size='s'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi beatae, culpa dolorem
                dolores eligendi esse ex excepturi natus officiis omnis quam qui reiciendis repellat temporibus vel
                voluptate? Dignissimos, eveniet!</Paragraph>
            <Paragraph size='m'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi beatae, culpa dolorem
                dolores eligendi esse ex excepturi natus officiis omnis quam qui reiciendis repellat temporibus vel
                voluptate? Dignissimos, eveniet!</Paragraph>
            <Paragraph size='l'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi beatae, culpa dolorem
                dolores eligendi esse ex excepturi natus officiis omnis quam qui reiciendis repellat temporibus vel
                voluptate? Dignissimos, eveniet!</Paragraph>
            <Tag color='green'>Green</Tag>
            <Tag color='red'>Red</Tag>
            <Tag color='primary' size='m'>primary</Tag>
            <Tag color='grey' size='m'>Grey</Tag>
            <Tag color='ghost' size='m'>Ghost</Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating} />
        </>
    )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    })
    return {
        props: {
            menu,
            firstCategory
        }
    }
}

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[]
    firstCategory: number
}