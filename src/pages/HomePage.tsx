import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { PropertyList } from '../components/PropertyList';
import { AuthorityBlock } from '../components/AuthorityBlock';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { ClientData, Property } from '../types/property';

interface HomePageProps {
  clientData: ClientData;
  properties: Property[];
}

export const HomePage: React.FC<HomePageProps> = ({
  clientData,
  properties,
}) => {
  return (
    <>
      <Header
        brokerName={clientData.brokerName}
        whatsappNumber={clientData.whatsappNumber}
      />
      <Hero
        clientName={clientData.name}
        region={clientData.region}
        whatsappNumber={clientData.whatsappNumber}
        heroBackground={clientData.heroBackground}
      />
      <PropertyList
        properties={properties}
        whatsappNumber={clientData.whatsappNumber}
        brokerName={clientData.brokerName}
      />
      <AuthorityBlock />
      <FinalCTA
        brokerName={clientData.brokerName}
        whatsappNumber={clientData.whatsappNumber}
      />
      <Footer
        brokerName={clientData.brokerName}
        whatsappNumber={clientData.whatsappNumber}
        email={clientData.brokerEmail}
      />
    </>
  );
};
