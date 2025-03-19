
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const AlternadorTema: React.FC = () => {
  const [tema, setTema] = useState<'claro' | 'escuro'>('claro');

  useEffect(() => {
    // Verificar preferência salva ou tema do sistema
    const temaSalvo = localStorage.getItem('tema') as 'claro' | 'escuro' | null;
    const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (temaSalvo) {
      setTema(temaSalvo);
      document.documentElement.classList.toggle('dark', temaSalvo === 'escuro');
    } else if (prefereEscuro) {
      setTema('escuro');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const alternarTema = () => {
    const novoTema = tema === 'claro' ? 'escuro' : 'claro';
    setTema(novoTema);
    document.documentElement.classList.toggle('dark', novoTema === 'escuro');
    localStorage.setItem('tema', novoTema);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={tema === 'claro' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
      onClick={alternarTema}
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      {tema === 'claro' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
};

export default AlternadorTema;
