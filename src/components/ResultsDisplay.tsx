
import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Info, Copy, ClipboardCheck, Zap, Accessibility, BookOpen, Search, Code2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { AnalysisResult, CodeIssue } from '@/utils/codeAnalysis';
import { SupportedLanguage } from '@/utils/languageUtils';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/utils/languageContext';
import { Progress } from '@/components/ui/progress';

interface ExibicaoResultadosProps {
  resultado?: AnalysisResult;
  linguagem: SupportedLanguage;
}

const ExibicaoResultados: React.FC<ExibicaoResultadosProps> = ({ resultado, linguagem }) => {
  const [copiado, setCopiado] = useState(false);
  const { t } = useLanguage();
  
  if (!resultado) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-secondary/30 rounded-lg border border-border/50 backdrop-blur-sm">
        <Info className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium">{t("result.title")}</h3>
        <p className="text-muted-foreground mt-2">
          {t("result.info")}
        </p>
      </div>
    );
  }
  
  const { issues, metrics, suggestions, score, categoriesScore } = resultado;
  
  const obterCorPontuacao = (pontuacao: number) => {
    if (pontuacao >= 80) return 'text-green-500';
    if (pontuacao >= 60) return 'text-amber-500';
    return 'text-red-500';
  };
  
  const obterAnelPontuacao = (pontuacao: number) => {
    if (pontuacao >= 80) return 'ring-green-500';
    if (pontuacao >= 60) return 'ring-amber-500';
    return 'ring-red-500';
  };

  const obterCorProgresso = (pontuacao: number) => {
    if (pontuacao >= 80) return 'bg-green-500';
    if (pontuacao >= 60) return 'bg-amber-500';
    return 'bg-red-500';
  };
  
  const copiarRelatorio = async () => {
    if (!resultado) return;
    
    const textoRelatorio = `
RELATÓRIO DE QUALIDADE DE CÓDIGO

Linguagem: ${linguagem.toUpperCase()}
Pontuação de Qualidade: ${score}/100
Linhas de Código: ${metrics.linesOfCode}
Complexidade: ${metrics.complexity}/10
Manutenibilidade: ${metrics.maintainability}/100

PONTUAÇÃO POR CATEGORIA:
Desempenho: ${categoriesScore.performance}/100
Acessibilidade: ${categoriesScore.accessibility}/100
Boas Práticas: ${categoriesScore.bestPractices}/100
SEO: ${categoriesScore.seo}/100
Código Limpo: ${categoriesScore.cleanCode}/100

PROBLEMAS ENCONTRADOS:
${issues.length > 0 
  ? issues.map(issue => `- ${issue.severity.toUpperCase()} Linha ${issue.line}: ${issue.message} (${issue.category || 'geral'})`).join('\n')
  : '- Nenhum problema encontrado. Ótimo trabalho!'}

SUGESTÕES DE MELHORIA:
${suggestions.map(suggestion => `- ${suggestion}`).join('\n')}

Gerado por Analisador de Código Huta
`;
    
    try {
      await navigator.clipboard.writeText(textoRelatorio);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar relatório para a área de transferência:', err);
    }
  };

  // Organiza os problemas por categoria
  const problemasCategorizados = {
    performance: issues.filter(i => i.category === 'performance'),
    accessibility: issues.filter(i => i.category === 'accessibility'),
    bestPractices: issues.filter(i => i.category === 'bestPractices'),
    seo: issues.filter(i => i.category === 'seo'),
    cleanCode: issues.filter(i => i.category === 'cleanCode'),
    other: issues.filter(i => !i.category)
  };
  
  return (
    <div className="rounded-lg glass-card overflow-hidden animate-scale-in">
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className={cn(
              "flex items-center justify-center w-16 h-16 rounded-full bg-background ring-4",
              obterAnelPontuacao(score)
            )}>
              <span className={cn("text-xl font-bold", obterCorPontuacao(score))}>
                {score}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">{t("score.title")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("score.based")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 w-full md:w-auto">
            <div className="text-center px-2 py-2">
              <p className="text-xl font-semibold">{metrics.linesOfCode}</p>
              <p className="text-xs text-muted-foreground">{t("lines")}</p>
            </div>
            <div className="text-center px-2 py-2">
              <p className="text-xl font-semibold">{metrics.complexity}/10</p>
              <p className="text-xs text-muted-foreground">{t("complexity")}</p>
            </div>
            <div className="text-center px-2 py-2">
              <p className="text-xl font-semibold">{metrics.maintainability}/100</p>
              <p className="text-xs text-muted-foreground">{t("maintainability")}</p>
            </div>
          </div>
        </div>
        
        {/* Pontuação por categoria */}
        <div className="mb-6 grid grid-cols-1 gap-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">Performance</span>
              </div>
              <span className={cn("text-sm font-medium", obterCorPontuacao(categoriesScore.performance))}>
                {categoriesScore.performance}/100
              </span>
            </div>
            <Progress value={categoriesScore.performance} className="h-2" indicatorClassName={obterCorProgresso(categoriesScore.performance)} />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Accessibility className="h-4 w-4 text-blue-500" />
                <span className="text-sm">Acessibilidade</span>
              </div>
              <span className={cn("text-sm font-medium", obterCorPontuacao(categoriesScore.accessibility))}>
                {categoriesScore.accessibility}/100
              </span>
            </div>
            <Progress value={categoriesScore.accessibility} className="h-2" indicatorClassName={obterCorProgresso(categoriesScore.accessibility)} />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-purple-500" />
                <span className="text-sm">Boas Práticas</span>
              </div>
              <span className={cn("text-sm font-medium", obterCorPontuacao(categoriesScore.bestPractices))}>
                {categoriesScore.bestPractices}/100
              </span>
            </div>
            <Progress value={categoriesScore.bestPractices} className="h-2" indicatorClassName={obterCorProgresso(categoriesScore.bestPractices)} />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-green-500" />
                <span className="text-sm">SEO</span>
              </div>
              <span className={cn("text-sm font-medium", obterCorPontuacao(categoriesScore.seo))}>
                {categoriesScore.seo}/100
              </span>
            </div>
            <Progress value={categoriesScore.seo} className="h-2" indicatorClassName={obterCorProgresso(categoriesScore.seo)} />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-indigo-500" />
                <span className="text-sm">Código Limpo</span>
              </div>
              <span className={cn("text-sm font-medium", obterCorPontuacao(categoriesScore.cleanCode))}>
                {categoriesScore.cleanCode}/100
              </span>
            </div>
            <Progress value={categoriesScore.cleanCode} className="h-2" indicatorClassName={obterCorProgresso(categoriesScore.cleanCode)} />
          </div>
        </div>
        
        <Tabs defaultValue="issues" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-secondary/30">
            <TabsTrigger value="issues">{t("issues")}</TabsTrigger>
            <TabsTrigger value="suggestions">{t("suggestions")}</TabsTrigger>
            <TabsTrigger value="report">{t("report")}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="issues" className="mt-4 max-h-64 overflow-y-auto p-2">
            {issues.length > 0 ? (
              <div className="space-y-4">
                {/* Agrupamento por categoria */}
                {Object.entries(problemasCategorizados).map(([categoria, problemas]) => {
                  if (problemas.length === 0) return null;
                  
                  let labelCategoria = '';
                  let iconCategoria = null;
                  
                  switch(categoria) {
                    case 'performance':
                      labelCategoria = 'Performance';
                      iconCategoria = <Zap className="h-4 w-4 text-yellow-500" />;
                      break;
                    case 'accessibility':
                      labelCategoria = 'Acessibilidade';
                      iconCategoria = <Accessibility className="h-4 w-4 text-blue-500" />;
                      break;
                    case 'bestPractices':
                      labelCategoria = 'Boas Práticas';
                      iconCategoria = <BookOpen className="h-4 w-4 text-purple-500" />;
                      break;
                    case 'seo':
                      labelCategoria = 'SEO';
                      iconCategoria = <Search className="h-4 w-4 text-green-500" />;
                      break;
                    case 'cleanCode':
                      labelCategoria = 'Código Limpo';
                      iconCategoria = <Code2 className="h-4 w-4 text-indigo-500" />;
                      break;
                    default:
                      labelCategoria = 'Outros';
                      iconCategoria = <Info className="h-4 w-4 text-gray-500" />;
                  }
                  
                  return (
                    <div key={categoria} className="space-y-2">
                      {labelCategoria !== 'Outros' && (
                        <div className="flex items-center gap-2 mb-2">
                          {iconCategoria}
                          <h4 className="font-medium text-sm">{labelCategoria}</h4>
                        </div>
                      )}
                      <ul className="space-y-2">
                        {problemas.map((problema, index) => (
                          <ItemProblema key={`${categoria}-${index}`} problema={problema} t={t} />
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
                <CheckCircle className="h-10 w-10 text-green-500 mb-3" />
                <p className="font-medium">{t("no.issues")}</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="suggestions" className="mt-4 max-h-64 overflow-y-auto p-2">
            <ul className="space-y-3">
              {suggestions.map((suggestion, index) => (
                <li 
                  key={index}
                  className="flex items-start p-3 rounded-md bg-secondary/40"
                >
                  <Info className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="report" className="mt-4 relative">
            <div className="absolute top-0 right-0 p-2">
              <button
                onClick={copiarRelatorio}
                className="flex items-center space-x-1 px-2 py-1 rounded-md text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {copiado ? (
                  <ClipboardCheck className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span>{copiado ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>
            
            <div className="font-mono text-xs leading-relaxed bg-secondary/40 p-4 rounded-md overflow-x-auto max-h-64 overflow-y-auto">
              <p className="font-bold mb-2">RELATÓRIO DE QUALIDADE DE CÓDIGO</p>
              <p className="mb-4">
                Linguagem: {linguagem.toUpperCase()}<br />
                Pontuação de Qualidade: {score}/100<br />
                Linhas de Código: {metrics.linesOfCode}<br />
                Complexidade: {metrics.complexity}/10<br />
                Manutenibilidade: {metrics.maintainability}/100
              </p>
              
              <p className="font-bold mb-1">PONTUAÇÃO POR CATEGORIA:</p>
              <p className="mb-4 pl-4">
                Desempenho: {categoriesScore.performance}/100<br />
                Acessibilidade: {categoriesScore.accessibility}/100<br />
                Boas Práticas: {categoriesScore.bestPractices}/100<br />
                SEO: {categoriesScore.seo}/100<br />
                Código Limpo: {categoriesScore.cleanCode}/100
              </p>
              
              <p className="font-bold mb-1">PROBLEMAS ENCONTRADOS:</p>
              {issues.length > 0 ? (
                <ul className="mb-4 pl-4">
                  {issues.map((issue, index) => (
                    <li key={index}>
                      - {issue.severity.toUpperCase()} Linha {issue.line}: {issue.message} {issue.category ? `(${issue.category})` : ''}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mb-4 pl-4">- Nenhum problema encontrado. Ótimo trabalho!</p>
              )}
              
              <p className="font-bold mb-1">SUGESTÕES DE MELHORIA:</p>
              <ul className="pl-4">
                {suggestions.map((suggestion, index) => (
                  <li key={index}>- {suggestion}</li>
                ))}
              </ul>
              
              <p className="mt-4 text-muted-foreground">Gerado por Analisador de Código Huta</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const ItemProblema: React.FC<{ problema: CodeIssue, t: any }> = ({ problema, t }) => {
  const obterIconeGravidade = (gravidade: string) => {
    switch (gravidade) {
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />;
      default:
        return <Info className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />;
    }
  };

  const obterCorCategoria = (categoria?: string) => {
    switch(categoria) {
      case 'performance': return 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400';
      case 'accessibility': return 'bg-blue-500/20 text-blue-700 dark:text-blue-400';
      case 'bestPractices': return 'bg-purple-500/20 text-purple-700 dark:text-purple-400';
      case 'seo': return 'bg-green-500/20 text-green-700 dark:text-green-400';
      case 'cleanCode': return 'bg-indigo-500/20 text-indigo-700 dark:text-indigo-400';
      default: return 'bg-gray-500/20 text-gray-700 dark:text-gray-400';
    }
  };
  
  return (
    <li className="flex items-start p-3 rounded-md bg-secondary/40">
      {obterIconeGravidade(problema.severity)}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <Badge variant="outline" className="text-xs py-0 h-5">
            {t("line")} {problema.line}
          </Badge>
          <Badge variant="outline" className="text-xs py-0 h-5">
            {problema.code}
          </Badge>
          {problema.category && (
            <Badge className={cn("text-xs py-0 h-5", obterCorCategoria(problema.category))}>
              {problema.category}
            </Badge>
          )}
        </div>
        <p className="mt-1 text-sm">{problema.message}</p>
      </div>
    </li>
  );
};

export default ExibicaoResultados;
