
import React, { useState, useEffect } from 'react';
import EditorCodigo from '@/components/CodeEditor';
import SeletorLinguagem from '@/components/LanguageSelector';
import AnalisadorCodigo from '@/components/CodeAnalyzer';
import ExibicaoResultados from '@/components/ResultsDisplay';
import Navbar from '@/components/Navbar';
import AvisoCookies from '@/components/CookieConsent';
import { SupportedLanguage, getLanguageSample } from '@/utils/languageUtils';
import { AnalysisResult } from '@/utils/codeAnalysis';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/utils/languageContext';
import { Link as RouterLink } from 'react-router-dom';

const Inicio = () => {
  const [linguagem, setLinguagem] = useState<SupportedLanguage>('javascript');
  const [codigo, setCodigo] = useState<string>('');
  const [analise, setAnalise] = useState<AnalysisResult | undefined>(undefined);
  const { t, currentLanguage } = useLanguage();
  
  useEffect(() => {
    setCodigo(getLanguageSample(linguagem));
    setAnalise(undefined);
  }, [linguagem]);

  const aoMudarLinguagem = (novaLinguagem: SupportedLanguage) => {
    setLinguagem(novaLinguagem);
  };
  
  const aoMudarCodigo = (novoCodigo: string) => {
    setCodigo(novoCodigo);
    // Resetar análise quando o código mudar
    if (analise) {
      setAnalise(undefined);
    }
  };
  
  const aoAnaliseCompleta = (resultado: AnalysisResult) => {
    setAnalise(resultado);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{t("app.title")} | {t("app.subtitle")}</title>
        <meta name="description" content={`${t("app.title")}. ${t("app.subtitle")} HTML, CSS, JavaScript, Java, C++, C# e Python.`} />
        <meta name="keywords" content="análise de código, qualidade de código, HutaDev, ferramentas para desenvolvedores, JavaScript, HTML, CSS, Java, Python" />
        <meta property="og:title" content={t("app.title")} />
        <meta property="og:description" content={t("app.subtitle")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://analisador.hutadev.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("app.title")} />
        <meta name="twitter:description" content={t("app.subtitle")} />
        <link rel="canonical" href="https://analisador.hutadev.com" />
        <html lang={currentLanguage} />
      </Helmet>
      
      <Navbar />
      <AvisoCookies />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 max-w-3xl mx-auto text-center animate-slide-down">
          <span className="inline-block px-3 py-1.5 rounded-full text-xs uppercase tracking-wide font-semibold bg-primary/10 text-primary mb-4">
            {t("app.tool")}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            {t("app.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t("app.subtitle")}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white/50 dark:bg-gray-950/50 backdrop-blur-md rounded-lg border border-border/50 p-5 shadow-sm">
              <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="text-lg font-semibold">{t("editor.title")}</h2>
                <SeletorLinguagem 
                  linguagemSelecionada={linguagem} 
                  aoMudarLinguagem={aoMudarLinguagem} 
                />
              </div>
              
              <EditorCodigo 
                codigo={codigo}
                aoMudar={aoMudarCodigo}
                linguagem={linguagem}
              />
              
              <div className="mt-4">
                <AnalisadorCodigo 
                  codigo={codigo}
                  linguagem={linguagem}
                  aoAnaliseCompleta={aoAnaliseCompleta}
                />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <ExibicaoResultados 
              resultado={analise}
              linguagem={linguagem}
            />
          </div>
        </div>
      </main>
      
      <footer className="border-t border-border/30 py-6 bg-secondary/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <RouterLink to="/documentacao" className="hover:text-foreground transition-colors">Documentação</RouterLink>
            <RouterLink to="/about" className="hover:text-foreground transition-colors">Sobre</RouterLink>
            <RouterLink to="/termos" className="hover:text-foreground transition-colors">Termos de Uso</RouterLink>
            <RouterLink to="/privacidade" className="hover:text-foreground transition-colors">Privacidade</RouterLink>
          </div>
          <p>&copy; {new Date().getFullYear()} HutaDev Analisador. {t("footer.rights")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Inicio;
