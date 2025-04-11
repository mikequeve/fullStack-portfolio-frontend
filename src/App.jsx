import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import LandingPage from './Pages/LandingPage';
import GlobalContextProvider from './context/GlobalContext';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <HelmetProvider>
        <GlobalContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/projects/:id' element={<ProjectDetails />} />
            </Routes>
          </BrowserRouter>
        </GlobalContextProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
