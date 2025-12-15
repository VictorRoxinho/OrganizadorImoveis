import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { HomePage } from './pages/HomePage';
import { PropertyGallery } from './components/PropertyGallery';
import { clientData, properties } from './data/mockData';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage clientData={clientData} properties={properties} />
            }
          />
          <Route
            path="/imovel/:propertyId"
            element={
              <PropertyGallery
                properties={properties}
                whatsappNumber={clientData.whatsappNumber}
                brokerName={clientData.brokerName}
              />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
