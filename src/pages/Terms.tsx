
import React from 'react';
import Navbar from '@/components/Navbar';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/utils/languageContext';

const PaginaTermos = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Termos de Uso | Analisador de Código Huta</title>
        <meta name="description" content="Termos de uso do Analisador de Código Huta. Conheça as regras e condições para utilizar nossa ferramenta." />
        <link rel="canonical" href="https://analisador.hutadev.com/termos" />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">Ao utilizar o Analisador de Código Huta, você concorda com estes termos de uso. Por favor, leia-os atentamente.</p>
            
            <h2>Uso do Serviço</h2>
            <p>O Analisador de Código Huta é uma ferramenta online desenvolvida pela HutaDev para auxiliar desenvolvedores na análise e melhoria da qualidade de código. Ao utilizar esta ferramenta, você concorda em:</p>
            <ul>
              <li>Não usar o serviço para fins ilegais ou não autorizados</li>
              <li>Não tentar prejudicar, interromper ou ganhar acesso não autorizado ao serviço</li>
              <li>Utilizar o serviço de acordo com todas as leis aplicáveis</li>
            </ul>
            
            <h2>Propriedade Intelectual</h2>
            <p>O Analisador de Código Huta e todo o seu conteúdo, recursos e funcionalidades são propriedade da HutaDev e estão protegidos por leis de propriedade intelectual. Você não tem permissão para:</p>
            <ul>
              <li>Copiar, modificar ou criar obras derivadas do serviço</li>
              <li>Usar qualquer mineração de dados, robôs ou métodos similares de coleta de dados</li>
              <li>Contornar, desativar ou interferir nas funcionalidades de segurança do serviço</li>
            </ul>
            
            <h2>Seu Código</h2>
            <p>Quando você envia código para análise, mantém a propriedade de seu código. No entanto, concede à HutaDev o direito de analisar, processar e armazenar temporariamente esse código para fornecer o serviço. Não utilizamos seu código para outros fins além de fornecer o serviço solicitado.</p>
            
            <h2>Limitação de Responsabilidade</h2>
            <p>A HutaDev fornece o Analisador de Código Huta "como está" e "conforme disponível", sem garantias de qualquer tipo. Não garantimos que:</p>
            <ul>
              <li>O serviço atenderá seus requisitos específicos</li>
              <li>O serviço será ininterrupto, oportuno, seguro ou livre de erros</li>
              <li>Os resultados da análise serão precisos ou confiáveis</li>
            </ul>
            
            <h2>Indenização</h2>
            <p>Você concorda em indenizar e isentar a HutaDev, seus dirigentes, diretores, funcionários e agentes de quaisquer reclamações, responsabilidades, danos, perdas e despesas decorrentes de sua violação destes Termos de Uso ou do uso do serviço.</p>
            
            <h2>Alterações nos Termos</h2>
            <p>A HutaDev reserva-se o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação dos termos atualizados. Seu uso continuado do serviço após tais alterações constitui sua aceitação dos novos termos.</p>
            
            <h2>Lei Aplicável</h2>
            <p>Estes termos são regidos pelas leis do Brasil. Qualquer disputa relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.</p>
            
            <h2>Contato</h2>
            <p>Se tiver dúvidas sobre estes Termos de Uso, entre em contato conosco pelo e-mail: <a href="mailto:terms@hutadev.com">terms@hutadev.com</a>.</p>
            
            <p className="text-muted-foreground text-sm mt-8">Última atualização: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-border/30 py-6 bg-secondary/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HutaDev Analisador. {t("footer.rights")}</p>
        </div>
      </footer>
    </div>
  );
};

export default PaginaTermos;
