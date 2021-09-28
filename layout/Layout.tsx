import {FC} from "react";
import {LayoutProps} from "./Layout.props";
import {Sidebar} from "./Sidebar/Sidebar";
import {Footer} from "./Footer/Footer";
import {Header} from "./Header/Header";
import style from './Layout.module.css'
import {AppContextProvider, IAppContext} from "../context/app.context";

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className={style.wrapper}>
            <Header className={style.header}/>
            <Sidebar className={style.sidebar}/>
            <div className={style.body}>
                {children}
            </div>
            <Footer className={style.footer}/>
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FC<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props}/>
                </Layout>
            </AppContextProvider>
        )
    }
}