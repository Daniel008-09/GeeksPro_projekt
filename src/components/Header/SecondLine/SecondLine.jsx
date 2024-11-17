import './SecondLine.scss';
import Cart from '../../../images/cart.png';
import Lupa from '../../../images/lupa.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export default function SecondLine() {
  return (
    <div className='body'>
      <p className='porten'>PORTEN</p>
        <div className='like'>
          
        <p className='box'>ПОНРАВИЛОСЬ</p>
        
        </div>

      <div className='line-container'>
       
        <p className='line' id='cab'>ЛИЧНЫЙ КАБИНЕТ</p>
  
        
      
        <p className='line' id='set'>НАСТРОЙКИ</p>
        
        
      </div>
      <a href="">
      <img src={Cart} alt="" className='cart'/>
      </a>
      <a href="">
      <img src={Lupa} alt=""  className='lupa'/>
      </a>
    </div>
  )
}


