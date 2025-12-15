# 👥 Guia de Gerenciamento de Clientes

## 📁 Estrutura

Cada cliente tem seu próprio arquivo nesta pasta com todos os dados personalizados.

## 🚀 Como Trocar de Cliente

### Método Simples (Recomendado)

1. Abra o arquivo [../activeClient.ts](../activeClient.ts)
2. Altere a linha do import:

```typescript
// De:
import * as activeClient from './clients/cliente-exemplo';

// Para:
import * as activeClient from './clients/joao-santos';
```

3. Salve o arquivo
4. A página recarrega automaticamente! ✨

---

## 📝 Como Criar um Novo Cliente

### Passo 1: Copie um arquivo existente

```bash
# Copie como template
cp cliente-exemplo.ts novo-cliente.ts
```

### Passo 2: Edite os dados do cliente

```typescript
export const clientData: ClientData = {
  name: 'Nome do Cliente',           // ← Nome que aparece no "Olá, {nome}"
  region: 'Região de Interesse',     // ← Região mencionada no texto
  whatsappNumber: '5571999999999',   // ← Seu WhatsApp (DDI + DDD + número)
  brokerName: 'Seu Nome',            // ← Seu nome
  brokerEmail: 'seu@email.com',      // ← Seu email
};
```

### Passo 3: Adicione os imóveis

```typescript
export const properties: Property[] = [
  {
    id: '1',                                    // ID único
    title: 'Apartamento 3 Quartos — Bairro',  // Título do card
    image: 'URL_DA_IMAGEM',                    // Link da foto
    area: '95m²',                              // Área
    bedrooms: 3,                               // Quartos
    parkingSpots: 2,                           // Vagas
    highlight: 'Diferencial principal',        // Destaque
    location: 'Bairro',                        // Localização
  },
  // ... mais imóveis
];
```

### Passo 4: Ative o novo cliente

Edite [../activeClient.ts](../activeClient.ts):

```typescript
import * as activeClient from './clients/novo-cliente';
```

---

## 🖼️ Onde Conseguir Imagens

### Opção 1: Fotos Reais (Recomendado)
- Use fotos reais dos imóveis
- Hospede no Google Drive, Dropbox ou Imgur
- Use o link direto da imagem

### Opção 2: Bancos de Imagens Gratuitos
- [Unsplash](https://unsplash.com/s/photos/apartment) - Fotos profissionais gratuitas
- [Pexels](https://www.pexels.com/search/real%20estate/) - Imóveis de qualidade
- [Pixabay](https://pixabay.com/images/search/apartment/) - Variedade de imóveis

#### Como usar Unsplash:
1. Acesse: https://unsplash.com/s/photos/apartment
2. Escolha a foto
3. Clique com botão direito → "Copiar endereço da imagem"
4. Cole no campo `image`

---

## 📋 Template Rápido

```typescript
import { Property, ClientData } from '../../types/property';

export const clientData: ClientData = {
  name: '',
  region: '',
  whatsappNumber: '5571999999999',
  brokerName: 'João Oliveira',
  brokerEmail: 'joao@curadoriaimoveis.com.br',
};

export const properties: Property[] = [
  {
    id: '1',
    title: '',
    image: '',
    area: '',
    bedrooms: 0,
    parkingSpots: 0,
    highlight: '',
    location: '',
  },
];
```

---

## 💡 Dicas Profissionais

### 🎯 Quantidade Ideal de Imóveis
- **2-3 imóveis**: Seleção mais exclusiva
- **4-5 imóveis**: Mais opções sem perder foco
- **6+**: Pode parecer menos curado

### 📝 Escrevendo Títulos
✅ **Bom**: "Apartamento 3 Quartos — Pituba"
❌ **Evite**: "LINDO APT 3/4 COM VISTA MARAVILHOSA!!!"

### 🌟 Destacando Diferenciais
Seja específico e consultivo:
- ✅ "Varanda gourmet com vista para o mar"
- ✅ "Reformado em 2024, mobília planejada"
- ✅ "Área de lazer com piscina aquecida"
- ❌ "Imóvel incrível"
- ❌ "Ótima localização"

---

## 🗂️ Organização de Arquivos

Sugestão de nomenclatura:

```
clients/
├── cliente-exemplo.ts          # Template de referência
├── maria-silva-paralela.ts     # Nome + região
├── joao-santos-pituba.ts       # Nome + região
├── ana-oliveira-alphaville.ts  # Nome + região
└── README.md                   # Este arquivo
```

---

## ❓ FAQ

**P: Posso usar imóveis repetidos para clientes diferentes?**
R: Sim! Basta copiar o objeto do imóvel.

**P: Como adicionar mais de 5 imóveis?**
R: Basta adicionar mais objetos no array `properties`. O layout se adapta automaticamente.

**P: Posso mudar as cores para cada cliente?**
R: Sim, mas isso requer editar o tema em `src/styles/theme.ts`.

**P: As imagens precisam ter tamanho específico?**
R: Recomendado: 800x600px ou maior. O sistema redimensiona automaticamente.

---

✨ **Pronto! Agora você pode gerenciar quantos clientes quiser de forma profissional!**
