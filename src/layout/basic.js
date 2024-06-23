import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer"; 

const Basic = ({ children }) => {
    return (
        <>
            <StrictMode>
                <Header />
                {children}
                <Footer />
            </StrictMode>
        </>
    );
}

export default Basic;