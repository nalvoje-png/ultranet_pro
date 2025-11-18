import React from 'react';
import Logo from '../assets/Logo';
import { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setPage: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, setPage, children }) => {
  const isActive = currentPage === page;
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        setPage(page);
      }}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive
          ? 'text-white bg-teal-500'
          : 'text-slate-300 hover:bg-slate-700 hover:text-white'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, setPage }) => {
  return (
    <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => setPage('home')} className="cursor-pointer" aria-label="Go to homepage">
          <Logo />
        </button>
        <nav className="flex space-x-2 md:space-x-4">
          <NavLink page="home" currentPage={currentPage} setPage={setPage}>Início</NavLink>
          <NavLink page="how-it-works" currentPage={currentPage} setPage={setPage}>Como Funciona</NavLink>
          <NavLink page="dashboard" currentPage={currentPage} setPage={setPage}>Minhas Indicações</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;