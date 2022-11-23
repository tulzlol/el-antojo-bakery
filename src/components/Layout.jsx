import Navbar from "./NavBar";

const Layout = ({ children }) => {
    return (
        <main style={{backgroundColor: "blue"}}>
            <Navbar />
            {children}
        </main>
    );
};

export default Layout;