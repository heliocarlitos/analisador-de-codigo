
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Code2, Info, FileText, BookOpen } from 'lucide-react';
import AlternadorTema from './AlternadorTema';
import SeletorIdioma from './LanguageSwitcher';
import MenuMobile from './MobileMenu';
import { useLanguage } from '@/utils/languageContext';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const itensNavegacao = [
    { path: '/', label: t("app.title"), icon: <Code2 className="w-5 h-5 mr-2" /> },
    { path: '/about', label: 'Sobre', icon: <Info className="w-5 h-5 mr-2" /> },
    { path: '/documentacao', label: 'Documentação', icon: <BookOpen className="w-5 h-5 mr-2" /> },
    { path: '/termos', label: 'Termos de Uso', icon: <FileText className="w-5 h-5 mr-2" /> },
    { path: '/privacidade', label: 'Privacidade', icon: <FileText className="w-5 h-5 mr-2" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <MenuMobile itensNavegacao={itensNavegacao} />
          
          <Link 
            to="/" 
            className="flex items-center text-lg font-semibold tracking-tight transition-colors"
          >
            <Code2 className="w-6 h-6 mr-2 text-primary" />
            <span className="hidden sm:inline-block">Analisador Huta</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-2">
            {itensNavegacao.slice(0, 3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "transition-all duration-200 px-3 py-2 rounded-md text-sm font-medium flex items-center",
                  location.pathname === item.path
                    ? "text-primary font-semibold bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {item.path === '/' ? null : item.icon}
                <span>{item.label === t("app.title") ? 'Início' : item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-2">
          <SeletorIdioma />
          <AlternadorTema />
          <a 
            href="https://github.com/hutadev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
