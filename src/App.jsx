import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import LandingPage from './Pages/LandingPage';
import GlobalContextProvider from './context/GlobalContext';
import { HelmetProvider } from 'react-helmet-async';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('G-XM9QJXR0QB', { standardImplementation: true });
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
