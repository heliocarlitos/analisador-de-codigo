
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Book, 
  Code, 
  FileCode2, 
  Languages, 
  LayoutDashboard, 
  Lightbulb, 
  Settings, 
  Sparkles
} from 'lucide-react';
import { useLanguage } from '@/utils/languageContext';

const PaginaDocumentacao = () => {
  const { t } = useLanguage();
  const [tabAtiva, setTabAtiva] = useState('introducao');

  const handleChangeTab = (value: string) => {
    setTabAtiva(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Documentação | Analisador de Código Huta</title>
        <meta name="description" content="Documentação completa do Analisador de Código Huta. Aprenda como utilizar todas as funcionalidades da ferramenta." />
        <meta name="keywords" content="documentação analisador código, tutorial analisador código, guia analisador código, HutaDev" />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <header className="mb-12 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Documentação</h1>
          <p className="text-muted-foreground text-lg">
            Guia completo do Analisador de Código Huta. Aprenda a analisar e melhorar a qualidade do seu código.
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Sidebar de navegação */}
          <aside className="lg:col-span-1 lg:sticky top-24 self-start glass-card h-fit p-4 rounded-lg">
            <nav>
              <ul className="space-y-1">
                <NavItem 
                  id="introducao" 
                  atual={tabAtiva} 
                  onClick={() => handleChangeTab('introducao')}
                  icon={<Book className="w-5 h-5 mr-2" />}
                  label="Introdução"
                />
                <NavItem 
                  id="comecando" 
                  atual={tabAtiva} 
                  onClick={() => handleChangeTab('comecando')}
                  icon={<LayoutDashboard className="w-5 h-5 mr-2" />}
                  label="Começando"
                />
                <NavItem 
                  id="linguagens" 
                  atual={tabAtiva} 
                  onClick={() => handleChangeTab('linguagens')}
                  icon={<Languages className="w-5 h-5 mr-2" />}
                  label="Linguagens Suportadas"
                />
                <NavItem 
                  id="analise" 
                  atual={tabAtiva} 
                  onClick={() => handleChangeTab('analise')}
                  icon={<Sparkles className="w-5 h-5 mr-2" />}
                  label="Processo de Análise"
                />
                <NavItem 
                  id="metricas" 
                  atual={tabAtiva} 
                  onClick={() => handleChangeTab('metricas')}
                  icon={<FileCode2 className="w-5 h-5 mr-2" />}
                  label="Métricas e Pontuações"
                />
                <NavItem 
                  id="exemplos" 
                  atual={tabAtiva} 
                  onClick={() => handleChangeTab('exemplos')}
                  icon={<Code className="w-5 h-5 mr-2" />}
                  label="Exemplos Práticos"
                />
                <NavItem 
                  id="configuracao" 
                  atual={tabAtiva} 
                  onClick={() => handleChangeTab('configuracao')}
                  icon={<Settings className="w-5 h-5 mr-2" />}
                  label="Configurações"
                />
                <NavItem 
                  id="dicas" 
                  atual={tabAtiva} 
                  onClick={() => handleChangeTab('dicas')}
                  icon={<Lightbulb className="w-5 h-5 mr-2" />}
                  label="Dicas e Truques"
                />
              </ul>
            </nav>
          </aside>
          
          {/* Conteúdo principal */}
          <div className="lg:col-span-3 glass-card p-6 md:p-8 rounded-lg">
            <Tabs value={tabAtiva} onValueChange={handleChangeTab} className="w-full">
              <TabsContent value="introducao" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Introdução ao Analisador de Código Huta</h2>
                <p>
                  O Analisador de Código Huta é uma ferramenta desenvolvida pela HutaDev para ajudar desenvolvedores a avaliar e melhorar a qualidade do seu código. A ferramenta analisa diversos aspectos como performance, acessibilidade, boas práticas e SEO.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Por que usar o Analisador de Código Huta?</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Identifica problemas de desempenho em seu código</li>
                  <li>Verifica boas práticas de programação e princípios do "Código Limpo"</li>
                  <li>Avalia métricas de acessibilidade para tornar seu código mais inclusivo</li>
                  <li>Verifica problemas de SEO em códigos HTML</li>
                  <li>Fornece sugestões personalizadas para melhorar seu código</li>
                  <li>Suporta múltiplas linguagens de programação</li>
                </ul>
                
                <div className="bg-secondary/30 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold mb-2">Sobre a HutaDev</h4>
                  <p>
                    Na HutaDev, desenvolvemos sites e componentes web para startups e sites de negócios, oferecendo soluções personalizadas para melhorar sua presença online. Nossa missão é simplificar as complexidades das startups modernas de negócios e tecnologia, permitindo que nossos clientes se concentrem no que realmente importa - seu crescimento e sucesso.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="comecando" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Começando com o Analisador de Código</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Passos básicos para começar</h3>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Selecione uma linguagem</strong>: Escolha entre HTML, CSS, JavaScript, Java, C++, C# ou Python usando o seletor de linguagem no topo do editor.
                  </li>
                  <li>
                    <strong>Insira ou cole seu código</strong>: Utilize o editor para inserir o código que deseja analisar. O editor possui destaque de sintaxe para facilitar a leitura.
                  </li>
                  <li>
                    <strong>Clique em "Analisar Código"</strong>: Após inserir seu código, clique no botão para iniciar a análise.
                  </li>
                  <li>
                    <strong>Revise os resultados</strong>: Um relatório detalhado será gerado com pontuações, problemas encontrados e sugestões de melhoria.
                  </li>
                </ol>
                
                <div className="bg-secondary/30 p-6 rounded-lg mt-6">
                  <h4 className="font-semibold mb-3">Interface do Analisador</h4>
                  <div className="space-y-3">
                    <p><strong>Editor de Código</strong>: Área onde você insere seu código com destaque de sintaxe.</p>
                    <p><strong>Seletor de Linguagem</strong>: Permite escolher a linguagem do código que será analisada.</p>
                    <p><strong>Botão de Análise</strong>: Inicia o processo de análise do código.</p>
                    <p><strong>Painel de Resultados</strong>: Exibe a pontuação, métricas, problemas encontrados e sugestões.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="linguagens" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Linguagens Suportadas</h2>
                <p>
                  O Analisador de Código Huta suporta várias linguagens de programação populares, permitindo uma análise especializada para cada tipo de código.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">HTML</h3>
                    <p>Análise de estrutura, acessibilidade e práticas de SEO em documentos HTML.</p>
                  </div>
                  
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">CSS</h3>
                    <p>Verificação de eficiência, compatibilidade e boas práticas em estilos CSS.</p>
                  </div>
                  
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">JavaScript</h3>
                    <p>Análise de performance, segurança e qualidade de código JavaScript.</p>
                  </div>
                  
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Java</h3>
                    <p>Verificação de estrutura, eficiência e boas práticas de programação em Java.</p>
                  </div>
                  
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">C++</h3>
                    <p>Análise de eficiência, gerenciamento de memória e convenções de código em C++.</p>
                  </div>
                  
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">C#</h3>
                    <p>Verificação de padrões de design, performance e qualidade de código em C#.</p>
                  </div>
                  
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Python</h3>
                    <p>Análise de legibilidade, eficiência e aderência ao PEP 8 em código Python.</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 border border-border rounded-lg">
                  <h4 className="font-semibold mb-2">Nota sobre análise específica por linguagem</h4>
                  <p>
                    Cada linguagem possui características e boas práticas específicas. O analisador adapta seus critérios de avaliação de acordo com a linguagem selecionada para fornecer resultados relevantes e precisos.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="analise" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Processo de Análise</h2>
                <p>
                  O Analisador de Código Huta realiza uma análise abrangente do seu código, considerando múltiplos fatores para avaliar sua qualidade. Entenda como funciona esse processo:
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Como seu código é analisado</h3>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Verificação sintática</strong>: Primeiro, o código é verificado para garantir que não há erros de sintaxe básicos.
                  </li>
                  <li>
                    <strong>Análise estrutural</strong>: A estrutura do código é avaliada em termos de organização, tamanho de funções e classes.
                  </li>
                  <li>
                    <strong>Verificação de padrões</strong>: O código é examinado para identificar padrões conhecidos de problemas e anti-padrões.
                  </li>
                  <li>
                    <strong>Avaliação de métricas</strong>: São calculadas métricas como complexidade ciclomática, linhas de código e manutenibilidade.
                  </li>
                  <li>
                    <strong>Análise por categoria</strong>: O código é analisado em categorias específicas:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><strong>Performance</strong>: Eficiência e otimização do código</li>
                      <li><strong>Acessibilidade</strong>: Conformidade com padrões de acessibilidade</li>
                      <li><strong>Boas Práticas</strong>: Adesão a convenções e padrões da indústria</li>
                      <li><strong>SEO</strong>: Otimização para mecanismos de busca (para HTML)</li>
                      <li><strong>Código Limpo</strong>: Princípios de código limpo baseados na obra de Robert C. Martin</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Geração de pontuação</strong>: Com base em todas as análises, uma pontuação geral e pontuações por categoria são calculadas.
                  </li>
                  <li>
                    <strong>Criação de sugestões</strong>: O sistema gera sugestões personalizadas para melhorar o código baseadas nos problemas identificados.
                  </li>
                </ol>
                
                <div className="bg-secondary/30 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold mb-2">Princípios do "Código Limpo"</h4>
                  <p>
                    Nossa análise incorpora princípios do livro "Código Limpo" de Robert C. Martin, incluindo:
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Nomes significativos para variáveis e funções</li>
                    <li>Funções pequenas com uma única responsabilidade</li>
                    <li>Comentários apropriados e significativos</li>
                    <li>Formatação consistente do código</li>
                    <li>Tratamento adequado de erros</li>
                    <li>Minimização de duplicação de código</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="metricas" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Métricas e Pontuações</h2>
                <p>
                  O Analisador de Código Huta utiliza diversas métricas para avaliar a qualidade do seu código. Entenda como cada pontuação é calculada e o que ela representa.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Métricas principais</h3>
                
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold">Pontuação de Qualidade</h4>
                    <p className="mt-1">
                      Uma pontuação geral de 0-100 que representa a qualidade do código. Esta é uma média ponderada das pontuações por categoria, com pesos diferentes para cada aspecto.
                    </p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold">Linhas de Código</h4>
                    <p className="mt-1">
                      Contagem total de linhas no código analisado. Não é uma métrica de qualidade por si só, mas é útil para contextualizar outras métricas.
                    </p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold">Complexidade</h4>
                    <p className="mt-1">
                      Baseada na complexidade ciclomática, esta métrica (escala 1-10) indica quão complexo é o código em termos de caminhos de execução e estruturas de controle.
                    </p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold">Manutenibilidade</h4>
                    <p className="mt-1">
                      Pontuação de 0-100 que indica a facilidade com que o código pode ser mantido, modificado e entendido por outros desenvolvedores.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-3">Pontuações por categoria</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-yellow-500/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-600 dark:text-yellow-400">Performance (0-100)</h4>
                    <p className="mt-1">
                      Avalia a eficiência do código, identificando problemas que podem causar lentidão ou consumo excessivo de recursos.
                    </p>
                  </div>
                  
                  <div className="bg-blue-500/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400">Acessibilidade (0-100)</h4>
                    <p className="mt-1">
                      Verifica se o código segue práticas de acessibilidade, especialmente importante para código HTML e JavaScript para interfaces.
                    </p>
                  </div>
                  
                  <div className="bg-purple-500/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-600 dark:text-purple-400">Boas Práticas (0-100)</h4>
                    <p className="mt-1">
                      Avalia a aderência a convenções e práticas recomendadas específicas da linguagem selecionada.
                    </p>
                  </div>
                  
                  <div className="bg-green-500/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600 dark:text-green-400">SEO (0-100)</h4>
                    <p className="mt-1">
                      Aplicável principalmente a HTML, avalia práticas que afetam a otimização para mecanismos de busca.
                    </p>
                  </div>
                  
                  <div className="bg-indigo-500/10 p-4 rounded-lg md:col-span-2">
                    <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Código Limpo (0-100)</h4>
                    <p className="mt-1">
                      Baseada nos princípios do livro "Código Limpo", avalia a legibilidade, estrutura e manutenibilidade do código.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted/40 rounded-lg">
                  <h4 className="font-semibold mb-2">Interpretação das pontuações</h4>
                  <ul className="space-y-2">
                    <li><strong className="text-green-500">80-100</strong>: Excelente qualidade de código</li>
                    <li><strong className="text-amber-500">60-79</strong>: Boa qualidade, com algumas melhorias recomendadas</li>
                    <li><strong className="text-red-500">0-59</strong>: Necessita de atenção significativa e melhorias</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="exemplos" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Exemplos Práticos</h2>
                <p>
                  Veja exemplos de como o Analisador de Código Huta identifica problemas e sugere melhorias em diferentes linguagens.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Exemplo em JavaScript</h3>
                
                <div className="space-y-4">
                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Código original com problemas:</h4>
                    <pre className="bg-secondary/40 p-3 rounded text-sm overflow-x-auto">
{`// Função que calcula o total
function calc(a,b,type) {
  var res;
  if(type == 'add') {
    res = a + b;
  }
  if(type == 'subtract') {
    res = a - b;
  }
  if(type == 'multiply') {
    res = a * b;
  }
  if(type == 'divide') {
    res = a / b;
  }
  return res;
}

// Uso da função
document.querySelectorAll('.button').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var x = document.getElementById('input1').value;
    var y = document.getElementById('input2').value;
    var op = this.getAttribute('data-operation');
    var result = calc(parseInt(x), parseInt(y), op);
    console.log(result);
    document.getElementById('result').innerHTML = result;
  });
});`}
                    </pre>
                  </div>
                  
                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Problemas identificados:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li className="text-amber-500">Uso de <code>var</code> em vez de <code>let/const</code> (Boas Práticas)</li>
                      <li className="text-amber-500">Uso de <code>==</code> em vez de <code>===</code> (Boas Práticas)</li>
                      <li className="text-amber-500">Uso de múltiplos <code>if</code> em vez de <code>if/else if</code> ou <code>switch</code> (Código Limpo)</li>
                      <li className="text-amber-500">Uso repetido de <code>document.querySelectorAll</code> afeta a performance (Performance)</li>
                      <li className="text-amber-500">Uso de <code>console.log</code> em código de produção (Boas Práticas)</li>
                      <li className="text-amber-500">Nomes de variáveis curtos e não descritivos (Código Limpo)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Código melhorado:</h4>
                    <pre className="bg-secondary/40 p-3 rounded text-sm overflow-x-auto">
{`// Função que calcula o total de dois números
function calcular(numero1, numero2, operacao) {
  switch (operacao) {
    case 'add':
      return numero1 + numero2;
    case 'subtract':
      return numero1 - numero2;
    case 'multiply':
      return numero1 * numero2;
    case 'divide':
      if (numero2 === 0) {
        throw new Error('Divisão por zero não permitida');
      }
      return numero1 / numero2;
    default:
      throw new Error('Operação não suportada');
  }
}

// Cache dos elementos DOM para melhor performance
const botoes = document.querySelectorAll('.button');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const resultadoElemento = document.getElementById('result');

// Adiciona listeners aos botões
botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const valor1 = parseInt(input1.value, 10);
    const valor2 = parseInt(input2.value, 10);
    const operacao = botao.getAttribute('data-operation');
    
    try {
      const resultado = calcular(valor1, valor2, operacao);
      resultadoElemento.textContent = resultado;
    } catch (erro) {
      resultadoElemento.textContent = 'Erro: ' + erro.message;
    }
  });
});`}
                    </pre>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-3">Exemplo em HTML</h3>
                
                <div className="space-y-4">
                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Código original com problemas:</h4>
                    <pre className="bg-secondary/40 p-3 rounded text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html>
<head>
  <title>Minha Página</title>
</head>
<body>
  <h1>Bem-vindo ao meu site</h1>
  <h1>Outro título principal</h1>
  
  <div>
    <img src="logo.png" />
    <button onclick="fazerAlgo()">Clique Aqui</button>
  </div>
  
  <table>
    <tr>
      <td>Nome</td>
      <td>Email</td>
    </tr>
    <tr>
      <td>João</td>
      <td>joao@exemplo.com</td>
    </tr>
  </table>
</body>
</html>`}
                    </pre>
                  </div>
                  
                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Problemas identificados:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li className="text-red-500">Múltiplas tags H1 prejudicam o SEO (SEO)</li>
                      <li className="text-red-500">Imagem sem atributo alt (Acessibilidade)</li>
                      <li className="text-amber-500">Falta de meta description para SEO (SEO)</li>
                      <li className="text-amber-500">Uso de event handlers inline (Boas Práticas)</li>
                      <li className="text-amber-500">Tabela sem elementos de cabeçalho semânticos (Acessibilidade)</li>
                      <li className="text-amber-500">Falta de atributo lang na tag html (Acessibilidade)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Código melhorado:</h4>
                    <pre className="bg-secondary/40 p-3 rounded text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Descrição da página para melhorar SEO">
  <title>Minha Página</title>
</head>
<body>
  <header>
    <h1>Bem-vindo ao meu site</h1>
  </header>
  
  <section>
    <h2>Outro título importante</h2>
    
    <div>
      <img src="logo.png" alt="Logo da empresa" />
      <button id="botaoAcao">Clique Aqui</button>
    </div>
  </section>
  
  <section>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>João</td>
          <td>joao@exemplo.com</td>
        </tr>
      </tbody>
    </table>
  </section>
  
  <script>
    document.getElementById('botaoAcao').addEventListener('click', function() {
      fazerAlgo();
    });
    
    function fazerAlgo() {
      // Implementação da ação
    }
  </script>
</body>
</html>`}
                    </pre>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="configuracao" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Configurações</h2>
                <p>
                  O Analisador de Código Huta oferece opções de personalização para melhorar sua experiência de uso.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Preferências de Interface</h3>
                
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold">Modo Claro/Escuro</h4>
                    <p className="mt-1">
                      Alterne entre o modo claro e escuro da interface utilizando o botão na barra de navegação. O sistema também detecta automaticamente a preferência do seu sistema.
                    </p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold">Seleção de Idioma</h4>
                    <p className="mt-1">
                      Escolha entre vários idiomas disponíveis: Português (padrão), Inglês, Francês, Espanhol, Japonês, Árabe, Chinês e Russo. A seleção de idioma pode ser feita através do botão no canto superior direito.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-3">Personalização do Editor</h3>
                
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold">Tamanho da Fonte</h4>
                    <p className="mt-1">
                      Ajuste o tamanho da fonte no editor para melhorar a legibilidade de acordo com sua preferência.
                    </p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold">Destacamento de Sintaxe</h4>
                    <p className="mt-1">
                      O editor apresenta destacamento de sintaxe específico para cada linguagem suportada, melhorando a legibilidade do código.
                    </p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold">Amostras de Código</h4>
                    <p className="mt-1">
                      Ao selecionar uma nova linguagem, o editor carrega automaticamente uma amostra de código para ajudar você a começar.
                    </p>
                  </div>
                </div>
                
                <div className="bg-secondary/30 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold mb-2">Salvando Preferências</h4>
                  <p>
                    Suas preferências de idioma e tema são salvas automaticamente no seu navegador para futuras visitas. Você pode alterar essas configurações a qualquer momento.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="dicas" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Dicas e Truques</h2>
                <p>
                  Aproveite ao máximo o Analisador de Código Huta com estas dicas e estratégias avançadas.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Maximizando a pontuação</h3>
                
                <div className="space-y-4">
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h4 className="font-semibold">Concentre-se em problemas críticos primeiro</h4>
                    <p className="mt-1">
                      Problemas marcados como "error" têm maior impacto na pontuação. Priorize a correção destes antes de abordar avisos e informações.
                    </p>
                  </div>
                  
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h4 className="font-semibold">Atenção à complexidade</h4>
                    <p className="mt-1">
                      Funções e métodos complexos reduzem significativamente a pontuação de manutenibilidade. Divida funções grandes em partes menores e mais gerenciáveis.
                    </p>
                  </div>
                  
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h4 className="font-semibold">Siga as sugestões de melhoria</h4>
                    <p className="mt-1">
                      As sugestões são personalizadas com base nos problemas encontrados em seu código. Implementá-las pode melhorar substancialmente sua pontuação.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-3">Técnicas avançadas</h3>
                
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold">Análise incremental</h4>
                    <p className="mt-1">
                      Para projetos grandes, analise o código por partes ou módulos. Isso permite focar em melhorias específicas antes de passar para a próxima seção.
                    </p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold">Compare versões</h4>
                    <p className="mt-1">
                      Após fazer melhorias, compare os resultados da análise atual com a anterior para verificar o progresso e identificar novas áreas para melhoria.
                    </p>
                  </div>
                  
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-semibold">Use o relatório para documentação</h4>
                    <p className="mt-1">
                      O relatório gerado pode ser copiado e utilizado como parte da documentação do projeto, demonstrando a qualidade do código e áreas de melhoria futura.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-3">Princípios de código limpo</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-500/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">DRY (Don't Repeat Yourself)</h4>
                    <p className="mt-1">
                      Evite duplicação de código. Extraia código repetido para funções ou classes reutilizáveis.
                    </p>
                  </div>
                  
                  <div className="bg-indigo-500/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">KISS (Keep It Simple, Stupid)</h4>
                    <p className="mt-1">
                      Mantenha seu código simples e direto. Soluções complexas são difíceis de manter e entender.
                    </p>
                  </div>
                  
                  <div className="bg-indigo-500/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">SRP (Single Responsibility Principle)</h4>
                    <p className="mt-1">
                      Cada função ou classe deve ter uma única responsabilidade, uma razão única para mudar.
                    </p>
                  </div>
                  
                  <div className="bg-indigo-500/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Nomes significativos</h4>
                    <p className="mt-1">
                      Use nomes descritivos para variáveis, funções e classes. O nome deve revelar a intenção.
                    </p>
                  </div>
                  
                  <div className="bg-indigo-500/10 p-4 rounded-lg md:col-span-2">
                    <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Comentários apropriados</h4>
                    <p className="mt-1">
                      Comente o porquê, não o quê. Bom código deve ser auto-explicativo, mas comentários são úteis para explicar intenções e decisões.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

interface NavItemProps {
  id: string;
  atual: string;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ id, atual, onClick, icon, label }) => {
  const isAtivo = id === atual;
  
  return (
    <li>
      <button
        onClick={onClick}
        className={`w-full flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
          isAtivo 
            ? 'bg-primary/10 text-primary font-medium' 
            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
        }`}
      >
        {icon}
        <span>{label}</span>
      </button>
    </li>
  );
};

export default PaginaDocumentacao;
