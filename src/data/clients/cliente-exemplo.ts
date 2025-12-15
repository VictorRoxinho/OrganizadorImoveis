import { Property, ClientData } from '../../types/property';

// ========================================
// DADOS DO CLIENTE
// ========================================
export const clientData: ClientData = {
  name: 'Marcos',
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
    // https://ba.olx.com.br/grande-salvador/imoveis/apartamento-2-4-porteira-fechada-no-parque-milenio-nascente-condominio-clube-na-paralela-r-1462190146?lis=listing_1000
    id: '1',
    title: 'Parque Milenio — Itapuã',
    // Substitua pela foto real do imóvel:
    image: '/imoveis/maria-silva/imovel01/imovel-01.webp',
    gallery: [
      '/imoveis/maria-silva/imovel01/imovel-01.webp',
      '/imoveis/maria-silva/imovel01/imovel-01-foto02.webp',
      '/imoveis/maria-silva/imovel01/imovel-01-foto03.webp',
      '/imoveis/maria-silva/imovel01/imovel-01-foto04.webp',
      '/imoveis/maria-silva/imovel01/imovel-01-foto05.webp',
      '/imoveis/maria-silva/imovel01/imovel-01-foto06.webp',
      '/imoveis/maria-silva/imovel01/imovel-01-foto07.webp',
      '/imoveis/maria-silva/imovel01/imovel-01-foto08.webp',
      '/imoveis/maria-silva/imovel01/imovel-01-foto09.webp',
      '/imoveis/maria-silva/imovel01/imovel-01-foto10.webp',
    ],
    // Temporário (Unsplash):
    // image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    area: '50m²',
    bedrooms: 2,
    parkingSpots: 1,
    highlight: 'Portaria fechada, todos os móveis inclusos',
    location: 'Itapuã',
    description:
      'Apartamento 2/4 porteira fechada no Condomínio Parque Milênio, na Av. Paralela, nascente, sala ampliada, armários planejados, 2 banheiros e 1 vaga, em condomínio clube completo com lazer e portaria 24h',
  },
  {
    // https://www.chavesnamao.com.br/imovel/apartamento-a-venda-2-quartos-com-garagem-ba-salvador-itapua-80m2-RS250000/id-26671140/
    id: '2',
    title: 'Apartamento 2 Quartos — Itapuã',
    image: '/imoveis/maria-silva/imovel02/imovel-02.webp',
    gallery: [
      '/imoveis/maria-silva/imovel02/imovel-02.webp',
      '/imoveis/maria-silva/imovel02/imovel-02-foto02.webp',
      '/imoveis/maria-silva/imovel02/imovel-02-foto03.webp',
      '/imoveis/maria-silva/imovel02/imovel-02-foto04.webp',
      '/imoveis/maria-silva/imovel02/imovel-02-foto05.webp',
      '/imoveis/maria-silva/imovel02/imovel-02-foto06.webp',
      '/imoveis/maria-silva/imovel02/imovel-02-foto07.webp',
      '/imoveis/maria-silva/imovel02/imovel-02-foto08.webp',
      '/imoveis/maria-silva/imovel02/imovel-02-foto09.webp',
      '/imoveis/maria-silva/imovel02/imovel-02-foto10.webp',
      '/imoveis/maria-silva/imovel02/imovel-02-foto11.webp',
      '/imoveis/maria-silva/imovel02/imovel-02-foto12.webp',
    ],
    area: '80m²',
    bedrooms: 2,
    parkingSpots: 1,
    highlight: '2 quartos com suíte e varanda',
    location: 'Itapuã',
    description:
      'Apartamento com sala em porcelanato integrada em dois ambientes, cozinha aberta com armários planejados, dois quartos climatizados (sendo uma suíte com varanda) e excelente padrão de acabamento.',
  },
  {
    // https://ba.olx.com.br/grande-salvador/imoveis/apartamento-a-venda-no-paralela-park-rua-procurador-nelson-castro-paralela-salvador-1462131862
    id: '3',
    title: 'Apartamento 3 quartos — Paralela Park',
    image: '/imoveis/maria-silva/imovel03/imovel-03-foto01.webp',
    gallery: [
      '/imoveis/maria-silva/imovel03/imovel-03-foto01.webp',
      '/imoveis/maria-silva/imovel03/imovel-03-foto02.webp',
      '/imoveis/maria-silva/imovel03/imovel-03-foto03.webp',
      '/imoveis/maria-silva/imovel03/imovel-03-foto04.webp',
      '/imoveis/maria-silva/imovel03/imovel-03-foto05.webp',
      '/imoveis/maria-silva/imovel03/imovel-03-foto06.webp',
      '/imoveis/maria-silva/imovel03/imovel-03-foto07.webp',
      '/imoveis/maria-silva/imovel03/imovel-03-foto08.webp',
      '/imoveis/maria-silva/imovel03/imovel-03-foto09.webp',
    ],
    area: '62m²',
    bedrooms: 3,
    parkingSpots: 1,
    highlight: 'Bem ventilado e com armários de cozinha',
    location: 'Paralela Park',
    description:
      'Apartamento 3/4 no Paralela Park, com 62 m², sala, cozinha com armários, área de serviço, banheiro social e de serviço, bem ventilado e privativo. Condomínio com portão eletrônico e água inclusa, em localização estratégica próxima a shopping, metrô, escolas e centros comerciais.',
  },
];
