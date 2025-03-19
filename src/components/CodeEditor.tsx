
import React, { useState, useEffect, useRef } from 'react';
import { SupportedLanguage, getLanguageSample } from '@/utils/languageUtils';

interface EditorCodigoProps {
  codigo: string;
  aoMudar: (codigo: string) => void;
  linguagem: SupportedLanguage;
}

const EditorCodigo: React.FC<EditorCodigoProps> = ({ codigo, aoMudar, linguagem }) => {
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const [numeroLinhas, setNumeroLinhas] = useState<number[]>([]);

  useEffect(() => {
    const linhas = codigo.split('\n').length;
    setNumeroLinhas(Array.from({ length: linhas }, (_, i) => i + 1));
  }, [codigo]);

  // Tratar tecla tab para indentação
  const tratarTeclaPressionada = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const inicio = target.selectionStart;
      const fim = target.selectionEnd;
      
      const novoValor = codigo.substring(0, inicio) + '  ' + codigo.substring(fim);
      aoMudar(novoValor);
      
      // Definir a posição do cursor após o tab inserido
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = inicio + 2;
      }, 0);
    }
  };

  const tratarRolagem = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (editorRef.current && e.currentTarget) {
      const linhasElemento = document.querySelector('.line-numbers');
      if (linhasElemento) {
        linhasElemento.scrollTop = e.currentTarget.scrollTop;
      }
    }
  };

  return (
    <div className="relative overflow-hidden rounded-lg border border-border/50 bg-secondary/30 backdrop-blur-sm group transition-all duration-300 hover:border-border/80 focus-within:border-primary/50">
      <div className="flex overflow-hidden">
        <div className="line-numbers select-none bg-secondary/50 text-muted-foreground/70 px-2 py-3 text-xs text-right overflow-y-hidden">
          {numeroLinhas.map((num) => (
            <div key={num} className="h-6 leading-6">
              {num}
            </div>
          ))}
        </div>
        <textarea
          ref={editorRef}
          value={codigo}
          onChange={(e) => aoMudar(e.target.value)}
          onKeyDown={tratarTeclaPressionada}
          onScroll={tratarRolagem}
          spellCheck={false}
          className="flex-1 font-mono text-sm p-3 bg-transparent outline-none min-h-[300px] w-full resize-none overflow-auto"
          placeholder={`Digite seu código ${linguagem} aqui...`}
        />
      </div>
      <div className="absolute bottom-2 right-2 flex items-center space-x-2 text-xs text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <span>{numeroLinhas.length} linhas</span>
        <span>|</span>
        <span>{linguagem.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default EditorCodigo;
