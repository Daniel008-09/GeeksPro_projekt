import './SecondLine.scss';
import Phon from '../../../images/phon.png';

export default function SecondLine() {
  return (
    <div className='bu'>
      <img src={Phon} alt="" className='phon' />
      <div className='param'>
        <h1 className='w1'>О МАГАЗИНЕ</h1>
        <h1 className='w2'>КАТЕГОРИИ</h1>
        <h1 className='w3' >РАССЫЛКИ</h1>
      </div>

      <div className="lorems">
        <p className='white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
      </div>

      <div className="boxx">
        <a href="">
        <div className="time">
          <p>
        часы
          </p>
          </div>
          </a>

          <a href="">
        <div className="braslet">
          <  p>
        браслет
          </p></div>
          </a>

          <a href="">
        <div className="remen">
          <p>
        ремень
          </p></div>
          </a>

        <a href="">
        <div className="jeweler">
          <p>
        ювелирные изделия
          </p></div>
          </a>

          <a href="">
        <div className="zaponki">
          <p>
          запонки
          </p></div>
          </a>
      </div>

      <div className="lorr">
        <p className='re'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.
        </p>
      </div>
    </div>
  );
}
