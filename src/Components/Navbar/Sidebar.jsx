import PropTypes from 'prop-types';

const Sidebar = ({ currentSection, scrollToSection }) => {
    return (
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li className={currentSection === 'home' ? 'text-[#66B888]' : ''}><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li className={currentSection === 'about-me' ? 'text-[#66B888]' : ''}><a onClick={() => scrollToSection('about-me')}>About Me</a></li>
            <li className={currentSection === 'skills' ? 'text-[#66B888]' : ''}><a onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li className={currentSection === 'experience' ? 'text-[#66B888]' : ''}><a onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li className={currentSection === 'projects' ? 'text-[#66B888]' : ''}><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li className={currentSection === 'education' ? 'text-[#66B888]' : ''}><a onClick={() => scrollToSection('education')}>Education</a></li>
            <li className={currentSection === 'contact' ? 'text-[#66B888]' : ''}><a onClick={() => scrollToSection('contact')}>Contact me</a></li>
        </ul>
    );
};

Sidebar.propTypes = {
    currentSection: PropTypes.string.isRequired,
    scrollToSection: PropTypes.func.isRequired
};

export default Sidebar;