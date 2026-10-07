import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/research', label: 'Research' },
  { path: '/publications', label: 'Publications' },
  { path: '/team', label: 'Team' },
  { path: '/opportunities', label: 'Opportunities' }
];

const Navigation = ({ isScrolled }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const linkClass = (item) => {
    const isActive = location.pathname === item.path ||
      (item.path === '/research' && location.pathname.startsWith('/research/'));

    return `link-underline transition-colors ${
      isActive ? 'text-stone-100' : 'text-stone-400 hover:text-stone-100'
    }`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled || isMenuOpen ? 'nav-blur bg-stone-950/90 py-3' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="font-display text-base lg:text-lg font-semibold teal-accent group-hover:text-[#b8c4a8] transition-colors">
            Enbody Lab
          </span>
          <img
            src="/images/cornell_seal_simple_web_white.png"
            alt="Cornell University"
            className="hidden lg:block h-8 opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </Link>

        <div className="hidden md:flex gap-3 lg:gap-8 font-body text-xs lg:text-sm tracking-wide">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass(item)}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden font-body text-xs tracking-[0.18em] uppercase text-stone-300 hover:text-stone-100 transition-colors"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="md:hidden border-t border-stone-800/80 mt-3 bg-stone-950/95">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-5 font-body text-sm tracking-wide">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass(item)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
