
import HeaderPage from '../components/Header';
import NavbarPage from '../components/Navbar';

const mainLayout = ({ children }) => {
    return (
        <>
            <HeaderPage></HeaderPage>
            <NavbarPage></NavbarPage>
            <main>
                {children}
            </main>
        </>
    );
};

export default mainLayout;