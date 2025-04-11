import React, { useContext, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Sections/Hero/Hero';
import About from '../Sections/About/About';
import Portfolio from '../Sections/Portfolio/Portfolio';
import Contact from '../Sections/Contact/Contact';
import Certificates from '../Sections/Certificates/Certificates';
import Background from '../Components/Background/Background';
import { GlobalContext } from '../context/GlobalContext';
import CertificateModal from '../Components/CertificateModal/CertificateModal';
import SeoMetaTags from '../Components/SeoMetaTags/SeoMetaTags';
import Footer from '../Components/Footer/Footer';
import { useEffect } from 'react';
import { initGA, trackPageView } from './analytics';
import { useLocation } from 'react-router-dom';

const LandingPage = () => {
  const { projects, certificates, loading, isModalOpen, setIsModalOpen, selectedImg } =
    useContext(GlobalContext);

  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <SeoMetaTags
        title={'Mike.Vega Portfolio'}
        description={'Professional Portfolio - Michael Quesada Vega'}
        name={'Mike.Vega Portfolio'}
      />
      <Navbar />
      <Background />
      <main>
        <Hero />
        <About />
        <Portfolio projects={projects} loading={loading} />
        <Contact />
        <Certificates certificates={certificates} loading={loading} />
      </main>
      <Footer />
      <CertificateModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        img={selectedImg}
      />
    </>
  );
};

export default LandingPage;
