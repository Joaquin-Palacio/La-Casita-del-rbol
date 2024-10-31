import instagramLogo from '../../assets/instagram.jpg';
import whatsappLogo from '../../assets/whatsapp.jpg';
import './Contact.css';

export const Contact = () => {
  return (
    <div className="contact">
      <h1>Contacto</h1>
      <p>Puedes contactarnos a través de nuestras redes sociales:</p>
      <div className="contact-links">
        <a
          href="https://www.instagram.com/lacasitadelarbol_juguetes/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link instagram"
        >
          <img src={instagramLogo} alt="Instagram" className="social-logo" />{' '}
          Instagram
        </a>
        <a
          href="https://wa.me/3537608645"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link whatsapp"
        >
          <img src={whatsappLogo} alt="WhatsApp" className="social-logo" />{' '}
          WhatsApp
        </a>
      </div>
    </div>
  );
};
