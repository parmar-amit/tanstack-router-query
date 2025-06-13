import './about.css';
import { boardMembers, ceo } from './constant';

export default function AboutDetails() {
  return (
    <div className='about-container'>
      <div className='about-header'>
        <h1>About Us</h1>
        <p>
          At DigitalNova, we are passionate about building innovative digital
          solutions that empower businesses and individuals. Since our founding
          in 2015, we've grown into a diverse team of experts dedicated to
          excellence, creativity, and customer success.
        </p>
      </div>

      <div className='ceo-section'>
        <div className='ceo-card'>
          <img src={ceo.img} alt={ceo.name} />
          <div className='ceo-info'>
            <h2>
              {ceo.name} - {ceo.position}
            </h2>
            <p>{ceo.bio}</p>
          </div>
        </div>
      </div>

      <div className='board-section'>
        <h2>Board Members</h2>
        {boardMembers.map((member) => (
          <div className='board-card' key={member.name}>
            <img src={member.img} alt={member.name} />
            <div className='board-info'>
              <h3>
                {member.name} - {member.position}
              </h3>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
