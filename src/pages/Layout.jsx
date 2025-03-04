import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"



let Layout = () => {
    return (
        <>
            <Header/>

                <Outlet />

            <Footer />
        </>
    )
}

export default Layout;