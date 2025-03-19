<div align="center">

# Analisador de Código Huta - Documentação de Instalação

![GitHub repo size](https://img.shields.io/github/repo-size/heliocarlitos/analisador-de-codigo?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/heliocarlitos/analisador-de-codigo?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/heliocarlitos/analisador-de-codigo?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/heliocarlitos/analisador-de-codigo?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/heliocarlitos/analisador-de-codigo?style=for-the-badge)

</div>

<a href="https://hutadev.github.io/hero_form_inline/"> 

<picture>
     <source media="(prefers-color-scheme: dark)" srcset="https://github.com/heliocarlitos/analisador-de-codigo/blob/main/public/og-image.png?raw=true">
     <source media="(prefers-color-scheme: light)" srcset="https://github.com/heliocarlitos/analisador-de-codigo/blob/main/public/og-image.png?raw=true">
     <img alt="Imagem de demo" src="https://github.com/heliocarlitos/analisador-de-codigo/blob/main/public/og-image.png?raw=true">
</picture>

</a>

Este guia fornece instruções detalhadas para configurar e executar o **Analisador de Código Huta** em sua máquina local. O projeto foi desenvolvido com **Vite**, **React**, **TypeScript**, **shadcn/ui** e **TailwindCSS**, e possui diversas dependências para funcionalidades avançadas.

---

## Pré-requisitos

Antes de começar, certifique-se de que você possui os seguintes requisitos instalados em sua máquina:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** (gerenciadores de pacotes)
- **Git** (para clonar o repositório)

---

## Passos para Configuração

### 1. Clonar o Repositório

Clone o repositório do projeto para sua máquina local:

```bash
git clone https://github.com/heliocarlitos/analisador-codigo-huta.git
cd analisador-codigo-huta
```

---

### 2. Instalar Dependências

Instale todas as dependências do projeto utilizando **npm** ou **yarn**:

#### Usando npm:
```bash
npm install
```

#### Usando yarn:
```bash
yarn install
```

---

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias. Um exemplo de configuração pode ser:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_MODE=development
```

---

### 4. Executar o Projeto

Após instalar as dependências, você pode iniciar o servidor de desenvolvimento:

#### Usando npm:
```bash
npm run dev
```

#### Usando yarn:
```bash
yarn dev
```

O servidor estará disponível em:  
[http://localhost:5173](http://localhost:5173)

---

### 5. Compilar para Produção

Para criar uma versão otimizada do projeto, execute o comando de build:

#### Usando npm:
```bash
npm run build
```

#### Usando yarn:
```bash
yarn build
```

Os arquivos compilados serão gerados na pasta `dist`.

---

### 6. Visualizar o Build de Produção

Para visualizar o build de produção localmente, utilize o comando:

#### Usando npm:
```bash
npm run preview
```

#### Usando yarn:
```bash
yarn preview
```

O projeto estará disponível em:  
[http://localhost:4173](http://localhost:4173)

---

## Dependências Principais

O projeto utiliza as seguintes bibliotecas e frameworks:

### Dependências de Produção
- **React** e **React DOM**: Biblioteca principal para construção de interfaces.
- **shadcn/ui**: Componentes UI altamente personalizáveis.
- **TailwindCSS**: Framework CSS utilitário.
- **React Hook Form**: Gerenciamento de formulários.
- **Zod**: Validação de esquemas.
- **TanStack Query**: Gerenciamento de estado e requisições assíncronas.
- **Recharts**: Biblioteca para gráficos e visualizações.
- **Lucide React**: Ícones modernos.

### Dependências de Desenvolvimento
- **Vite**: Build tool rápida e moderna.
- **TypeScript**: Adiciona tipagem estática ao JavaScript.
- **ESLint**: Linting para manter a qualidade do código.
- **TailwindCSS Animate**: Animações para TailwindCSS.
- **PostCSS** e **Autoprefixer**: Processamento de CSS.

---

## Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

- **`dev`**: Inicia o servidor de desenvolvimento.
- **`build`**: Compila o projeto para produção.
- **`build:dev`**: Compila o projeto para desenvolvimento.
- **`lint`**: Executa o ESLint para verificar erros no código.
- **`preview`**: Visualiza o build de produção localmente.

---

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE). Sinta-se à vontade para usar, modificar e distribuir o código conforme necessário.

---

## Contribuição

Contribuições são bem-vindas! Siga estas etapas para contribuir:

1. Faça um **fork** do repositório.
2. Crie uma **branch** para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça um **push** para a branch (`git push origin feature/nova-feature`).
5. Abra um **Pull Request**.

---

**Obrigado por utilizar o Analisador de Código Huta!** 🚀
