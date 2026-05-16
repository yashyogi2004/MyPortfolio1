import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 shadow-lg z-50 nav-reveal">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a
            href="#hero"
            className="text-2xl font-bold text-blue-400 transition-transform duration-200 hover:scale-110 active:scale-95"
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNdB9czzh1-qUNDPCJGDHnAT3l_FH63ePBLw&s" alt="Yash Yogi" className="w-12 h-12 rounded-full" />
          </a>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link-reveal text-gray-200 hover:text-blue-400 hover:-translate-y-0.5 hover:scale-110 active:scale-95 transition duration-300"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-200 focus:outline-none transition-transform duration-200 hover:scale-110 active:scale-95"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4 mobile-menu-reveal">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-link-reveal block py-2 text-gray-200 hover:text-blue-400 hover:translate-x-2.5 transition duration-300"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
