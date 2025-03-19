
import React, { createContext, useContext, useState, useEffect } from 'react';

export type AvailableLanguage = 'pt' | 'en' | 'fr' | 'es' | 'ja' | 'ar' | 'zh' | 'ru';

export interface LanguageOption {
  id: AvailableLanguage;
  label: string;
  nativeName: string;
  dir?: 'ltr' | 'rtl';
}

export const AVAILABLE_LANGUAGES: LanguageOption[] = [
  { id: 'pt', label: 'Português', nativeName: 'Português' },
  { id: 'en', label: 'English', nativeName: 'English' },
  { id: 'fr', label: 'Français', nativeName: 'Français' },
  { id: 'es', label: 'Español', nativeName: 'Español' },
  { id: 'ja', label: 'Japanese', nativeName: '日本語' },
  { id: 'ar', label: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  { id: 'zh', label: 'Chinese', nativeName: '中文' },
  { id: 'ru', label: 'Russian', nativeName: 'Русский' }
];

export interface LanguageContextType {
  currentLanguage: AvailableLanguage;
  changeLanguage: (lang: AvailableLanguage) => void;
  t: (key: string) => string;
}

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

// Traduções básicas para começar
const translations: Translations = {
  pt: {
    "app.title": "Analisador de Código Huta",
    "app.subtitle": "Analise, otimize e melhore a qualidade do seu código",
    "app.tool": "Ferramenta de Qualidade de Código",
    "editor.title": "Editor de Código",
    "analyze.button": "Analisar Código",
    "analyzing": "Analisando...",
    "result.title": "Resultados da Análise",
    "result.info": "Clique em \"Analisar Código\" para verificar a qualidade do seu código e obter sugestões de melhorias.",
    "score.title": "Pontuação de Qualidade",
    "score.based": "Baseada em problemas, métricas e boas práticas",
    "lines": "Linhas",
    "complexity": "Complexidade",
    "maintainability": "Manutenibilidade",
    "issues": "Problemas",
    "suggestions": "Sugestões",
    "report": "Relatório",
    "no.issues": "Nenhum problema encontrado. Ótimo trabalho!",
    "empty.code": "Código vazio",
    "empty.code.message": "Por favor, insira algum código para analisar",
    "analysis.complete": "Análise concluída",
    "issues.found": "Encontrados {count} problemas com pontuação de {score}/100",
    "analysis.failed": "Falha na análise",
    "analysis.error": "Ocorreu um erro ao analisar seu código",
    "footer.rights": "Todos os direitos reservados.",
    "line": "Linha",
    "cookies.title": "Utilizamos cookies",
    "cookies.message": "Este site utiliza cookies para melhorar sua experiência. Ao utilizar nosso site, você concorda com nossos termos.",
    "cookies.accept": "Aceitar",
    "cookies.more": "Saber mais"
  },
  en: {
    "app.title": "Huta Code Analyzer",
    "app.subtitle": "Analyze, optimize and improve your code quality",
    "app.tool": "Code Quality Tool",
    "editor.title": "Code Editor",
    "analyze.button": "Analyze Code",
    "analyzing": "Analyzing...",
    "result.title": "Analysis Results",
    "result.info": "Click \"Analyze Code\" to check your code quality and get improvement suggestions.",
    "score.title": "Quality Score",
    "score.based": "Based on issues, metrics and best practices",
    "lines": "Lines",
    "complexity": "Complexity",
    "maintainability": "Maintainability",
    "issues": "Issues",
    "suggestions": "Suggestions",
    "report": "Report",
    "no.issues": "No issues found. Great job!",
    "empty.code": "Empty code",
    "empty.code.message": "Please enter some code to analyze",
    "analysis.complete": "Analysis complete",
    "issues.found": "Found {count} issues with a score of {score}/100",
    "analysis.failed": "Analysis failed",
    "analysis.error": "An error occurred while analyzing your code",
    "footer.rights": "All rights reserved.",
    "line": "Line",
    "cookies.title": "We use cookies",
    "cookies.message": "This website uses cookies to improve your experience. By using our site, you agree to our terms.",
    "cookies.accept": "Accept",
    "cookies.more": "Learn more"
  },
  fr: {
    "app.title": "Analyseur de Code Huta",
    "app.subtitle": "Analysez, optimisez et améliorez la qualité de votre code",
    "app.tool": "Outil de Qualité de Code",
    "editor.title": "Éditeur de Code",
    "analyze.button": "Analyser le Code",
    "analyzing": "En cours d'analyse...",
    "result.title": "Résultats de l'Analyse",
    "result.info": "Cliquez sur \"Analyser le Code\" pour vérifier la qualité de votre code et obtenir des suggestions d'amélioration.",
    "score.title": "Score de Qualité",
    "score.based": "Basé sur les problèmes, les métriques et les bonnes pratiques",
    "lines": "Lignes",
    "complexity": "Complexité",
    "maintainability": "Maintenabilité",
    "issues": "Problèmes",
    "suggestions": "Suggestions",
    "report": "Rapport",
    "no.issues": "Aucun problème trouvé. Excellent travail!",
    "empty.code": "Code vide",
    "empty.code.message": "Veuillez saisir du code à analyser",
    "analysis.complete": "Analyse terminée",
    "issues.found": "Trouvé {count} problèmes avec un score de {score}/100",
    "analysis.failed": "L'analyse a échoué",
    "analysis.error": "Une erreur s'est produite lors de l'analyse de votre code",
    "footer.rights": "Tous droits réservés.",
    "line": "Ligne",
    "cookies.title": "Nous utilisons des cookies",
    "cookies.message": "Ce site utilise des cookies pour améliorer votre expérience. En utilisant notre site, vous acceptez nos conditions.",
    "cookies.accept": "Accepter",
    "cookies.more": "En savoir plus"
  },
  es: {
    "app.title": "Analizador de Código Huta",
    "app.subtitle": "Analiza, optimiza y mejora la calidad de tu código",
    "app.tool": "Herramienta de Calidad de Código",
    "editor.title": "Editor de Código",
    "analyze.button": "Analizar Código",
    "analyzing": "Analizando...",
    "result.title": "Resultados del Análisis",
    "result.info": "Haz clic en \"Analizar Código\" para verificar la calidad de tu código y obtener sugerencias de mejora.",
    "score.title": "Puntuación de Calidad",
    "score.based": "Basada en problemas, métricas y mejores prácticas",
    "lines": "Líneas",
    "complexity": "Complejidad",
    "maintainability": "Mantenibilidad",
    "issues": "Problemas",
    "suggestions": "Sugerencias",
    "report": "Informe",
    "no.issues": "No se encontraron problemas. ¡Excelente trabajo!",
    "empty.code": "Código vacío",
    "empty.code.message": "Por favor, ingresa algún código para analizar",
    "analysis.complete": "Análisis completo",
    "issues.found": "Se encontraron {count} problemas con una puntuación de {score}/100",
    "analysis.failed": "El análisis falló",
    "analysis.error": "Ocurrió un error al analizar tu código",
    "footer.rights": "Todos los derechos reservados.",
    "line": "Línea",
    "cookies.title": "Usamos cookies",
    "cookies.message": "Este sitio utiliza cookies para mejorar tu experiencia. Al usar nuestro sitio, aceptas nuestros términos.",
    "cookies.accept": "Aceptar",
    "cookies.more": "Saber más"
  },
  // Adicione traduções básicas para os outros idiomas também
  ja: {
    "app.title": "Huta コード分析ツール",
    "app.subtitle": "コードの品質を分析、最適化、改善する",
    "app.tool": "コード品質ツール",
    "editor.title": "コードエディタ",
    "analyze.button": "コード分析",
    "analyzing": "分析中...",
    "result.title": "分析結果",
    "result.info": "「コード分析」をクリックして、コードの品質をチェックし、改善提案を得ましょう。",
    "score.title": "品質スコア",
    "score.based": "問題、指標、ベストプラクティスに基づいています",
    "lines": "行数",
    "complexity": "複雑さ",
    "maintainability": "保守性",
    "issues": "問題",
    "suggestions": "提案",
    "report": "レポート",
    "no.issues": "問題は見つかりませんでした。素晴らしい仕事です！",
    "empty.code": "コードが空です",
    "empty.code.message": "分析するコードを入力してください",
    "analysis.complete": "分析完了",
    "issues.found": "{count}個の問題が見つかりました。スコアは{score}/100です",
    "analysis.failed": "分析に失敗しました",
    "analysis.error": "コードの分析中にエラーが発生しました",
    "footer.rights": "All rights reserved.",
    "line": "行",
    "cookies.title": "Cookieを使用しています",
    "cookies.message": "このウェブサイトでは、エクスペリエンスを向上させるためにCookieを使用しています。サイトを利用することで、利用規約に同意したことになります。",
    "cookies.accept": "承諾する",
    "cookies.more": "詳細を見る"
  },
  ar: {
    "app.title": "محلل الشفرة هوتا",
    "app.subtitle": "حلل وحسن وطور جودة الشفرة البرمجية الخاصة بك",
    "app.tool": "أداة جودة الشفرة البرمجية",
    "editor.title": "محرر الشفرة البرمجية",
    "analyze.button": "تحليل الشفرة",
    "analyzing": "جاري التحليل...",
    "result.title": "نتائج التحليل",
    "result.info": "انقر على \"تحليل الشفرة\" للتحقق من جودة الشفرة البرمجية والحصول على اقتراحات للتحسين.",
    "score.title": "درجة الجودة",
    "score.based": "بناءً على المشاكل والمقاييس وأفضل الممارسات",
    "lines": "الأسطر",
    "complexity": "التعقيد",
    "maintainability": "قابلية الصيانة",
    "issues": "المشاكل",
    "suggestions": "الاقتراحات",
    "report": "التقرير",
    "no.issues": "لم يتم العثور على مشاكل. عمل رائع!",
    "empty.code": "الشفرة فارغة",
    "empty.code.message": "يرجى إدخال بعض الشفرة للتحليل",
    "analysis.complete": "اكتمل التحليل",
    "issues.found": "تم العثور على {count} مشكلة بدرجة {score}/100",
    "analysis.failed": "فشل التحليل",
    "analysis.error": "حدث خطأ أثناء تحليل الشفرة الخاصة بك",
    "footer.rights": "جميع الحقوق محفوظة.",
    "line": "سطر",
    "cookies.title": "نحن نستخدم ملفات تعريف الارتباط",
    "cookies.message": "يستخدم هذا الموقع ملفات تعريف الارتباط لتحسين تجربتك. باستخدام موقعنا، فإنك توافق على شروطنا.",
    "cookies.accept": "قبول",
    "cookies.more": "معرفة المزيد"
  },
  zh: {
    "app.title": "Huta代码分析器",
    "app.subtitle": "分析、优化和改进您的代码质量",
    "app.tool": "代码质量工具",
    "editor.title": "代码编辑器",
    "analyze.button": "分析代码",
    "analyzing": "分析中...",
    "result.title": "分析结果",
    "result.info": "点击\"分析代码\"检查您的代码质量并获取改进建议。",
    "score.title": "质量评分",
    "score.based": "基于问题、指标和最佳实践",
    "lines": "行数",
    "complexity": "复杂度",
    "maintainability": "可维护性",
    "issues": "问题",
    "suggestions": "建议",
    "report": "报告",
    "no.issues": "未发现问题。做得好！",
    "empty.code": "代码为空",
    "empty.code.message": "请输入一些代码进行分析",
    "analysis.complete": "分析完成",
    "issues.found": "发现{count}个问题，得分为{score}/100",
    "analysis.failed": "分析失败",
    "analysis.error": "分析代码时出错",
    "footer.rights": "版权所有。",
    "line": "行",
    "cookies.title": "我们使用cookies",
    "cookies.message": "本网站使用cookies来改善您的体验。使用我们的网站，即表示您同意我们的条款。",
    "cookies.accept": "接受",
    "cookies.more": "了解更多"
  },
  ru: {
    "app.title": "Анализатор кода Huta",
    "app.subtitle": "Анализируйте, оптимизируйте и улучшайте качество вашего кода",
    "app.tool": "Инструмент оценки качества кода",
    "editor.title": "Редактор кода",
    "analyze.button": "Анализировать код",
    "analyzing": "Анализ...",
    "result.title": "Результаты анализа",
    "result.info": "Нажмите \"Анализировать код\", чтобы проверить качество вашего кода и получить предложения по улучшению.",
    "score.title": "Оценка качества",
    "score.based": "На основе проблем, метрик и лучших практик",
    "lines": "Строки",
    "complexity": "Сложность",
    "maintainability": "Поддерживаемость",
    "issues": "Проблемы",
    "suggestions": "Предложения",
    "report": "Отчет",
    "no.issues": "Проблем не обнаружено. Отличная работа!",
    "empty.code": "Пустой код",
    "empty.code.message": "Пожалуйста, введите код для анализа",
    "analysis.complete": "Анализ завершен",
    "issues.found": "Найдено {count} проблем с оценкой {score}/100",
    "analysis.failed": "Анализ не удался",
    "analysis.error": "Произошла ошибка при анализе вашего кода",
    "footer.rights": "Все права защищены.",
    "line": "Строка",
    "cookies.title": "Мы используем файлы cookie",
    "cookies.message": "Этот сайт использует файлы cookie для улучшения вашего опыта. Используя наш сайт, вы соглашаетесь с нашими условиями.",
    "cookies.accept": "Принять",
    "cookies.more": "Узнать больше"
  }
};

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'pt',
  changeLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<AvailableLanguage>('pt');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as AvailableLanguage;
    if (savedLang && AVAILABLE_LANGUAGES.some(lang => lang.id === savedLang)) {
      setCurrentLanguage(savedLang);
    } else {
      // Detectar idioma do navegador
      const browserLang = navigator.language.split('-')[0] as AvailableLanguage;
      if (AVAILABLE_LANGUAGES.some(lang => lang.id === browserLang)) {
        setCurrentLanguage(browserLang);
      }
    }

    // Configurar a direção do texto com base no idioma
    const langOption = AVAILABLE_LANGUAGES.find(lang => lang.id === currentLanguage);
    if (langOption && langOption.dir === 'rtl') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [currentLanguage]);

  const changeLanguage = (lang: AvailableLanguage) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Alterar direção do texto
    const langOption = AVAILABLE_LANGUAGES.find(lang => lang.id === lang);
    if (langOption && langOption.dir === 'rtl') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    let translation = translations[currentLanguage]?.[key] || translations.pt[key] || key;
    
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        translation = translation.replace(`{${paramKey}}`, String(paramValue));
      });
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
