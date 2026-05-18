
import NavbarPage from '../components/Navbar';

const authLayout = ({ children }) => {
    return (
        <>
            <NavbarPage></NavbarPage>
            <main>
                {children}
            </main>
        </>
    );
};

export default authLayout;