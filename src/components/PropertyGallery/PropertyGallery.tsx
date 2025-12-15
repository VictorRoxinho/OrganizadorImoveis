import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  GalleryContainer,
  GalleryHeader,
  BackButton,
  BackIcon,
  PropertyTitle,
  GalleryContent,
  MainImageSection,
  MainImage,
  ThumbnailGrid,
  Thumbnail,
  PropertyDetails,
  DetailSection,
  DetailTitle,
  DetailText,
  DetailsGrid,
  DetailItem,
  DetailIcon,
  CTASection,
  WhatsAppButton,
  WhatsAppIcon,
} from './PropertyGallery.styles';
import { Property } from '../../types/property';

interface PropertyGalleryProps {
  properties: Property[];
  whatsappNumber: string;
  brokerName: string;
}

export const PropertyGallery: React.FC<PropertyGalleryProps> = ({
  properties,
  whatsappNumber,
  brokerName,
}) => {
  const { propertyId } = useParams<{ propertyId: string }>();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === propertyId);

  const [selectedImage, setSelectedImage] = useState(0);

  if (!property) {
    return (
      <GalleryContainer>
        <GalleryHeader>
          <BackButton onClick={() => navigate('/')}>
            <BackIcon viewBox="0 0 24 24">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </BackIcon>
            Voltar
          </BackButton>
        </GalleryHeader>
        <PropertyDetails>
          <DetailTitle>Imóvel não encontrado</DetailTitle>
          <DetailText>
            O imóvel que você está procurando não existe ou foi removido.
          </DetailText>
        </PropertyDetails>
      </GalleryContainer>
    );
  }

  const galleryImages = property.gallery || [property.image];
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Olá ${brokerName}! Gostaria de mais informações sobre o imóvel: ${property.title}`
  )}`;

  return (
    <GalleryContainer>
      <GalleryHeader>
        <BackButton onClick={() => navigate('/')}>
          <BackIcon viewBox="0 0 24 24">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </BackIcon>
          Voltar
        </BackButton>
        <PropertyTitle>{property.title}</PropertyTitle>
      </GalleryHeader>

      <GalleryContent>
        <MainImageSection>
          <MainImage src={galleryImages[selectedImage]} alt={property.title} />
          {galleryImages.length > 1 && (
            <ThumbnailGrid>
              {galleryImages.map((image, index) => (
                <Thumbnail
                  key={index}
                  src={image}
                  alt={`${property.title} - Foto ${index + 1}`}
                  $isActive={index === selectedImage}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </ThumbnailGrid>
          )}
        </MainImageSection>

        <PropertyDetails>
          <DetailSection>
            <DetailTitle>Características</DetailTitle>
            <DetailsGrid>
              <DetailItem>
                <DetailIcon viewBox="0 0 24 24">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </DetailIcon>
                <div>
                  <strong>Área</strong>
                  <DetailText>{property.area}</DetailText>
                </div>
              </DetailItem>
              <DetailItem>
                <DetailIcon viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </DetailIcon>
                <div>
                  <strong>Quartos</strong>
                  <DetailText>{property.bedrooms}</DetailText>
                </div>
              </DetailItem>
              <DetailItem>
                <DetailIcon viewBox="0 0 24 24">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <circle cx="17" cy="17" r="2" />
                </DetailIcon>
                <div>
                  <strong>Vagas</strong>
                  <DetailText>{property.parkingSpots}</DetailText>
                </div>
              </DetailItem>
              <DetailItem>
                <DetailIcon viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </DetailIcon>
                <div>
                  <strong>Localização</strong>
                  <DetailText>{property.location}</DetailText>
                </div>
              </DetailItem>
            </DetailsGrid>
          </DetailSection>

          <DetailSection>
            <DetailTitle>Destaque</DetailTitle>
            <DetailText>{property.highlight}</DetailText>
          </DetailSection>

          {property.description && (
            <DetailSection>
              <DetailTitle>Sobre o imóvel</DetailTitle>
              <DetailText>{property.description}</DetailText>
            </DetailSection>
          )}

          <CTASection>
            <WhatsAppButton
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </WhatsAppIcon>
              Tenho interesse neste imóvel
            </WhatsAppButton>
          </CTASection>
        </PropertyDetails>
      </GalleryContent>
    </GalleryContainer>
  );
};
