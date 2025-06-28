import * as Styles from './AboutStyles';
import logoText from '../../assets/logoText2.png';
import logoText2 from '../../assets/logoText.png';

const About = () => {
  return (
    <Styles.AboutContainer>
      <Styles.AboutTitleBox>
        <Styles.AboutTitle>ABOUT US</Styles.AboutTitle>
        <Styles.AboutTitleBoxSubtitle>
          <span>
            A Quick Bit About
            <img src={logoText} alt='' />
            (PVCL)
          </span>
        </Styles.AboutTitleBoxSubtitle>
        <Styles.AboutTitleBoxSubtitle primary='true'>
          <span>
            Founded by Festus Okorie in 2000,
            <img src={logoText} alt='' />
            is registered with the Corporate Affairs Commission in Nigeria; as
            though with assemblage of professionals in marketing and media,
            transport and logistics, web design and development, computer
            programming, printing and publishing, news gathering and reporting,
            Mentoring and human development, it is our responsibility to make
            sure our decisions are informed by data and not a guessing game, and
            that we never lose sight of the culture and values that got us here.
          </span>
        </Styles.AboutTitleBoxSubtitle>
      </Styles.AboutTitleBox>
      <Styles.AboutCompanyProfile>
        <Styles.AboutCompanyProfileTitle>
          Company profile
        </Styles.AboutCompanyProfileTitle>
        <p>
          Founded by Festus Okorie in 2000,
          <span>
            <img src={logoText2} alt='' />
          </span>
          <span>
            Communications Limited has continued to grow and prosper under our
            organization’s uniqueness, streamlined process and tools, focus on
            client and employee happiness, and our desire to help businesses,
            institutions and organizations develop a plan that crushes their
            marketing, sales and corporate goals.Registered with the Corporate
            Affairs Commission in Nigeria, we are about people first. We strive
            to build long-term, trusting relationships with those we work for,
            with the goal of delivering excellent services that constantly drive
            and improve results
          </span>
          .
        </p>
        <p>
          Our team of professionals are driven to educate, collaborate, and
          deliver on the value that we promise. As though our assemblage of
          professionals in marketing and media, news gathering and reporting,
          transport and logistics, web design and development; printing and
          publishing; Counselling and Human Development, it is our
          responsibility to make sure our decisions are informed by data and not
          a guessing game, and that we never lose sight of the culture and
          values that got us here.
        </p>
        <p>
          <span>
            <img src={logoText2} alt='' />
          </span>
          surpasses our competitors in meeting the standard of what our business
          consists of in the industry today. We are proud of what our clientele
          have accomplished and ensure that their desires that conform with
          statutory guidelines and those of their organizations and institutions
          are met. We work in alliance with other modal services that provide
          that first impression that will set our customers ahead of their
          competitors.
        </p>
        <p>
          <span>
            <img src={logoText2} alt='' />
          </span>
          works with small to mid-sized businesses providing the marketing
          strategy, education, technical expertise, and capabilities you need to
          acquire new customers. Our data-driven methods make achieving
          aggressive marketing goals easy – and we’ll make you look like a rock
          star.
        </p>
        <p>
          Our tradition is to responsibly mobilize and utilize human, financial
          and modern technological resources to identify the truth and provide
          solutions to prevailing human, media, transportation and logistical
          problems confronting public and private institutions and their
          customers without under mining comfort and aspirations. In our
          tradition of honesty we provide services that add value to your money.
        </p>
      </Styles.AboutCompanyProfile>
      <Styles.AboutListsContainer>
        <Styles.AboutListsItem>
          <Styles.AboutCompanyProfileTitle primary='true'>
            Our Vision
          </Styles.AboutCompanyProfileTitle>
          <p>
            Our Vision is to provide world class services to the next generation
            of our global community with added values that exceed their
            expectation.
          </p>
        </Styles.AboutListsItem>
        <Styles.AboutListsItem>
          <Styles.AboutCompanyProfileTitle primary='true'>
            Our Mission
          </Styles.AboutCompanyProfileTitle>
          <p>
            <span> Our Mission</span> is to Capture Today’s Events For
            Tomorrow’s History paying attention to details.
          </p>
        </Styles.AboutListsItem>
        <Styles.AboutListsItem>
          <Styles.AboutCompanyProfileTitle primary='true'>
            Our Purpose
          </Styles.AboutCompanyProfileTitle>
          <p>
            To help people and their organizations succeed. Applying what we do
            best to help companies reach their goals is what drives us. When we
            can help someone make their organization successful, we&apos;re
            successful.
          </p>
        </Styles.AboutListsItem>
        <Styles.AboutListsItem>
          <Styles.AboutCompanyProfileTitle primary='true'>
            Our Philosophy
          </Styles.AboutCompanyProfileTitle>
          <p>
            Our <span>business philosophy</span> is carefully built around what
            we love our tradition woven to responsibly mobilize and utilize
            human and modern technological resources to identify the truth in
            any given business task and provide solution to our customers’ needs
          </p>
        </Styles.AboutListsItem>
      </Styles.AboutListsContainer>
    </Styles.AboutContainer>
  );
};

export default About;
