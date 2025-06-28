import * as Styles from './ContactStyles';

const Contact = () => {
  return (
    <Styles.ContactContainer>
      <Styles.ContactTitle>Contact</Styles.ContactTitle>
      <Styles.ContactInfoWrapper>
        <h4>
          Address:{' '}
          <span>68 Akintola Road, Railway Compound Ebute Metta, Lagos </span>
        </h4>
        <h4>Phone numbers : 08052066458 08093140427</h4>
        <h4>Email: info@piusvirgin.com / piusvirgin@gmail.com</h4>
        <h4>WhatsApp 08123677838</h4>
      </Styles.ContactInfoWrapper>
    </Styles.ContactContainer>
  );
};

export default Contact;
