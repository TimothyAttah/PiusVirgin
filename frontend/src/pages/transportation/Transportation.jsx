import React from 'react';
import * as Styles from './TransportationStyles';
import logoText from '../../assets/logoText.png';

const Transportation = () => {
  return (
    <Styles.RailContainer>
      <Styles.RailTitle>RAIL</Styles.RailTitle>
      <Styles.RailDescWrapper>
        <p>
          When it comes to bringing alive <span>for instance</span>, the
          heritage that defines Nigeria, the <span>Nigerian Railways</span>{' '}
          established in 1898 comes to mind.
        </p>
        <p>
          The exotic study tour by train is arranged by{' '}
          <span>
            <img src={logoText} alt='' />
          </span>
          taking the advantage of the new fully air conditioned Diesel Multiple
          Unit and essential facilities provided by Nigerian Railway Corporation
          to meet the needs of corporate organizations, schools, groups,
          agencies etc undertaken in a spacious, neat and fun-filled
          environment.
        </p>
        <p>
          <span>Safety and security</span> are guaranteed hence all necessary
          operatives including the Nigerian Police Force are involved.
        </p>
      </Styles.RailDescWrapper>
      <Styles.RailRoutesWrapper>
        <Styles.RailTitle primary='true'>Available Routes</Styles.RailTitle>
        <p>
          <span>LAGOS DISTRICT:</span> Iddo Terminus / Apapa – Agbado –
          Abeokuta/Olumo Rock
        </p>
        <p>
          (Iddo-Ebute Metta- Ebute Metta Junction – Yaba – Mushin – Oshodi –
          Shogunle – Ikeja – Agege – Iju – Oposuru – Agbado- Ijoko)
        </p>
        <p>
          <span>NORTHERN DISTRICT:</span> Abuja – Kaduna – Abuja
        </p>
        <p>
          <span>EASTERN DISTRICT:</span> Port Harcourt - Aba – Umuahia - Enugu
        </p>
        <p>NRC Lagos Terminus railway station</p>
      </Styles.RailRoutesWrapper>
      <Styles.RailListContainer>
        <h4>Overview</h4>
        <p>
          The station, located in front of Carter Bridge and by the Lagos
          Lagoon, has a large two floor Station building | terminal building
          Panoramio title = Lagos Terminus. It counts also a pair of train shed
          one located just outside the station platforms and a larger one
          located 2 km north, nearby Lagos Yaba station.
        </p>
        <p>
          Lagos Terminus, also known as Lagos Iddo, is the main railway station
          of the city of Lagos. The rail terminus is located on Iddo Island,
          nearby Lagos Island and in the middle of the city.
        </p>
        <p>
          <span>The Legacy</span>, Jackal House – the Nigerian Railway Museum
          forms part of life time experience which our guided tour provides.
        </p>
        <p>
          The line serving Lagos Terminus, as well as the entire national
          network, is not electrified; and the track gauge is Narrow gauge
          railway| narrow (3 ft 6 in gauge railways|1,067&nbsp;mm).
        </p>
      </Styles.RailListContainer>
      <Styles.RailListContainer>
        <h4>Overview</h4>
        <p>
          The station, located in front of Carter Bridge and by the Lagos
          Lagoon, has a large two floor terminal building. It counts also a pair
          of train sheds: one located just outside the station platforms and a
          larger one located 2 km north, nearby Lagos Yaba station.
        </p>
        <h4>Services</h4>
        <p>
          Lagos station is the terminus of commuter and long distance trains, as
          for example the flagship express train to Kano, in north of Nigeria
          and 1,126 far from Lagos. A standard gauge high-speed line, connecting
          Lagos to Abuja, has been planned in early 2010s, as part of the
          development plan of the Nigerian railways.
        </p>
      </Styles.RailListContainer>
    </Styles.RailContainer>
  );
};

export default Transportation;
