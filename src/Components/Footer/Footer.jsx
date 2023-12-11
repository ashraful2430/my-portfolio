import { Link } from "react-router-dom";
import Container from "../../Shared/Contailner";
import ashik from "../../assets/ashik.jpg"
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer w-full p-4 bg-base-300 text-base-content">
            <Container>

                <div className="flex flex-col md:flex-row justify-around w-full items-center">
                    <aside className="flex flex-col md:flex-row items-center justify-around gap-10">
                        <div className="flex  justify-center items-center gap-5">
                            <img className="w-14 h-14 rounded-full object-cover" src={ashik} alt="" />
                            <p className="text-xl font-bold">Ashraful Islam Ashik</p>
                        </div>
                        <p>Copyright © 2024 - Ashraful Islam Ashik </p>
                    </aside>
                    <div className="flex  justify-center items-center gap-8">
                        <Link to={'https://www.linkedin.com/in/ashraful-islam-ashik-7085a22a0'}>
                            <FaLinkedin className="text-3xl" />
                        </Link>
                        <Link to={'https://www.facebook.com/ashrafulislam.ashik.5473'}>
                            <FaFacebook className="text-3xl" />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;