import '../components/styles/home.css';

export const Route = createFileRoute({
  component: Index,
});

function Index() {
  return (
    <>
      <div className='home-container'>
        <div className='company-header'>
          <div className='company-logo'>IT</div>
          <div>
            <div className='company-title'>BluePeak Solutions</div>
            <div className='company-tagline'>
              Empowering businesses with innovative IT solutions since 2010.
            </div>
          </div>
        </div>

        <div className='about-section'>
          <div className='section-title'>About Us</div>
          <div>
            BluePeak Solutions is a leading IT company specializing in
            delivering cutting-edge technology services to businesses worldwide.
            With a passionate team of experts, we help organizations transform
            digitally, optimize operations, and achieve sustainable growth. Our
            commitment to quality, innovation, and customer satisfaction sets us
            apart in the industry.
          </div>
        </div>

        <div>
          <div className='section-title'>Our Services</div>
          <div className='services-list'>
            <div className='service-card'>
              <div className='service-title'>Custom Software Development</div>
              <div className='service-desc'>
                Tailored web, mobile, and desktop applications built to solve
                your unique business challenges.
              </div>
            </div>
            <div className='service-card'>
              <div className='service-title'>Cloud Solutions</div>
              <div className='service-desc'>
                Migration, deployment, and management of scalable cloud
                infrastructure on AWS, Azure, and GCP.
              </div>
            </div>
            <div className='service-card'>
              <div className='service-title'>IT Consulting</div>
              <div className='service-desc'>
                Strategic technology consulting to align IT initiatives with
                your business goals and maximize ROI.
              </div>
            </div>
            <div className='service-card'>
              <div className='service-title'>Cybersecurity Services</div>
              <div className='service-desc'>
                Comprehensive security assessments, threat monitoring, and
                incident response to protect your assets.
              </div>
            </div>
            <div className='service-card'>
              <div className='service-title'>UI/UX Design</div>
              <div className='service-desc'>
                Engaging and user-friendly interfaces designed to enhance
                customer experience and drive engagement.
              </div>
            </div>
            <div className='service-card'>
              <div className='service-title'>Managed IT Services</div>
              <div className='service-desc'>
                Proactive IT support, maintenance, and monitoring to keep your
                business running smoothly.
              </div>
            </div>
          </div>
        </div>

        <div className='contact-section'>
          <div className='section-title'>Contact Us</div>
          <ul className='contact-list'>
            <li>
              <strong>Email:</strong> contact@bluepeak.com
            </li>
            <li>
              <strong>Phone:</strong> +1 (555) 123-4567
            </li>
            <li>
              <strong>Address:</strong> 123 Innovation Drive, Tech City, USA
            </li>
            <li>
              <strong>Website:</strong>{' '}
              <a
                href='https://bluepeak.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                bluepeak.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
