
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/utils/languageContext';

const AvisoCookies = () => {
  const [mostrar, setMostrar] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consentimento = localStorage.getItem('cookie-consent');
    if (!consentimento) {
      // Atraso para melhorar a experiência do usuário
      const timer = setTimeout(() => {
        setMostrar(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const aceitarCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setMostrar(false);
  };

  if (!mostrar) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
      <div className="max-w-3xl mx-auto glass-card p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold mb-1">{t('cookies.title')}</h3>
          <p className="text-sm text-muted-foreground">
            {t('cookies.message')}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Link to="/privacidade">
            <Button variant="ghost" size="sm">{t('cookies.more')}</Button>
          </Link>
          <Button 
            onClick={aceitarCookies} 
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            {t('cookies.accept')}
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-6 w-6 sm:hidden"
          onClick={aceitarCookies}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AvisoCookies;
