
import BreakingNews from '../components/BreakingNews';
import HeaderPage from '../components/Header';
import NavbarPage from '../components/Navbar';

const mainLayout = ({ children }) => {
    return (
        <>
            <HeaderPage></HeaderPage>
            <BreakingNews></BreakingNews>
            <NavbarPage></NavbarPage>
            <main>
                {children}
            </main>
        </>
    );
};

export default mainLayout;