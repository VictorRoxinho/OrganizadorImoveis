import { Property, ClientData } from '../../types/property';

// ========================================
// DADOS DO CLIENTE
// ========================================
export const clientData: ClientData = {
  name: 'João Santos',
  region: 'Pituba',
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
    title: 'Apartamento 2 Quartos — Pituba',
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    area: '70m²',
    bedrooms: 2,
    parkingSpots: 1,
    highlight: 'Próximo ao colégio e supermercado',
    location: 'Pituba',
  },
  {
    id: '2',
    title: 'Apartamento 3 Quartos — Itaigara',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    area: '110m²',
    bedrooms: 3,
    parkingSpots: 2,
    highlight: 'Condomínio com infraestrutura completa',
    location: 'Itaigara',
  },
];
