export interface Property {
  id: string;
  title: string;
  image: string;
  area: string;
  bedrooms: number;
  parkingSpots: number;
  highlight: string;
  location: string;
}

export interface ClientData {
  name: string;
  region: string;
  whatsappNumber: string;
  brokerName: string;
  brokerEmail: string;
  heroBackground?: string; // Caminho para imagem de fundo do Hero (opcional)
}
