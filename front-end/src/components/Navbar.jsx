import "../styles/index.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/sru_logo.png"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full z-800 absolute bg-white lg:bg-transparent">
      <div className="max-w-7xl mx-auto px-8 py-4  flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-4 py-1 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition"
            >
              Pages
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl border border-gray-100 py-2">
                <Link
                  to="/" onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Home
                </Link>
                <Link
                  to="/contact-us" onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Contact Us
                </Link>
                <Link
                  to="/help-required" onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Help Required
                </Link>
                <Link
                  to="/donate" onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Donate
                </Link>
                <Link
                  to="/privacy-policy" onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-and-conditions" onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Terms & Conditions
                </Link>
              </div>
            )}
          </div>

          {/* Other Buttons */}
          <Link
            to="/about-us" onClick={() => setDropdownOpen(false)}
            className="px-4 py-1 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition"
          >
            About Us
          </Link>

          <Link
            to="/our-works" onClick={() => setDropdownOpen(false)}
            className="px-4 py-1 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition"
          >
            Our Works
          </Link>

          {/* CTA Button */}
          <Link
            to="/join-our-team" onClick={() => setDropdownOpen(false)}
            className="px-5 py-1 rounded-full bg-black text-white hover:bg-gray-900 transition"
          >
            Join Our Team
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {menuOpen ? (
            <span className="text-3xl font-light">&#10005;</span> // X
          ) : (
            <span className="text-3xl">&#9776;</span> // ☰
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 space-y-3 px-4">

          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="block w-full text-left px-4 py-2 rounded-full border border-gray-300 text-gray-700"
          >
            Pages
          </button>

          {/* Mobile dropdown items */}
          {dropdownOpen && (
            <div className="ml-4 space-y-2">
              <Link to="/contact-us" onClick={() => {
                setMenuOpen(false);
                setDropdownOpen(false);
              }} className="block text-gray-700">Contact Us</Link>
              <Link to="/help-required" onClick={() => {
                setMenuOpen(false);
                setDropdownOpen(false);
              }} className="block text-gray-700">Help Required</Link>
              <Link to="/donate" onClick={() => {
                setMenuOpen(false);
                setDropdownOpen(false);
              }} className="block text-gray-700">Donate</Link>
              <Link to="/privacy-policy" onClick={() => {
                setMenuOpen(false);
                setDropdownOpen(false);
              }} className="block text-gray-700">Privacy Policy</Link>
              <Link to="/terms-and-conditions" onClick={() => {
                setMenuOpen(false);
                setDropdownOpen(false);
              }} className="block text-gray-700">Terms & Conditions</Link>
            </div>
          )}

          <Link to="/about-us" onClick={() => {
            setMenuOpen(false);
            setDropdownOpen(false);
          }} className="block px-4 py-2 text-gray-700">
            About Us
          </Link>

          <Link to="/our-works" onClick={() => {
            setMenuOpen(false);
            setDropdownOpen(false);
          }} className="block px-4 py-2 text-gray-700">
            Our Works
          </Link>

          <Link
            to="/join-our-team" onClick={() => {
              setMenuOpen(false);
              setDropdownOpen(false);
            }}
            className="block px-4 py-2 rounded-full bg-black text-white text-center"
          >
            Join Our Team
          </Link>
        </div>
      )}
    </header>
  );
}