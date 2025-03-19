
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AnalysisResult, analyzeCode } from '@/utils/codeAnalysis';
import { SupportedLanguage } from '@/utils/languageUtils';
import { Sparkles } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/utils/languageContext';

interface AnalisadorCodigoProps {
  codigo: string;
  linguagem: SupportedLanguage;
  aoAnaliseCompleta: (result: AnalysisResult) => void;
}

const AnalisadorCodigo: React.FC<AnalisadorCodigoProps> = ({ 
  codigo, 
  linguagem, 
  aoAnaliseCompleta 
}) => {
  const [analisando, setAnalisando] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const iniciarAnalise = async () => {
    if (!codigo.trim()) {
      toast({
        title: t("empty.code"),
        description: t("empty.code.message"),
        variant: "destructive",
      });
      return;
    }

    setAnalisando(true);
    
    // Simulando atraso de análise para experiência de usuário
    setTimeout(() => {
      try {
        const resultado = analyzeCode(codigo, linguagem);
        aoAnaliseCompleta(resultado);
        
        toast({
          title: t("analysis.complete"),
          description: t("issues.found", { count: resultado.issues.length, score: resultado.score }),
        });
      } catch (error) {
        toast({
          title: t("analysis.failed"),
          description: t("analysis.error"),
          variant: "destructive",
        });
        console.error("Erro de análise:", error);
      } finally {
        setAnalisando(false);
      }
    }, 1500);
  };

  return (
    <Button 
      onClick={iniciarAnalise} 
      className="w-full flex items-center justify-center bg-primary/90 hover:bg-primary transition-all text-white"
      disabled={analisando}
    >
      {analisando ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {t("analyzing")}
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          {t("analyze.button")}
        </>
      )}
    </Button>
  );
};

export default AnalisadorCodigo;
