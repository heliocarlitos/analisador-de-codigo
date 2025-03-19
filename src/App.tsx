
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './utils/languageContext';
import Inicio from "./pages/Index";
import PaginaSobre from "./pages/About";
import PaginaNaoEncontrada from "./pages/NotFound";
import PaginaPrivacidade from "./pages/Privacy";
import PaginaTermos from "./pages/Terms";
import PaginaDocumentacao from "./pages/Documentation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/about" element={<PaginaSobre />} />
              <Route path="/privacidade" element={<PaginaPrivacidade />} />
              <Route path="/termos" element={<PaginaTermos />} />
              <Route path="/documentacao" element={<PaginaDocumentacao />} />
              <Route path="*" element={<PaginaNaoEncontrada />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
