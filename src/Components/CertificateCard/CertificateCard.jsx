import { useContext } from 'react';
import './CertificateCard.css';
import { Scan } from 'lucide-react';
import { GlobalContext } from '../../context/GlobalContext';

const CertificateCard = ({ img }) => {
  const { openModal } = useContext(GlobalContext);
  return (
    <div className='flex-center certificate__card' onClick={() => openModal(img)}>
      <img src={img} alt='' />
      <div className='flex-column certificate__card-overlay'>
        <Scan size={40} strokeWidth={3} />
        <h5>Full Mode</h5>
      </div>
    </div>
  );
};

export default CertificateCard;
