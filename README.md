# 🏠 Curadoria Imobiliária Personalizada

Landing page moderna e sofisticada para corretores de imóveis que desejam apresentar uma seleção personalizada de imóveis para seus clientes.

## 🎯 Objetivo

Esta aplicação foi desenvolvida para transmitir **exclusividade e atendimento consultivo**. Não é um portal imobiliário genérico, mas sim uma apresentação curada de imóveis selecionados especificamente para um cliente.

## ✨ Características

- 🎨 **Design moderno e elegante** - Interface clean e profissional
- 📱 **Totalmente responsivo** - Funciona perfeitamente em todos os dispositivos
- 🚀 **Performance otimizada** - Carregamento rápido e animações suaves
- 🎭 **Personalização fácil** - Dados do cliente facilmente configuráveis
- 💬 **Integração com WhatsApp** - CTAs direcionam para conversas diretas
- 🧩 **Componentizado** - Código organizado e reutilizável

## 🛠️ Stack Técnica

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Styled Components** - Estilização CSS-in-JS
- **Vite** - Build tool e dev server
- **Mobile-first** - Design responsivo

## 📦 Instalação

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Passos

1. Clone ou baixe este repositório

2. Instale as dependências:
```bash
npm install
```

ou

```bash
yarn
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

ou

```bash
yarn dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## 🎨 Personalização

### 🔥 Sistema Multi-Cliente (NOVO!)

Este projeto suporta **múltiplos clientes** de forma organizada!

#### Como Trocar de Cliente:

1. Abra [src/data/activeClient.ts](src/data/activeClient.ts)
2. Altere a linha do import:

```typescript
// Troque de:
import * as activeClient from './clients/cliente-exemplo';

// Para:
import * as activeClient from './clients/joao-santos';
// ou
import * as activeClient from './clients/ana-oliveira';
```

3. Salve → A página recarrega automaticamente! ✨

#### Como Criar um Novo Cliente:

1. Crie um novo arquivo em `src/data/clients/nome-cliente.ts`
2. Copie o template de `cliente-exemplo.ts`
3. Edite os dados:

```typescript
export const clientData: ClientData = {
  name: 'Maria Silva',              // Nome do cliente
  region: 'Paralela',                // Região de interesse
  whatsappNumber: '5571999999999',   // Número do WhatsApp (com DDI + DDD)
  brokerName: 'João Oliveira',       // Nome do corretor
  brokerEmail: 'joao@curadoriaimoveis.com.br',
};
```

4. Adicione os imóveis:

```typescript
export const properties: Property[] = [
  {
    id: '1',
    title: 'Apartamento 3 Quartos — Paralela',
    image: '/imoveis/nome-cliente/imovel-01.jpg',  // ← Foto local
    area: '95m²',
    bedrooms: 3,
    parkingSpots: 2,
    highlight: 'Varanda gourmet com vista panorâmica',
    location: 'Paralela',
  },
  // ... mais imóveis
];
```

5. Adicione as fotos dos imóveis em `public/imoveis/nome-cliente/`

### 📸 Gerenciamento de Fotos

#### Estrutura de Pastas:

```
public/imoveis/
├── maria-silva/
│   ├── imovel-01.jpg
│   ├── imovel-02.jpg
│   └── imovel-03.jpg
└── joao-santos/
    └── apto-pituba.jpg
```

#### Como adicionar fotos:

1. **Crie uma pasta** para o cliente em `public/imoveis/`
2. **Adicione as fotos** dos imóveis (JPG, PNG ou WebP)
3. **Use o caminho** no código: `/imoveis/nome-cliente/foto.jpg`

#### Otimização de Fotos:

- **Tamanho recomendado**: 800x600px
- **Formato**: JPG (melhor compressão)
- **Peso**: 100-300 KB por foto
- **Ferramentas gratuitas**:
  - [TinyPNG](https://tinypng.com/) - Compressão automática
  - [Squoosh](https://squoosh.app/) - Controle total

📖 **Guia completo**: [public/imoveis/README.md](public/imoveis/README.md)

### Cores e Tema

Edite o arquivo [src/styles/theme.ts](src/styles/theme.ts) para alterar:

- Cores principais e secundárias
- Tipografia
- Espaçamentos
- Sombras e efeitos
- Breakpoints responsivos

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header/         # Cabeçalho fixo
│   ├── Hero/           # Seção hero personalizada
│   ├── PropertyCard/   # Card de imóvel
│   ├── PropertyList/   # Lista de imóveis
│   ├── AuthorityBlock/ # Bloco de autoridade do corretor
│   ├── FinalCTA/       # Call-to-action final
│   └── Footer/         # Rodapé
├── data/               # Dados mockados
│   └── mockData.ts     # Dados do cliente e imóveis
├── styles/             # Estilos globais e tema
│   ├── theme.ts        # Tema com cores, fontes, etc
│   ├── GlobalStyles.ts # Estilos globais
│   └── styled.d.ts     # Tipos do Styled Components
├── types/              # TypeScript types
│   └── property.ts     # Interfaces de dados
├── App.tsx             # Componente principal
└── main.tsx            # Entry point
```

## 🚀 Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

ou

```bash
yarn build
```

Os arquivos estarão na pasta `dist/` prontos para deploy.

### Preview da Build

Para testar a versão de produção localmente:

```bash
npm run preview
```

## 🌐 Deploy

Esta aplicação pode ser facilmente hospedada em:

- **Vercel** - Recomendado (deploy automático)
- **Netlify** - Excelente opção
- **GitHub Pages** - Gratuito
- **Hostinger/Locaweb** - Qualquer hospedagem com suporte a SPA

### Deploy na Vercel (Recomendado)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório
3. Deploy automático a cada commit

## 💡 Uso

### Para cada novo cliente:

1. Edite `src/data/mockData.ts` com os dados do cliente
2. Atualize a lista de imóveis
3. Faça o build: `npm run build`
4. Hospede em um subdomínio único (ex: maria-silva.seusite.com.br)
5. Envie o link personalizado para o cliente

### Dica Profissional

Mantenha um repositório separado ou branch para cada cliente, facilitando atualizações futuras.

## 🎓 Conceito

Esta landing page foi desenvolvida seguindo os princípios de:

- **Curadoria vs Catálogo** - Foco na seleção personalizada, não em volume
- **Consultoria vs Venda** - Posicionamento como consultor imobiliário
- **Exclusividade** - Cada cliente recebe uma experiência única
- **Conversão** - CTAs estratégicos para WhatsApp

## 📝 Licença

Este projeto pode ser usado livremente para fins comerciais por corretores de imóveis.

## 🤝 Suporte

Para dúvidas ou personalizações adicionais, entre em contato.

---

**Desenvolvido com foco em conversão e experiência do cliente** 🏡✨
