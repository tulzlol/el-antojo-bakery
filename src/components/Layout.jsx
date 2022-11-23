import Navbar from "./NavBar";

export const Layout = ({ children }) => {
    return (
        <main style={{backgroundColor: "white"}}>
            <Navbar />
            {children}
        </main>
    );
};

