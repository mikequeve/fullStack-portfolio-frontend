import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import LandingPage from './Pages/LandingPage';
import GlobalContextProvider from './context/GlobalContext';
import { HelmetProvider } from 'react-helmet-async';

function App() {
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
