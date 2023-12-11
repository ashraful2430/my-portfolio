import Container from "../../Shared/Contailner";
import NavBarLink from "./NavBarlink";
import Sidebar from "./Sidebar";
import PropTypes from 'prop-types';


const Navbar = ({ currentSection, scrollToSection }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full fixed top-0 z-10 navbar bg-base-100 shadow-xl">
                    <Container>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">Code Crafter</div>
                        <NavBarLink scrollToSection={scrollToSection} currentSection={currentSection}></NavBarLink>
                    </Container>
                </div>
            </div>
            <div className="drawer-side mt-12 z-50">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <Sidebar scrollToSection={scrollToSection} currentSection={currentSection} ></Sidebar>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    currentSection: PropTypes.string.isRequired,
    scrollToSection: PropTypes.func.isRequired
};

export default Navbar;