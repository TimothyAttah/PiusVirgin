import * as Styles from './NewAboutStyles';
import logoText from '../../assets/logoText2.png';
import FadeIn2 from '../../components/FadeIn2';
import FadeIn from '../../components/FadeIn2';
import WhatWeDo from './modules/WhatWeDo';
import AboutHistory from './modules/AboutHistory';

const About = () => {
  return (
    <Styles.AboutContainer>
      <FadeIn direction='down' delay={0.4}>
        <Styles.AboutHeroSection>
          <FadeIn2 direction='up' delay={0.2}>
            <Styles.AboutHeroSectionInfo>
              <h2>About us</h2>
              <p>
                Founded by Festus Okorie in 2000,
                <span>
                  <img src={logoText} alt='' />
                </span>
                is registered with the Corporate Affairs Commission in Nigeria;
                as though with assemblage of professionals in marketing and
                media, transport and logistics, web design and development,
                computer programming, printing and publishing, news gathering
                and reporting, Mentoring and human development, it is our
                responsibility to make sure our decisions are informed by data
                and not a guessing game, and that we never lose sight of the
                culture and values that got us here.
              </p>
            </Styles.AboutHeroSectionInfo>
          </FadeIn2>
        </Styles.AboutHeroSection>
      </FadeIn>
      <WhatWeDo />
      <AboutHistory />
    </Styles.AboutContainer>
  );
};

export default About;
