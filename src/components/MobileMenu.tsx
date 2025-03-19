
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/utils/languageContext';
import AlternadorTema from './AlternadorTema';
import SeletorIdioma from './LanguageSwitcher';
import { useIsMobile } from '@/hooks/use-mobile';

interface MenuMobileProps {
  itensNavegacao: {
    path: string;
    label: string;
    icon: React.ReactNode;
  }[];
}

const MenuMobile: React.FC<MenuMobileProps> = ({ itensNavegacao }) => {
  const [aberto, setAberto] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const fecharMenu = () => setAberto(false);

  return (
    <Sheet open={aberto} onOpenChange={setAberto}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" aria-label="Menu" className="text-foreground">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      
      <SheetContent side="left" className="flex flex-col pt-10 glass w-[80vw] sm:w-[300px] border-r border-border/40">
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/" 
            className="flex items-center text-lg font-semibold"
            onClick={fecharMenu}
          >
            <span>{t("app.title")}</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={fecharMenu}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="flex flex-col space-y-2 mb-8">
          {itensNavegacao.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center p-3 rounded-md text-sm",
                location.pathname === item.path
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/70"
              )}
              onClick={fecharMenu}
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </Link>
          ))}
        </nav>
        
        <div className="mt-auto flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <AlternadorTema />
            <SeletorIdioma />
          </div>
          
          <div className="border-t border-border/40 pt-4 mt-2">
            <a 
              href="https://github.com/hutadev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-3 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/70"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuMobile;
