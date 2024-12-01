import clsx from "clsx";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//toast ui and context

const Layout = () => {
    //toast
    return(
        <>
            <Navbar />
            <main>
                {/* //toast */}
                <div>
                    <Outlet />
                    <Footer />
                </div>
            </main>
        </>
    )

}

export default Layout