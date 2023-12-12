import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;

  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: -9rem;
    color: #FFFFFF;
    border-radius: 20px;
    justify-content: space-between;
    background: linear-gradient(to right, #e62657, #280028);
    position: relative;
  }

  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: rgba(240, 248, 255, 0.705);
    left: 48%;
    top: 40%;
    transform: translate(-50%, -50%);
  }

  .left {
    width: 100%;
    max-width: 500px;
  }

  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
  }

  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
      gap: 2rem;
    }

    .contactSection__wrapper::after {
      display: none;
    }

    .left,
    .right {
      max-width: 100%;
    }

    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }

  @media only screen and (max-width: 620px) {
    .contactSection__wrapper {
      gap: 1.5rem;
    }

    .left,
    .right {
      max-width: 100%;
    }

    .right {
      padding: 2rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .contactSection__wrapper {
      gap: 1rem;
    }

    .left,
    .right {
      max-width: 100%;
    }

    .right {
      padding: 3.5rem;
    }
  }

  @media only screen and (max-width: 428px) {
    .contactSection__wrapper {
      gap: 1rem;
    }

    .left,
    .right {
      max-width: 100%;
    }

    .right {
      padding: 1rem;
    }
  }
  @media only screen and (max-width: 390px) {
    .contactSection__wrapper {
      gap: 0.8rem;
    }

    .left,
    .right {
      max-width: 100%;
    }

    .right {
      padding: 0.8rem;
    }
  }

  @media only screen and (max-width: 375px) {
    .contactSection__wrapper {
      gap: 0.5rem;
    }

    .left,
    .right {
      max-width: 100%;
    }

    .right {
      padding: 0.5rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <>
    <ContactSectionStyle>
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem text="Av. Guadalupe Gonzalez 818-A, Primo Verdad, 20130 Aguascalientes, Ags." />
            <ContactInfoItem icon={<MdEmail />} text="administracion@pixeled.mx" />
            <ContactInfoItem icon={<MdLocalPhone />} text="449 476 7315" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
    </ContactSectionStyle>
    </>
  );
}
