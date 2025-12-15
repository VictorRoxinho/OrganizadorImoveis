import { Property } from '../../types/property';
import { PropertyCard } from '../PropertyCard';
import { Section, Container, Header, Title, Subtitle, Grid } from './PropertyList.styles';

interface PropertyListProps {
  properties: Property[];
  whatsappNumber: string;
  brokerName: string;
}

export const PropertyList: React.FC<PropertyListProps> = ({
  properties,
  whatsappNumber,
  brokerName,
}) => {
  const handleContactClick = (property: Property) => {
    const message = encodeURIComponent(
      `Olá ${brokerName}! Tenho interesse no imóvel: ${property.title}. Gostaria de mais detalhes.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <Section id="properties">
      <Container>
        <Header>
          <Title>Imóveis selecionados para você</Title>
          <Subtitle>Curadoria personalizada • Atualizada • Focada no seu perfil</Subtitle>
        </Header>
        <Grid>
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onContactClick={handleContactClick}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
