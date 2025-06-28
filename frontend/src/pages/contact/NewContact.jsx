import * as Styles from './NewContactStyles';
import {
  RiFacebookCircleFill,
  RiTwitterFill,
  RiInstagramFill,
} from 'react-icons/ri';

const Contact = () => {
  return (
    <Styles.ContactContainer>
      <Styles.ContactWrapper>
        {/* <p>learn more about the pius virgin company</p> */}
        {/* <h1>Contact Us</h1> */}
      </Styles.ContactWrapper>
      <Styles.ContactInfoContainer>
        <Styles.ContactInfo>
          <h3>Contact us</h3>
          <Styles.ContactInfoAddress>
            No 68 Akintola Road, <br /> Railway Compound <br /> Ebute Metta, Lagos, Nigeria.
          </Styles.ContactInfoAddress>
          {/* <Styles.ContactInfoEmail>info@gmail.com</Styles.ContactInfoEmail> */}

          <Styles.ContactInfoIconBox>
            <p>Follow us on:</p>
            <div>
              <RiFacebookCircleFill />
              <RiTwitterFill />
              <RiInstagramFill />
            </div>
          </Styles.ContactInfoIconBox>
          <Styles.ContactInfoNumberBox>
            <p>Call Us or Email At</p>
            <h4>Phone numbers : 08052066458 08093140427</h4>
            <h4>Email: info@piusvirgin.com / piusvirgin@gmail.com</h4>
            <h4>WhatsApp 08123677838</h4>
          </Styles.ContactInfoNumberBox>
        </Styles.ContactInfo>
        <Styles.ContactFormContainer>
          <h2>
            Need Help? <br />
            Get In Touch.
          </h2>

          <small>Kindly fill the form with correct information</small>
          <Styles.ContactForm>
            <div>
              <label htmlFor='fullName'>Full Name</label>
              <input type='text' />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='text' />
            </div>
            <div>
              <label htmlFor='subject'>Subject</label>
              <input type='text' />
            </div>
            <div>
              <label htmlFor='fullName'>Comment or Message</label>
              <textarea name='' />
            </div>
            <button>Send Message</button>
          </Styles.ContactForm>
        </Styles.ContactFormContainer>
      </Styles.ContactInfoContainer>
    </Styles.ContactContainer>
  );
};

export default Contact;
