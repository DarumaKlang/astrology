// src/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // This is the SVG for the Facebook logo.
    const facebookSVG = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1">
            <path d="M16.5 6h-1.5c-2.485 0-3 1.054-3 2.5v1.5h4l-.666 4H12V24h-4V14H6V10h2V8c0-4.418 1.582-7 6-7h2v3H14c-1.334 0-2 .666-2 2v2h4l-1 4H12v-4h4l.5-4h-4V8c0-.552.448-1 1-1h2c.552 0 1 .448 1 1V8h2V7c0-.552-.448-1-1-1z" />
        </svg>
    );

    // This is the SVG for the LINE logo.
    const lineSVG = (
        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.996 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.996 0zm4.72 16.591a2.802 2.802 0 0 1-1.63 2.072 2.83 2.83 0 0 1-1.892.684c-1.397.05-2.61-.837-2.61-.837s-.182-.12-.27-.12c-.089 0-.256.12-.256.12-1.353 1.258-3.033.45-3.033.45a3.107 3.107 0 0 1-1.464-1.284 5.378 5.378 0 0 1-.723-2.18c-.06-.51.107-1.44.107-1.44s.373-.837 1.18-.837c.72 0 1.228.66 1.228.66s.098.05.207.05c.107 0 .207-.05.207-.05.58-.66.68-1.558.68-1.558-.098-.79-.588-1.612-1.298-2.316-.364-.356-1.537-1.127-1.537-1.127s.098-.12.217-.12c.11 0 .217.12.217.12 1.353 1.258 1.933 1.054 1.933 1.054s.198.05.345.05c.147 0 .345-.05.345-.05 1.705-1.04 1.954-1.228 1.954-1.228s.099-.05.208-.05c.107 0 .207.05.207.05 1.705 1.04 2.285 1.248 2.285 1.248s.098.05.207.05c.108 0 .207-.05.207-.05.908-1.378 1.588-2.227 1.588-2.227s.12-.05.27-.05c.15 0 .27.05.27.05.41.24.41.282.41.282s-.27 1.01-1.484 2.115c-.474.437-.99 1.127-.99 1.127s-.198.24-.099.45c.098.21.317.437.317.437s.198.05.345.05c.147 0 .345-.05.345-.05 1.18-.837 1.725-.694 1.725-.694s.17.05.27.05c.108 0 .17-.05.17-.05.78-.654 1.484-.716 1.484-.716s.12-.05.27-.05c.15 0 .27.05.27.05.908-1.378 1.63-2.227 1.63-2.227s.12-.05.27-.05c.15 0 .27.05.27.05.41.24.41.282.41.282s-.27 1.01-1.484 2.115c-.474.437-.99 1.127-.99 1.127s-.198.24-.099.45c.098.21.317.437.317.437s.198.05.345.05c.147 0 .345-.05.345-.05 1.18-.837 1.725-.694 1.725-.694s.17.05.27.05c.108 0 .17-.05.17-.05.78-.654 1.484-.716 1.484-.716z"/>
        </svg>
    );

    return (
        <header className="relative z-20 w-full p-6">
            <nav className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-secondary-gold drop-shadow-lg">
                    Thai Astrology
                </Link>

                {/* Hamburger Menu Button for Mobile */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        ></path>
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-8 text-lg">
                    <li><Link href="/" className="text-white hover:text-secondary-gold transition-colors">Home</Link></li>
                    <li><Link href="/horadata" className="text-white hover:text-secondary-gold transition-colors">Informations</Link></li>
                    <li><Link href="/apipages" className="text-white hover:text-secondary-gold transition-colors">Components</Link></li>
                    <li><Link href="/contact" className="text-white hover:text-secondary-gold transition-colors">Contact Us</Link></li>
                    {/* Contact Buttons */}
                </ul>
            </nav>

            {/* Mobile Menu (Dropdown) */}
            {isMenuOpen && (
                <div className="md:hidden bg-primary-purple bg-opacity-80 backdrop-blur-sm mt-4 rounded-lg p-4">
                    <ul className="flex flex-col space-y-4 text-center">
                        <li><Link href="/" className="block text-white hover:text-secondary-gold transition-colors">Home</Link></li>
                        <li><Link href="/horadata" className="block text-white hover:text-secondary-gold transition-colors">Informations</Link></li>
                        <li><Link href="/apipages" className="block text-white hover:text-secondary-gold transition-colors">Components</Link></li>
                        <li><Link href="/contact" className="block text-white hover:text-secondary-gold transition-colors">Contact Us</Link></li>
                        {/* Contact Buttons in Mobile Menu */}
                    </ul>
                </div>
            )}
        </header>
    );
}
