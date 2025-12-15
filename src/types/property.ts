export interface Property {
  id: string;
  title: string;
  image: string;
  gallery?: string[]; // Array de imagens para a galeria (opcional)
  area: string;
  bedrooms: number;
  parkingSpots: number;
  highlight: string;
  location: string;
  description?: string; // Descrição detalhada do imóvel (opcional)
}

export interface ClientData {
  name: string;
  region: string;
  whatsappNumber: string;
  brokerName: string;
  brokerEmail: string;
  heroBackground?: string; // Caminho para imagem de fundo do Hero (opcional)
}
