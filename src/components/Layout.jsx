import Navbar from "./NavBar";
import Footer from "./Footer";

export const Layout = ({ children }) => {
    return (
        <main style={{backgroundColor: "#8EC5FC", backgroundImage: "linear-gradient(178deg, #8EC5FC 0%, #E0C3FC 100%)"}}>
            <Navbar />
            {children}
            <Footer/>
        </main>
    );
};

