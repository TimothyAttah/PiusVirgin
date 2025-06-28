
import * as Styles from '../NewAboutStyles';
import FadeIn2 from '../../../components/FadeIn2';
import {
  BsFillGearFill,
  BsLightbulbFill,
  BsGlobeEuropeAfrica,
  BsPin,
} from 'react-icons/bs';

const WhatWeDo = () => {
  return (
    <Styles.AboutWhatWeDo>
      <Styles.AboutWhatWeDoTitle>
        <FadeIn2 direction='down' delay={0.2}>
          <small>about us</small>
        </FadeIn2>
        <FadeIn2 direction='down' delay={0.3}>
          <h2>What we do</h2>
        </FadeIn2>
      </Styles.AboutWhatWeDoTitle>
      <Styles.AboutWhatWeDoItemWrapper>
        <FadeIn2 direction='left' delay={0.2}>
          <Styles.AboutWhatWeDoItem>
            <div>
              <BsGlobeEuropeAfrica />
            </div>
            <div>
              <h4>Our vision</h4>
              <p>
                Our Vision is to provide world class services to the next
                generation of our global community with added values that exceed
                their expectation.
              </p>
            </div>
          </Styles.AboutWhatWeDoItem>
        </FadeIn2>
        <FadeIn2 direction='left' delay={0.4}>
          <Styles.AboutWhatWeDoItem>
            <div>
              <BsPin />
            </div>
            <div>
              <h4>Our mission</h4>
              <p>
                <span>Our Mission </span> is to Capture Today’s Events For
                Tomorrow’s History paying attention to details.
              </p>
            </div>
          </Styles.AboutWhatWeDoItem>
        </FadeIn2>
        <FadeIn2 direction='left' delay={0.6}>
          <Styles.AboutWhatWeDoItem>
            <div>
              <BsLightbulbFill />
            </div>
            <div>
              <h4>Our purpose</h4>
              <p>
                To help people and their organizations succeed. Applying what we
                do best to help companies reach their goals is what drives us.
                When we can help someone make their organization successful,
                we&apos;re successful.
              </p>
            </div>
          </Styles.AboutWhatWeDoItem>
        </FadeIn2>
        <FadeIn2 direction='left' delay={0.8}>
          <Styles.AboutWhatWeDoItem>
            <div>
              <BsFillGearFill />
            </div>
            <div>
              <h4>Our Philosophy</h4>
              <p>
                Our <span>business philosophy</span> is carefully built around
                what we love our tradition woven to responsibly mobilize and
                utilize human and modern technological resources to identify the
                truth in any given business task and provide solution to our
                customers’ needs
              </p>
            </div>
          </Styles.AboutWhatWeDoItem>
        </FadeIn2>
      </Styles.AboutWhatWeDoItemWrapper>
    </Styles.AboutWhatWeDo>
  );
}

export default WhatWeDo
