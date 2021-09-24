import {FC} from "react";
import {LayoutProps} from "./Layout.props";
import {Sidebar} from "./Sidebar/Sidebar";
import {Footer} from "./Footer/Footer";
import {Header} from "./Header/Header";

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        )
    }
}