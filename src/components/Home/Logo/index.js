import './index.scss';
import logo from '../../../assets/images/e-logo.png';

const Logo = () => {
  return (
    <div className='logo-container'>
      <img className='solid-logo' src={logo} alt='E' />
    </div>
  )
};

export default Logo;