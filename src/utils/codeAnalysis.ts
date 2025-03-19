
import { SupportedLanguage } from './languageUtils';

export interface CodeIssue {
  line: number;
  column: number;
  message: string;
  severity: 'error' | 'warning' | 'info';
  code: string;
  category?: 'performance' | 'accessibility' | 'bestPractices' | 'seo' | 'cleanCode';
}

export interface CodeMetrics {
  linesOfCode: number;
  complexity: number;
  maintainability: number;
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  cleanCode: number;
}

export interface AnalysisResult {
  issues: CodeIssue[];
  metrics: CodeMetrics;
  suggestions: string[];
  score: number;
  categoriesScore: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
    cleanCode: number;
  };
}

export const analyzeCode = (code: string, language: SupportedLanguage): AnalysisResult => {
  // Implementação aprimorada de análise de código
  const lines = code.split('\n');
  const linesOfCode = lines.length;
  
  // Gerar alguns problemas de exemplo para demonstração
  const issues: CodeIssue[] = [];
  let complexity = Math.floor(Math.random() * 10) + 1;
  
  // Verificar problemas de desempenho
  lines.forEach((line, index) => {
    // Problemas de desempenho
    if (language === 'javascript' && line.includes('document.querySelectorAll')) {
      issues.push({
        line: index + 1,
        column: line.indexOf('document.querySelectorAll'),
        message: 'Considere caching de seletores frequentemente utilizados para melhor desempenho',
        severity: 'warning',
        code: 'perf-dom-queries',
        category: 'performance'
      });
    }

    // Problemas de acessibilidade
    if (language === 'html' && line.includes('<img') && !line.includes('alt=')) {
      issues.push({
        line: index + 1,
        column: line.indexOf('<img'),
        message: 'Imagens devem ter atributo alt para acessibilidade',
        severity: 'error',
        code: 'a11y-img-alt',
        category: 'accessibility'
      });
    }

    // Boas práticas
    if (language === 'javascript' && line.includes('var ')) {
      issues.push({
        line: index + 1,
        column: line.indexOf('var '),
        message: 'Use let/const em vez de var para declarações de variáveis',
        severity: 'warning',
        code: 'best-practice-no-var',
        category: 'bestPractices'
      });
    }

    // SEO
    if (language === 'html' && line.includes('<h1') && 
        lines.some((l, i) => i !== index && l.includes('<h1'))) {
      issues.push({
        line: index + 1,
        column: line.indexOf('<h1'),
        message: 'Múltiplas tags H1 prejudicam o SEO. Use apenas uma por página.',
        severity: 'warning',
        code: 'seo-multiple-h1',
        category: 'seo'
      });
    }

    // Código limpo - baseado no livro "Código Limpo"
    if ((language === 'javascript' || language === 'java' || language === 'csharp') && 
        (line.match(/function\s+\w+\s*\(/) || line.match(/\w+\s*=\s*function\s*\(/)) && 
        line.length > 100) {
      issues.push({
        line: index + 1,
        column: 1,
        message: 'Funções devem ter uma única responsabilidade e não serem muito longas',
        severity: 'info',
        code: 'clean-code-function-length',
        category: 'cleanCode'
      });
    }
    
    // Verificar linhas longas
    if (line.length > 100) {
      issues.push({
        line: index + 1,
        column: 1,
        message: 'Linha excede o comprimento recomendado de 100 caracteres',
        severity: 'warning',
        code: 'max-len',
        category: 'bestPractices'
      });
    }
    
    // Verificar console logs
    if (language === 'javascript' && line.includes('console.log')) {
      issues.push({
        line: index + 1,
        column: line.indexOf('console.log'),
        message: 'Evite statements console.log em código de produção',
        severity: 'info',
        code: 'no-console',
        category: 'bestPractices'
      });
    }
    
    // Verificar comentários TODO
    if (line.includes('TODO')) {
      issues.push({
        line: index + 1,
        column: line.indexOf('TODO'),
        message: 'Comentário TODO encontrado',
        severity: 'info',
        code: 'no-todo',
        category: 'cleanCode'
      });
    }
    
    // Verificar potencial complexidade
    if (
      (language === 'javascript' || language === 'java' || language === 'csharp') && 
      (line.includes('if ') || line.includes('for ') || line.includes('while '))
    ) {
      complexity += 1;
    }
  });
  
  // Contar problemas por categoria
  const performanceIssues = issues.filter(i => i.category === 'performance').length;
  const accessibilityIssues = issues.filter(i => i.category === 'accessibility').length;
  const bestPracticesIssues = issues.filter(i => i.category === 'bestPractices').length;
  const seoIssues = issues.filter(i => i.category === 'seo').length;
  const cleanCodeIssues = issues.filter(i => i.category === 'cleanCode').length;
  
  // Calcular métricas
  const perfScore = Math.max(0, 100 - (performanceIssues * 10));
  const a11yScore = Math.max(0, 100 - (accessibilityIssues * 15));
  const bpScore = Math.max(0, 100 - (bestPracticesIssues * 8));
  const seoScore = Math.max(0, 100 - (seoIssues * 12));
  const cleanCodeScore = Math.max(0, 100 - (cleanCodeIssues * 8) - (complexity * 3));
  
  const maintainability = Math.max(0, 100 - (issues.length * 5) - (complexity * 2));
  
  // Score geral ponderado por categoria
  const score = Math.round(
    (perfScore * 0.2) + 
    (a11yScore * 0.2) + 
    (bpScore * 0.2) + 
    (seoScore * 0.15) + 
    (cleanCodeScore * 0.25)
  );
  
  // Gerar sugestões
  const suggestions = [
    'Quebre funções complexas em partes menores e mais gerenciáveis',
    'Adicione comentários significativos para explicar lógica complexa',
    'Use convenções de nomenclatura consistentes para variáveis e funções',
    'Considere adicionar tratamento de erros para código robusto',
    'Siga o princípio de responsabilidade única para funções e classes',
    'Refatore código duplicado em funções reutilizáveis',
    'Priorize a acessibilidade usando atributos ARIA e alt em imagens',
    'Otimize operações DOM para melhor desempenho',
    'Considere implementar lazy loading para melhorar o tempo de carregamento',
    'Use nomes de variáveis descritivos conforme recomendado no livro "Código Limpo"'
  ];
  
  if (issues.some(i => i.code === 'max-len')) {
    suggestions.push('Quebre linhas longas em múltiplas linhas para melhor legibilidade');
  }
  
  if (issues.some(i => i.code === 'no-console')) {
    suggestions.push('Substitua console.log por mecanismos de logging adequados');
  }
  
  // Filtrar sugestões relevantes com base nas categorias dos problemas encontrados
  const relevantSuggestions = suggestions.filter((_, i) => {
    if (performanceIssues > 0 && [7, 8].includes(i)) return true;
    if (accessibilityIssues > 0 && i === 6) return true;
    if (bestPracticesIssues > 0 && [2, 3, 5].includes(i)) return true;
    if (cleanCodeIssues > 0 && [0, 1, 4, 9].includes(i)) return true;
    return Math.random() > 0.5; // Seleção aleatória para outras
  });
  
  return {
    issues,
    metrics: {
      linesOfCode,
      complexity,
      maintainability,
      performance: perfScore,
      accessibility: a11yScore,
      bestPractices: bpScore,
      seo: seoScore,
      cleanCode: cleanCodeScore
    },
    suggestions: relevantSuggestions.slice(0, 4 + Math.floor(Math.random() * 3)),
    score,
    categoriesScore: {
      performance: perfScore,
      accessibility: a11yScore,
      bestPractices: bpScore,
      seo: seoScore,
      cleanCode: cleanCodeScore
    }
  };
};

// Gerar relatório detalhado a partir dos resultados da análise
export const generateReport = (result: AnalysisResult, language: SupportedLanguage): string => {
  const { issues, metrics, suggestions, score, categoriesScore } = result;
  
  const report = `
# Relatório de Qualidade de Código

## Resumo
- Linguagem: ${language.toUpperCase()}
- Pontuação de Qualidade: ${score}/100
- Linhas de Código: ${metrics.linesOfCode}
- Complexidade: ${metrics.complexity}/10
- Manutenibilidade: ${metrics.maintainability}/100

## Pontuação por Categoria
- Desempenho: ${categoriesScore.performance}/100
- Acessibilidade: ${categoriesScore.accessibility}/100
- Boas Práticas: ${categoriesScore.bestPractices}/100
- SEO: ${categoriesScore.seo}/100
- Código Limpo: ${categoriesScore.cleanCode}/100

## Problemas Encontrados
${issues.length > 0 
  ? issues.map(issue => `- **${issue.severity.toUpperCase()}** Linha ${issue.line}: ${issue.message} (${issue.category || 'geral'})`).join('\n')
  : '- Nenhum problema encontrado. Ótimo trabalho!'}

## Sugestões de Melhoria
${suggestions.map(suggestion => `- ${suggestion}`).join('\n')}

## Próximos Passos
1. Resolva os problemas destacados
2. Considere as sugestões de melhoria
3. Execute a análise novamente para acompanhar o progresso

_Gerado pelo Analisador de Código Huta ${new Date().toLocaleDateString()}_
  `;
  
  return report;
};
