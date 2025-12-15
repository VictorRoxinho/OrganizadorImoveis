import { Property, ClientData } from '../../types/property';

// ========================================
// DADOS DO CLIENTE
// ========================================
export const clientData: ClientData = {
  name: 'Ana Oliveira',
  region: 'Alphaville',
  whatsappNumber: '5571999999999',
  brokerName: 'João Victor',
  brokerEmail: 'jvcroxinho@outlook.com',
};

// ========================================
// IMÓVEIS SELECIONADOS PARA ESTE CLIENTE
// ========================================
export const properties: Property[] = [
  {
    id: '1',
    title: 'Casa em Condomínio — Alphaville I',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    area: '250m²',
    bedrooms: 4,
    parkingSpots: 4,
    highlight: 'Casa térrea com quintal amplo e piscina',
    location: 'Alphaville',
  },
  {
    id: '2',
    title: 'Casa em Condomínio — Alphaville II',
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    area: '300m²',
    bedrooms: 5,
    parkingSpots: 4,
    highlight: 'Casa de alto padrão com área gourmet',
    location: 'Alphaville',
  },
  {
    id: '3',
    title: 'Cobertura — Alphaville',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    area: '200m²',
    bedrooms: 4,
    parkingSpots: 3,
    highlight: 'Cobertura duplex com vista panorâmica',
    location: 'Alphaville',
  },
];
