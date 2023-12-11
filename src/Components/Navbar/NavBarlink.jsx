import PropTypes from 'prop-types';

const NavBarLink = ({ currentSection, scrollToSection }) => {
    return (
        <div className="flex-none hidden lg:block">
            <div className="menu menu-horizontal">
                <li className={currentSection === 'home' ? 'text-[#66B888]' : ''}><a onClick={() => scrollToSection('home')}>Home</a></li>
                <li className={currentSection === 'about-me' ? 'text-[#66B888]' : ''}><a onClick={() => scrollToSection('about-me')}>About Me</a></li>
                <li className={currentSection === 'skills' ? 'text-[#66B888]' : ''}><a onClick={() => scrollToSection('skills')}>Skills</a></li>
                <li className={currentSection === 'experience' ? 'text-[#66B888]' : ''}><a onClick={() => scrollToSection('experience')}>Experience</a></li>
                <li className={currentSection === 'projects' ? 'text-[#66B888]' : ''}><a onClick={() => scrollToSection('projects')}>Projects</a></li>
                <li className={currentSection === 'education' ? 'text-[#66B888]' : ''}><a onClick={() => scrollToSection('education')}>Education</a></li>
                <li className={currentSection === 'contact' ? 'text-[#66B888]' : ''}><a onClick={() => scrollToSection('contact')}>Contact me</a></li>
            </div>
        </div>
    );
};
NavBarLink.propTypes = {
    currentSection: PropTypes.string.isRequired,
    scrollToSection: PropTypes.func.isRequired
};

export default NavBarLink;