import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer p-10 text-white">
            <aside className="mt-3">
                <figure><img className="w-[30px] h-[30px]" src="https://i.ibb.co/1TSyryC/Task-management-logo.webp" alt="Logo" /></figure>
                <p>TaskFlow<br />Copyright &copy; {new Date().getUTCFullYear()} TaskFlow | All rights reserved.</p>
                <div className="flex gap-3 mt-1">
                    <FaFacebookF className="text-lg" />
                    <FaLinkedinIn className="text-lg" />
                    <FaYoutube className="text-lg" />
                </div>
            </aside>
            <nav>
                <header className="footer-title">Benefited Persons</header>
                <a className="link link-hover">Students</a>
                <a className="link link-hover">Developers</a>
                <a className="link link-hover">Corporate professionals</a>
            </nav>
            <nav>
                <header className="footer-title">Quick Links</header>
                <a className="link link-hover" href="/">Home</a>
                <a className="link link-hover" href="/register">Register</a>
                <a className="link link-hover" href="/about-us">About us</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;