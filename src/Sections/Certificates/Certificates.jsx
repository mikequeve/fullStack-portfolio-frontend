import CertificateCard from '../../Components/CertificateCard/CertificateCard';
import Loader from '../../Components/Loader/Loader';
import './Certificates.css';

const Certificates = (props) => {
  const { certificates, loading } = props;

  return (
    <section className='flex-center site__certificates' id='Certificates'>
      <article className='flex-column container'>
        <div
          className='flex-column section__subtitle'
          data-aos='fade-up'
          data-aos-delay='50'
          data-aos-duration='900'
        >
          <h2 className='subtitle'>Certificates</h2>
          <p>Explore my learning path through the certificates that I've obtained.</p>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className='flex-center certificates__container'>
            {certificates.map((certificate, index) => (
              <div
                className='flex-center'
                style={{ width: 'min(100%, 25.2rem)' }}
                key={index}
                data-aos={
                  index % 3 === 0
                    ? 'fade-up-right'
                    : index % 3 === 1
                    ? 'fade-up'
                    : 'fade-up-left'
                }
                data-aos-duration='1000'
              >
                <CertificateCard img={certificate.imageUrl} />
              </div>
            ))}
          </div>
        )}
      </article>
    </section>
  );
};

export default Certificates;
