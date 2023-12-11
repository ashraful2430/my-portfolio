import PropTypes from 'prop-types';

const NavBarLink = ({ scrollToSection }) => {
    return (
        <div className="flex-none hidden lg:block">
            <div className="menu menu-horizontal">
                <li ><a onClick={() => scrollToSection('home')}>Home</a></li>
                <li><a onClick={() => scrollToSection('about-me')}>About Me</a></li>
                <li ><a onClick={() => scrollToSection('skills')}>Skills</a></li>
                <li ><a onClick={() => scrollToSection('experience')}>Experience</a></li>
                <li ><a onClick={() => scrollToSection('projects')}>Projects</a></li>
                <li ><a onClick={() => scrollToSection('education')}>Education</a></li>
                <li ><a onClick={() => scrollToSection('contact')}>Contact me</a></li>
            </div>
        </div>
    );
};
NavBarLink.propTypes = {
    currentSection: PropTypes.string.isRequired,
    scrollToSection: PropTypes.func.isRequired
};

export default NavBarLink;