
import React from 'react';
import Navbar from '@/components/Navbar';
import { Code2, Cpu, Sparkles, Check, Code, GitBranch, SquareCode } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const PaginaSobre = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Sobre | HutaDev Analisador de Código</title>
        <meta name="description" content="Conheça a HutaDev e nossa ferramenta de análise de qualidade de código. Saiba como podemos ajudar a melhorar a qualidade do seu código." />
        <meta name="keywords" content="HutaDev, analisador de código, qualidade de código, desenvolvimento de sites, desenvolvimento web" />
        <meta property="og:title" content="Sobre | HutaDev Analisador de Código" />
        <meta property="og:description" content="Conheça a HutaDev e nossa ferramenta de análise de qualidade de código." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://analisador.hutadev.com/sobre" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre | HutaDev Analisador de Código" />
        <meta name="twitter:description" content="Conheça a HutaDev e nossa ferramenta de análise de qualidade de código." />
        <link rel="canonical" href="https://analisador.hutadev.com/sobre" />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center animate-slide-down">
            <span className="inline-block px-3 py-1.5 rounded-full text-xs uppercase tracking-wide font-semibold bg-primary/10 text-primary mb-4">
              Sobre o Projeto
            </span>
            <h1 className="text-4xl font-bold tracking-tight mb-3">HutaDev Analisador</h1>
            <p className="text-xl text-muted-foreground">
              A ferramenta moderna de melhoria de qualidade de código para desenvolvedores
            </p>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-white/50 dark:bg-gray-950/50 backdrop-blur-md rounded-lg border border-border/50 p-6 shadow-sm animate-scale-in">
              <h2 className="flex items-center text-2xl font-bold mb-4">
                <Code2 className="mr-2 h-5 w-5 text-primary" />
                Nossa Missão
              </h2>
              <p className="text-muted-foreground">
                Na HutaDev, desenvolvemos sites e componentes web para startups e sites de negócios, oferecendo soluções personalizadas para melhorar sua presença online.
              </p>
              <p className="text-muted-foreground">
                Nossa missão é simplificar as complexidades das startups modernas de negócios e tecnologia, permitindo que nossos clientes se concentrem no que realmente importa - seu crescimento e sucesso.
              </p>
              <p className="text-muted-foreground">
                O HutaDev Analisador foi criado com uma missão clara: ajudar desenvolvedores a escrever código mais limpo, mais sustentável e de maior qualidade. Acreditamos que a qualidade do código não é apenas seguir regras de sintaxe, mas criar soluções elegantes que sejam fáceis de ler, manter e escalar.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/50 dark:bg-gray-950/50 backdrop-blur-md rounded-lg border border-border/50 p-6 shadow-sm animate-scale-in delay-100">
                <h3 className="flex items-center text-xl font-semibold mb-3">
                  <Cpu className="mr-2 h-5 w-5 text-primary" />
                  Linguagens Suportadas
                </h3>
                <ul className="space-y-2 list-none pl-0">
                  {['HTML', 'CSS', 'JavaScript', 'Java', 'C++', 'C#', 'Python'].map((lang) => (
                    <li key={lang} className="flex items-center text-muted-foreground">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/50 dark:bg-gray-950/50 backdrop-blur-md rounded-lg border border-border/50 p-6 shadow-sm animate-scale-in delay-200">
                <h3 className="flex items-center text-xl font-semibold mb-3">
                  <Sparkles className="mr-2 h-5 w-5 text-primary" />
                  Recursos Principais
                </h3>
                <ul className="space-y-2 list-none pl-0">
                  {[
                    'Análise de qualidade de código',
                    'Melhores práticas específicas por linguagem',
                    'Métricas de estilo e manutenibilidade',
                    'Sugestões de melhoria acionáveis',
                    'Relatórios detalhados de qualidade',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-white/50 dark:bg-gray-950/50 backdrop-blur-md rounded-lg border border-border/50 p-6 shadow-sm animate-scale-in delay-300">
              <h2 className="flex items-center text-2xl font-bold mb-4">
                <Code className="mr-2 h-5 w-5 text-primary" />
                Como Funciona
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Insira Seu Código</h3>
                  <p className="text-sm text-muted-foreground">
                    Cole seu código ou comece a digitar no editor, depois selecione a linguagem com a qual está trabalhando.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Analisar</h3>
                  <p className="text-sm text-muted-foreground">
                    Nossa ferramenta analisa seu código de acordo com as melhores práticas e métricas de qualidade específicas da linguagem.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Melhorar</h3>
                  <p className="text-sm text-muted-foreground">
                    Revise as sugestões e implemente as alterações para melhorar a qualidade do seu código.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white/50 dark:bg-gray-950/50 backdrop-blur-md rounded-lg border border-border/50 p-6 shadow-sm animate-scale-in delay-400">
              <h2 className="flex items-center text-2xl font-bold mb-4">
                <GitBranch className="mr-2 h-5 w-5 text-primary" />
                Desenvolvimento Futuro
              </h2>
              <p className="text-muted-foreground">
                O HutaDev Analisador está em desenvolvimento ativo. Estamos constantemente trabalhando para melhorar nossos algoritmos de análise, adicionar suporte para mais linguagens e expandir nosso conjunto de recursos.
              </p>
              <p className="text-muted-foreground">
                Recursos futuros incluem:
              </p>
              <ul className="space-y-2 list-none pl-0 mt-4">
                {[
                  'Sugestões avançadas de refatoração de código',
                  'Recursos de colaboração em equipe',
                  'Integração com IDEs populares',
                  'Criação de regras personalizadas',
                  'Acompanhamento histórico de qualidade',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <SquareCode className="h-4 w-4 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-border/30 py-6 bg-secondary/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HutaDev. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default PaginaSobre;
