import './ThirdSection.scss';
import Sidit from '../../../images/sidit.png';


export default function ThirdSection() {
  return (
    <div className="VVbody">
      <img src={Sidit} alt="" className="sidit" />
      
   
      <div className="text-container">
     
        <h1>Новая коллекция</h1>
        
        <div className="CCline"></div>
      </div>
      
    
      <div className="catalog">
        <p>КАТАЛОГ</p>
      </div>
    </div>
  );
}
