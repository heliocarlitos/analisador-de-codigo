
import React from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { AVAILABLE_LANGUAGES, useLanguage } from '@/utils/languageContext';

const SeletorIdioma = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  
  const idiomaAtual = AVAILABLE_LANGUAGES.find(lang => lang.id === currentLanguage);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="flex items-center gap-1 px-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-block text-xs font-medium">
            {idiomaAtual?.nativeName || 'Português'}
          </span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px] glass-card">
        {AVAILABLE_LANGUAGES.map((language) => (
          <DropdownMenuItem
            key={language.id}
            className={`cursor-pointer flex items-center gap-2 text-sm ${
              currentLanguage === language.id ? 'bg-primary/10 text-primary font-medium' : ''
            }`}
            onClick={() => changeLanguage(language.id)}
          >
            <span>{language.nativeName}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SeletorIdioma;
