import React, { useContext } from 'react';
import './CertificateModal.css';
import { X } from 'lucide-react';
import { GlobalContext } from '../../context/GlobalContext';

const CertificateModal = ({ isModalOpen, setIsModalOpen, img }) => {
  return (
    <>
      {isModalOpen && (
        <article className='flex-center modal__overlay '>
          <div className='flex-center modal'>
            <button className='flex-center' onClick={() => setIsModalOpen(!isModalOpen)}>
              <X />
            </button>
            <img src={img} alt='' />
          </div>
        </article>
      )}
    </>
  );
};

export default CertificateModal;
