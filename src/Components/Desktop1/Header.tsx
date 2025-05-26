import React, { useState, useEffect } from 'react';
import { Droplet } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-800/90 py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Droplet className="h-8 w-8 text-white mr-2" />
                    <span className="text-white font-bold text-xl">HANDS</span>
                </div>

                <nav className="hidden md:flex items-center space-x-6 text-white">
                    <a href="#home" className="hover:text-blue-300 transition">HOME</a>
                    <a href="#services" className="hover:text-blue-300 transition">SERVICES</a>
                    <a href="#about" className="hover:text-blue-300 transition">ABOUT</a>
                    <a href="#reviews" className="hover:text-blue-300 transition">REVIEWS</a>
                    <a href="#gallery" className="hover:text-blue-300 transition">GALLERY</a>
                    <a href="#contact" className="hover:text-blue-300 transition">CONTACT</a>
                </nav>

                <button
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-blue-900/95 text-white">
                    <nav className="flex flex-col space-y-3 px-4 py-4">
                        <a href="#home" className="hover:text-blue-300 transition" onClick={() => setIsMenuOpen(false)}>HOME</a>
                        <a href="#services" className="hover:text-blue-300 transition" onClick={() => setIsMenuOpen(false)}>SERVICES</a>
                        <a href="#about" className="hover:text-blue-300 transition" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
                        <a href="#reviews" className="hover:text-blue-300 transition" onClick={() => setIsMenuOpen(false)}>REVIEWS</a>
                        <a href="#gallery" className="hover:text-blue-300 transition" onClick={() => setIsMenuOpen(false)}>GALLERY</a>
                        <a href="#contact" className="hover:text-blue-300 transition" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
