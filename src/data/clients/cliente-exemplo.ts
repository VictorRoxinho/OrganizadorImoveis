import { Property, ClientData } from '../../types/property';

// ========================================
// DADOS DO CLIENTE
// ========================================
export const clientData: ClientData = {
  name: 'Maria Silva',
  region: 'Paralela',
  whatsappNumber: '5571981511131',
  brokerName: 'João Victor',
  brokerEmail: 'jvcroxinho@outlook.com',
  heroBackground: '/imoveis/maria-silva/background-hero.jpg', // Imagem de fundo personalizada
};

// ========================================
// IMÓVEIS SELECIONADOS PARA ESTE CLIENTE
// ========================================
// 📸 IMPORTANTE: Adicione as fotos em: public/imoveis/maria-silva/
// Use caminhos relativos: /imoveis/maria-silva/nome-foto.jpg

export const properties: Property[] = [
  {
    id: '1',
    title: 'Apartamento 3 Quartos — Paralela',
    // Substitua pela foto real do imóvel:
    image: '/imoveis/maria-silva/imovel-01.webp',
    // Temporário (Unsplash):
    // image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    area: '95m²',
    bedrooms: 3,
    parkingSpots: 2,
    highlight: 'Varanda gourmet com vista panorâmica',
    location: 'Paralela',
  },
  {
    id: '2',
    title: 'Apartamento 2 Quartos — Imbui',
    image: '/imoveis/maria-silva/imovel-02.webp',
    area: '78m²',
    bedrooms: 2,
    parkingSpots: 1,
    highlight: 'Reformado recentemente, próximo ao shopping',
    location: 'Imbui',
  },
  {
    id: '3',
    title: 'Cobertura 4 Quartos — Alphaville',
    image: '/imoveis/maria-silva/imovel-03.webp',
    area: '180m²',
    bedrooms: 4,
    parkingSpots: 3,
    highlight: 'Área de lazer privativa com piscina',
    location: 'Alphaville',
  },
];
