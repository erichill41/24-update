import './index.scss';
import logo from '../../assets/images/logo-s.png';

const Home = () => {


  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>Hi, <br /> I'm Eric, a  
        <img src={logo} alt='developer' />
        oftware Engineer
        </h1>
      </div>
    </div>

  );
};

export default Home;