
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Basic = ({ children }) => {
    return (
        <>
            {children ? children : ( /* evita que el header y footer se dupliqen*/
                <>
                    <Header />
                    <div className="row justify-content-around" >
                        <Outlet></Outlet>
                    </div>
                    <Footer />
                </>
            )}
        </>
    );
}

export default Basic;