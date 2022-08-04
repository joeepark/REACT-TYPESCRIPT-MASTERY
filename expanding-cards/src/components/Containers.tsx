import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';

export default function Container() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${image1})`}}
        className="containers active"
      ></div>
      <div
        style={{ backgroundImage: `url(${image2})` }}
        className="containers"
      ></div>
      <div
        style={{ backgroundImage: `url(${image3})` }}
        className="containers"
      ></div>
      <div
        style={{ backgroundImage: `url(${image4})` }}
        className="containers"
      ></div>
      <div
        style={{ backgroundImage: `url(${image5})` }}
        className="containers"
      ></div>
    </>
  );
}
