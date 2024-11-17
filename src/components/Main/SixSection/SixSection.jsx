import './SixSection.scss';
import ChasiSix from '../../../images/chasi.png';
import React, { useState, useEffect } from 'react';

export default function SixSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const open = () => {
    setIsModalOpen(true);
  };

  const close = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);
  return (
    <div>
        <p className='titlee'>
      <h1>новые поступления</h1>
      </p>
      <div className='linee'></div>
      <div className='container'>
     
        <div className='imageRow' onClick={open} style={{cursor: 'pointer'}}>
          {Array.from({ length: 8 }).map((_, index) => (
            <div className='chasiBox' key={index}>
              <div className='imgSix'>
                <img src={ChasiSix} className='img'/>
              </div>
              <p>Louis XVI ATHOS</p>
              <p>165 000 руб.</p>
            </div>
          ))}
        </div>
        
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={close}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2 style={{color: 'white'}}>Louis XVI ATHOS</h2>
            <h4 style={{color: 'white'}}>165 000 руб.</h4>
            <p style={{color: 'white'}}>ПАтхади народ как на свои агарот часи купи счасливим ходи а главнои цена не кусаестся</p>
            <img src={ChasiSix}/>
          </div>
        </div>
      )}
      
    </div>
  );
}
