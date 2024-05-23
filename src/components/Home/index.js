import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.scss';
import logoTitle from '../../assets/images/e-logo.png';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['r', 'i', 'c', ' ', 'H', 'i', 'l', 'l', '!'];
  const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
          <span className={letterClass}>H</span> 
          <span className={`${letterClass} _12`}>i,</span> 
          <br />
          <span className={`${letterClass} _13`}>I</span> 
          <span className={`${letterClass} _14`}>'m</span> 
          <img src={logoTitle} alt='developer' />
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Engineer | Athlete | Teammate</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  );
};

export default Home;