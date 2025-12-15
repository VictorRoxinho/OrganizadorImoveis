# 📸 Guia de Organização de Fotos dos Imóveis

## 📁 Estrutura Recomendada

```
public/imoveis/
├── maria-silva/           # Pasta do cliente
│   ├── imovel-01.jpg
│   ├── imovel-02.jpg
│   └── imovel-03.jpg
├── joao-santos/
│   ├── apto-pituba.jpg
│   └── apto-itaigara.jpg
└── ana-oliveira/
    ├── casa-alphaville-1.jpg
    ├── casa-alphaville-2.jpg
    └── cobertura.jpg
```

## 🎯 Como Usar

### 1. Organize as fotos por cliente

Crie uma pasta para cada cliente com o mesmo nome do arquivo `.ts`:

- Cliente: `cliente-exemplo.ts` → Pasta: `cliente-exemplo/`
- Cliente: `joao-santos.ts` → Pasta: `joao-santos/`

### 2. Adicione as fotos na pasta do cliente

Coloque as fotos dos imóveis dentro da pasta correspondente.

### 3. Use o caminho no código

No arquivo do cliente (ex: `src/data/clients/maria-silva.ts`):

```typescript
export const properties: Property[] = [
  {
    id: '1',
    title: 'Apartamento 3 Quartos — Paralela',
    image: '/imoveis/maria-silva/imovel-01.jpg',  // ← Caminho relativo
    area: '95m²',
    bedrooms: 3,
    parkingSpots: 2,
    highlight: 'Varanda gourmet com vista panorâmica',
    location: 'Paralela',
  },
];
```

## 📐 Especificações das Fotos

### Tamanho Recomendado:
- **Largura**: 800-1200px
- **Altura**: 600-900px
- **Proporção**: 4:3 ou 16:9

### Formato:
- ✅ **JPG/JPEG** - Melhor compressão (recomendado)
- ✅ **PNG** - Maior qualidade, arquivo maior
- ✅ **WebP** - Moderna, ótima compressão

### Tamanho do Arquivo:
- 📦 **Ideal**: 100-300 KB por foto
- ⚠️ **Evite**: Fotos acima de 1 MB

## 🛠️ Como Otimizar Fotos

### Online (Grátis):
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **Compressor.io**: https://compressor.io/

### Passos:
1. Abra o site
2. Faça upload da foto
3. Baixe a versão otimizada
4. Salve na pasta do cliente

## 📝 Nomenclatura Sugerida

Use nomes descritivos e organizados:

✅ **Bom:**
- `apto-paralela-sala.jpg`
- `casa-alphaville-fachada.jpg`
- `cobertura-vista-mar.jpg`
- `imovel-01.jpg`, `imovel-02.jpg`

❌ **Evite:**
- `IMG_20240115.jpg`
- `foto (1).jpg`
- `WhatsApp Image 2024.jpg`

## 🎨 Dicas Profissionais

### Quantidade de Fotos:
- **1 foto principal** por imóvel (aparece no card)
- Para galeria completa: criar link para mais fotos

### Qualidade Visual:
- ✅ Fotos com boa iluminação
- ✅ Ambientes organizados
- ✅ Ângulos que valorizem o espaço
- ❌ Fotos escuras ou desfocadas

### Edição Básica:
- Ajuste brilho e contraste
- Corte margens desnecessárias
- Mantenha as cores naturais

## 🔄 Exemplo Completo

```typescript
// src/data/clients/maria-silva.ts

export const properties: Property[] = [
  {
    id: '1',
    title: 'Apartamento 3 Quartos — Paralela',
    image: '/imoveis/maria-silva/apto-paralela.jpg',
    area: '95m²',
    bedrooms: 3,
    parkingSpots: 2,
    highlight: 'Varanda gourmet com vista panorâmica',
    location: 'Paralela',
  },
  {
    id: '2',
    title: 'Apartamento 2 Quartos — Imbui',
    image: '/imoveis/maria-silva/apto-imbui.jpg',
    area: '78m²',
    bedrooms: 2,
    parkingSpots: 1,
    highlight: 'Reformado recentemente',
    location: 'Imbui',
  },
];
```

---

✨ **Pronto! Agora suas fotos estão organizadas profissionalmente!**
