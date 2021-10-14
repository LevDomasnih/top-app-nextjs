import {FC, useState, KeyboardEvent, useRef} from "react";
import {LayoutProps} from "./Layout.props";
import {Sidebar} from "./Sidebar/Sidebar";
import {Footer} from "./Footer/Footer";
import {Header} from "./Header/Header";
import style from './Layout.module.css'
import {AppContextProvider, IAppContext} from "../context/app.context";
import {Up} from "../components";
import cn from "classnames";

const Layout: FC<LayoutProps> = ({children}) => {
    const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false)
    const bodyRef = useRef<HTMLDivElement>(null)

    const skipContentAction = (key: KeyboardEvent) => {
        if (key.code === 'Space' || key.code === 'Enter') {
            key.preventDefault()
            bodyRef.current?.focus()
        }

        setIsSkipLinkDisplayed(false)
    }

    return (
        <div className={style.wrapper}>
            <a
                tabIndex={1}
                className={cn(style.skipLink, {
                    [style.displayed]: isSkipLinkDisplayed
                })}
                onFocus={() => setIsSkipLinkDisplayed(true)}
                onKeyDown={skipContentAction}
            >
                Сразу к содержанию
            </a>
            <Header className={style.header}/>
            <Sidebar className={style.sidebar}/>
            <main className={style.body} ref={bodyRef} tabIndex={0} role='main'>
                {children}
            </main>
            <Footer className={style.footer}/>
            <Up />
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