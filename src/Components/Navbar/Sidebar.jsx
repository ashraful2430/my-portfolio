import PropTypes from 'prop-types';

const Sidebar = ({ scrollToSection }) => {
    return (
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li ><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about-me')}>About Me</a></li>
            <li ><a onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li ><a onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li ><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li ><a onClick={() => scrollToSection('education')}>Education</a></li>
            <li ><a onClick={() => scrollToSection('contact')}>Contact me</a></li>
        </ul>
    );
};

Sidebar.propTypes = {
    currentSection: PropTypes.string.isRequired,
    scrollToSection: PropTypes.func.isRequired
};

export default Sidebar;