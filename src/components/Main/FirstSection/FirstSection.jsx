import './FirstSection.scss'
import Costum from '../../../images/costum.png';

export default function FirstSection() {
  return (
    <div>
      <img src={Costum} className='costum'/>
      <div className='Wbox'>
          <p><h1 className='Wporten'>PORTEN</h1></p>
          <div className='Wline'></div>
          <p><h2 className='Wpiter'>санкт-петербург</h2></p>
      </div>
      <p className='Wlorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
    </div>
  )
}
