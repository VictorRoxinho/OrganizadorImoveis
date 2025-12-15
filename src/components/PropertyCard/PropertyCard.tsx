import { Property } from '../../types/property';
import {
  Card,
  ImageContainer,
  PropertyImage,
  CardContent,
  Title,
  InfoList,
  InfoItem,
  Highlight,
  CTAButton,
} from './PropertyCard.styles';

interface PropertyCardProps {
  property: Property;
  onContactClick: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onContactClick }) => {
  return (
    <Card>
      <ImageContainer>
        <PropertyImage src={property.image} alt={property.title} loading="lazy" />
      </ImageContainer>
      <CardContent>
        <Title>{property.title}</Title>
        <InfoList>
          <InfoItem>
            <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 3v18" />
            </svg>
            <span>{property.area}</span>
          </InfoItem>
          <InfoItem>
            <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>{property.bedrooms} {property.bedrooms === 1 ? 'quarto' : 'quartos'}</span>
          </InfoItem>
          <InfoItem>
            <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>{property.parkingSpots} {property.parkingSpots === 1 ? 'vaga' : 'vagas'}</span>
          </InfoItem>
        </InfoList>
        <Highlight>
          <p>{property.highlight}</p>
        </Highlight>
        <CTAButton onClick={() => onContactClick(property)}>
          Quero mais detalhes
        </CTAButton>
      </CardContent>
    </Card>
  );
};
