import { useEffect, useState } from "react";
import Container from "../../Shared/Contailner";
import AboutMe from "../AboutMe/AboutMe";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    const [currentSection, setCurrentSection] = useState('home');
    const handleScroll = () => {
        const aboutMeSection = document.getElementById('home')


        const scrollPosition = window.scrollY + window.innerHeight / 2
        if (aboutMeSection && scrollPosition >= aboutMeSection.offsetTop) {
            setCurrentSection('home')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const scrollToSection = (section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            setCurrentSection(section);
        }
    };
    return (
        <div className="font-merri ">
            <Navbar scrollToSection={scrollToSection} currentSection={currentSection}></Navbar>
            <div className="mt-20">
                <Container>
                    <AboutMe></AboutMe>
                </Container>
            </div>
        </div>
    );
};

export default Home;