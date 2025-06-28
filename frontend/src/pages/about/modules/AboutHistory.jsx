
import * as Styles from '../NewAboutStyles'
import FadeIn2 from '../../../components/FadeIn2';
import logoText1 from '../../../assets/logoText.png';
import piusImg from '../../../assets/allAds.jpeg';



const AboutHistory = () => {
  return (
    <Styles.AboutHistoryWrapper>
      <FadeIn2 direction='down' delay={0.4}>
        <h2>Our History</h2>
      </FadeIn2>
      <Styles.AboutHistory>
        <FadeIn2 direction='right' delay={0.4}>
          <Styles.AboutHistoryPic>
            <img src={piusImg} alt='' />
          </Styles.AboutHistoryPic>
        </FadeIn2>
        <FadeIn2 direction='left' delay={0.4}>
          <Styles.AboutHistoryInfo>
            <p>
              Founded by Festus Okorie in 2000,{' '}
              <span>
                <img src={logoText1} alt='' />
              </span>
              Communications Limited has continued to grow and prosper under our
              organization’s uniqueness, streamlined process and tools, focus on
              client and employee happiness, and our desire to help businesses,
              institutions and organizations develop a plan that crushes their
              marketing, sales and corporate goals.Registered with the Corporate
              Affairs Commission in Nigeria, we are about people first. We
              strive to build long-term, trusting relationships with those we
              work for, with the goal of delivering excellent services that
              constantly drive and improve results.
            </p>
            <p>
              Our team of professionals are driven to educate, collaborate, and
              deliver on the value that we promise. As though our assemblage of
              professionals in marketing and media, news gathering and
              reporting, transport and logistics, web design and development;
              printing and publishing; Counselling and Human Development, it is
              our responsibility to make sure our decisions are informed by data
              and not a guessing game, and that we never lose sight of the
              culture and values that got us here.
            </p>
            <p>
              <span>
                <img src={logoText1} alt='' />
              </span>
              surpasses our competitors in meeting the standard of what our
              business consists of in the industry today. We are proud of what
              our clientele have accomplished and ensure that their desires that
              conform with statutory guidelines and those of their organizations
              and institutions are met. We work in alliance with other modal
              services that provide that first impression that will set our
              customers ahead of their competitors.
            </p>
            <p>
              <span>
                <img src={logoText1} alt='' />
              </span>
              works with small to mid-sized businesses providing the marketing
              strategy, education, technical expertise, and capabilities you
              need to acquire new customers. Our data-driven methods make
              achieving aggressive marketing goals easy – and we’ll make you
              look like a rock star.
            </p>
            <p>
              Our tradition is to responsibly mobilize and utilize human,
              financial and modern technological resources to identify the truth
              and provide solutions to prevailing human, media, transportation
              and logistical problems confronting public and private
              institutions and their customers without under mining comfort and
              aspirations. In our tradition of honesty we provide services that
              add value to your money.
            </p>
          </Styles.AboutHistoryInfo>
        </FadeIn2>
      </Styles.AboutHistory>
    </Styles.AboutHistoryWrapper>
  );
}

export default AboutHistory
