import { useState } from 'react';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';

export default function Container() {
  const [active, setActive] = useState({
    active: null,
    images: [image1, image2, image3, image4, image5]
  });
  
  const handleClick = (index) => {
    setActive({...active, active: active.images[index]});
  };

  function activeToggle(index) {
    if (active.images[index] === active.active) {
      return 'cards active';
    } else {
      return 'cards'
    }
  }


  return (
    <>
      {active.images.map((image, index) => (
        <div
          style={{ backgroundImage: `url(${image})` }}
          key={index}
          className={activeToggle(index)}
          onClick={() => handleClick(index)}
        >
          <h3>Travel the world!</h3>
        </div>
      ))}
    </>
  );
}
