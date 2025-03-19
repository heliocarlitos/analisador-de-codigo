
import React from 'react';
import Navbar from '@/components/Navbar';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/utils/languageContext';

const PaginaPrivacidade = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Política de Privacidade | Analisador de Código Huta</title>
        <meta name="description" content="Política de privacidade do Analisador de Código Huta. Saiba como tratamos seus dados." />
        <link rel="canonical" href="https://analisador.hutadev.com/privacidade" />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">A HutaDev valoriza sua privacidade e está comprometida em proteger seus dados pessoais. Esta política de privacidade explica como coletamos, usamos e protegemos suas informações quando você utiliza o Analisador de Código Huta.</p>
            
            <h2>Informações que coletamos</h2>
            <p>O Analisador de Código Huta coleta as seguintes informações:</p>
            <ul>
              <li>Código-fonte inserido para análise</li>
              <li>Informações de uso e estatísticas anônimas</li>
              <li>Cookies e dados de sessão</li>
            </ul>
            
            <h2>Como usamos suas informações</h2>
            <p>Utilizamos as informações coletadas para:</p>
            <ul>
              <li>Realizar a análise de código solicitada</li>
              <li>Melhorar nossa ferramenta e seus recursos</li>
              <li>Personalizar sua experiência de usuário</li>
              <li>Enviar atualizações sobre nossos serviços (apenas se você optar por recebê-las)</li>
            </ul>
            
            <h2>Segurança dos dados</h2>
            <p>A HutaDev implementa medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. O código-fonte enviado para análise é processado em nossos servidores, mas não é permanentemente armazenado após a conclusão da análise.</p>
            
            <h2>Cookies</h2>
            <p>Utilizamos cookies para melhorar sua experiência em nosso site. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.</p>
            
            <h2>Seus direitos</h2>
            <p>Você tem o direito de:</p>
            <ul>
              <li>Acessar, corrigir ou excluir seus dados pessoais</li>
              <li>Retirar seu consentimento a qualquer momento</li>
              <li>Opor-se ao processamento de seus dados pessoais</li>
              <li>Solicitar a portabilidade de seus dados</li>
            </ul>
            
            <h2>Alterações nesta política</h2>
            <p>Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer alterações.</p>
            
            <h2>Contato</h2>
            <p>Se você tiver dúvidas sobre esta política de privacidade ou quiser exercer seus direitos, entre em contato conosco pelo e-mail: <a href="mailto:privacy@hutadev.com">privacy@hutadev.com</a>.</p>
            
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

export default PaginaPrivacidade;
