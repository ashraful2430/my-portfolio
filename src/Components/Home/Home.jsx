import { useCallback, useEffect, useState } from "react";
import Container from "../../Shared/Contailner";
import AboutMe from "../AboutMe/AboutMe";
import Navbar from "../Navbar/Navbar";
import AboutMeDetails from "../AboutMeDetails/AboutMeDetails";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";


const Home = () => {
    const [currentSection, setCurrentSection] = useState('home');

    const handleScroll = useCallback(() => {
        const sections = ['home', 'about-me', 'skills', 'experience', 'projects', 'education', 'contact'];

        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const section of sections) {
            const sectionElement = document.getElementById(section);

            if (sectionElement && scrollPosition >= sectionElement.offsetTop) {
                setCurrentSection(section);
                break;
            }
        }
    }, [setCurrentSection]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);



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
                    <AboutMeDetails></AboutMeDetails>
                    <Skills></Skills>
                    <Experience></Experience>
                    <Education></Education>
                </Container>
            </div>
        </div>
    );
};

export default Home;