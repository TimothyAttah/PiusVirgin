import Slider from '../../components/slider/Slider';
import {Link} from 'react-router-dom'
import * as Styles from './HomeStyles';
import newsLogo from '../../assets/newsLogo1.jpg'
import tinubu1 from '../../assets/tinubu1.jpg';
import tinubu2 from '../../assets/tinubu2.jpg';
import tinubu3 from '../../assets/tinubu3.jpg';
import HomeNews from './homeNews/HomeNews';


const Home = () => {
  return (
    <Styles.HomeContainer>
      <Styles.HomeWrapper>
        <Styles.HomeSliderContainer>
          <Slider />
        </Styles.HomeSliderContainer>
        <Styles.HomeContentContainer>
          <Styles.NewsLogoBox>
            <img src={newsLogo} alt='' />
          </Styles.NewsLogoBox>
          <h2>President Tinubu in the vatican</h2>
          <p>
            Upon my arrival in Rome ahead of the solemn Mass marking the
            begining of the Pontificate of His Holiness Pope Leo XIV, I was
            warmly received and graciously hosted to dinner by His Eminence
            Cardinal Pietro Parolin, the Secretary of State to the Vatican.
          </p>
          <p>
            Our dialogue was marked by a spirit of fraternity and a shared
            vision for the future, focusing on common values such as peace,
            mutual respect, and global solidarity. I expressed Nigeria's deep
            appreciation for the Vatican's longstanding goodwill and reaffirmed
            our commitment to promoting interfaith dialogue, tolerance, and
            cooperation in an increasingly polarised world.
          </p>
          <p>
            As always, Nigeria remains a nation open to friendship, grounded in
            faith, and committed to building bridges of understanding across the
            world. Tinubu said.
          </p>
          <Styles.GridImageBox>
            <img
              src={tinubu1}
              alt=''
              className='image-grid-col-2 '
            />
            <img src={tinubu2} alt='' />
            <img src={tinubu3} alt='' />

          </Styles.GridImageBox>
        </Styles.HomeContentContainer>
      </Styles.HomeWrapper>
      <HomeNews />
    </Styles.HomeContainer>
  );
};

export default Home;
