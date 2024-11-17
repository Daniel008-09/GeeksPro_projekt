import './FirstLine.scss'
import Coco from '../../../images/coco.png';

export default function FirstLine() {
  return (
    <div className='body1'>
      <p className='brend'>НАШИ БРЕНДЫ</p>
      <div className='lineQQ'></div>
      <div className='imageRow1'>
        <img src={Coco} className='coco' alt="бренд" />
        <img src={Coco} className='coco' alt="бренд" />
        <img src={Coco} className='coco' alt="бренд" />
        <img src={Coco} className='coco' alt="бренд" />
      </div>
    </div>
  );
}
