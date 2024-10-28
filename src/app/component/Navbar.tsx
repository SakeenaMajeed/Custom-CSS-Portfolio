"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styling/Navbar.css'; // CSS file import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <h1 className="logo">sakeena</h1>
          <button onClick={toggleMenu} className="menu-button">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
          <ul className={`menu ${isOpen ? 'show' : ''}`}>
            <li>
              <Link href="/" scroll={false}>Home</Link>
            </li>
            <li>
              <Link href="/about" scroll={false}>About</Link>
            </li>
            <li>
              <Link href="/contact" scroll={false}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
