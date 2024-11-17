import './TopLine.scss';
import phoneIcon from '../../../images/phone.png';
import phoneIcon1 from '../../../images/phone1.png';
import React, { useState, useEffect } from 'react';




export default function TopLine() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };  

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };
  useEffect(() => {
    if (isModalOpen2) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen2]);

  return (
    <div className='header-container'>   
     <img src={phoneIcon} alt="Телефон" className='imgHeader'/> 
    

     <p className='Ftext'>8 (812) 123-45-67 | Работаем 7 дней в неделю | 9:00 — 18:00 </p>
     <img src={phoneIcon1} alt="Телефон" className='imgHeader1'/>
    
     <p onClick={openModal} style={{ cursor: 'pointer', }} className='si'>
        войти/регистрация
      </p>
    
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>Добро пожаловать. удачной регистрации :D</h2>
            <input type="text" placeholder='ваш email:' className='input'/>
            <input type="password" placeholder='ваш пароль'className='input2'/>
            <button className='button' onClick={openModal2 }>войти</button>
            <button className='button'>регистрация</button>
            
          </div>
        </div>
      )}

{isModalOpen2 && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{color: 'white'}}>Добро пожаловать. удачной регистрации :D</h2>
            <input type="text" placeholder='ваш email:' className='input'/>
            <input type="password" placeholder='ваш пароль'className='input2'/>
            <button className='button'>войти</button>
            <button className='button' onClick={closeModal2}>close</button>
            
            
          </div>
        </div>
      )}
    </div>

  )
}



