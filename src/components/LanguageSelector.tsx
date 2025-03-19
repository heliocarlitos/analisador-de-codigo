
import React from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SupportedLanguage, SUPPORTED_LANGUAGES, getLanguageById } from '@/utils/languageUtils';

interface SeletorLinguagemProps {
  linguagemSelecionada: SupportedLanguage;
  aoMudarLinguagem: (language: SupportedLanguage) => void;
}

const SeletorLinguagem: React.FC<SeletorLinguagemProps> = ({
  linguagemSelecionada,
  aoMudarLinguagem,
}) => {
  const linguagem = getLanguageById(linguagemSelecionada);

  return (
    <div className="flex items-center space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center justify-between w-40 bg-background/50 backdrop-blur-sm border border-border/50">
            <span className="truncate">{linguagem.label}</span>
            <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 glass-card animate-fade-in" align="start">
          <DropdownMenuRadioGroup value={linguagemSelecionada} onValueChange={(value) => aoMudarLinguagem(value as SupportedLanguage)}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <DropdownMenuRadioItem
                key={lang.id}
                value={lang.id}
                className="cursor-pointer flex items-center justify-between px-3 py-2 text-sm"
              >
                {lang.label}
                {lang.id === linguagemSelecionada && (
                  <Check className="h-4 w-4 ml-2 text-primary" />
                )}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SeletorLinguagem;
