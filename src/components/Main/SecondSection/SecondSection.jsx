import './SecondSection.scss'
import Chasi from '../../../images/chasi.png';
import Korzina from '../../../images/korzina.png';

import React, { useState, useEffect } from 'react';

export default function SecondSection() {

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
    <div className='SSbody'>
      <p className='Season'><h1>СЕЗОН 2020/21</h1></p>
        <div className='SSline'></div>
          <div className='LineImg'>
            <div className='box1'>
              <div className='XXL'onClick={open} style={{cursor: 'pointer'}}>
              <img src={Chasi} alt="" className='chasi'/>
              </div>
                <p>Louis XVI ATHOS</p>
                <p>165 000 руб.</p>
              </div>


            <div className='box1'>
              <div className='XXL'onClick={open} style={{cursor: 'pointer'}}>
              <img src={Chasi} alt="" className='chasi'/>
              </div>
            <p>Louis XVI ATHOS</p>
            <p>165 000 руб.</p>
              </div>


            <div className='box1'>
              <div className='XXL' onClick={open} style={{cursor: 'pointer'}}>
              <img src={Chasi} alt="" className='chasi'/>
              </div>
              <p>Louis XVI ATHOS</p>
              <p>165 000 руб.</p>
              </div>


          </div>
          {isModalOpen && (
            
        <div className="modal-overlay" onClick={close}>
          <img src={Korzina} alt="" className='korzina'/>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>Louis XVI ATHOS</h2>
            <h4 style={{color: 'white'}}>165 000 руб.</h4>
            <p style={{color: 'white'}}>ПАтхади народ как на свои агарот часи купи счасливим ходи а главнои цена не кусаестся</p>
            <img src={Chasi} alt="" className='chasi'/>
          </div>
        </div>
      )}
      
    </div>
  )
}
