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
import ReactGA from 'react-ga4';

const LandingPage = () => {
  const { projects, certificates, loading, isModalOpen, setIsModalOpen, selectedImg } =
    useContext(GlobalContext);

  useEffect(() => {
    ReactGA.initialize('G-XM9QJXR0QB');
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'App.jsx',
    });
  }, []);

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
