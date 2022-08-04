import { useState } from 'react';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';

export default function Container() {
  const [isActive, setIsActive] = useState(false);

  const handleClick: any = (e) => {
    e.preventDefault();
    setIsActive((current) => !current);
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${image1})` }}
        className={isActive ? 'cards active' : 'cards'}
        onClick={handleClick}
      >
        <h3>Travel the world!</h3>
      </div>
      <div
        style={{ backgroundImage: `url(${image2})` }}
        className={isActive ? 'cards active' : 'cards'}
        onClick={handleClick}
      >
        <h3>Travel the world!</h3>
      </div>
      <div
        style={{ backgroundImage: `url(${image3})` }}
        className={isActive ? 'cards active' : 'cards'}
        onClick={handleClick}
      >
        <h3>Travel the world!</h3>
      </div>
      <div
        style={{ backgroundImage: `url(${image4})` }}
        className={isActive ? 'cards active' : 'cards'}
        onClick={handleClick}
      >
        <h3>Travel the world!</h3>
      </div>
      <div
        style={{ backgroundImage: `url(${image5})` }}
        className={isActive ? 'cards active' : 'cards'}
        onClick={handleClick}
      >
        <h3>Travel the world!</h3>
      </div>
    </>
  );
}
