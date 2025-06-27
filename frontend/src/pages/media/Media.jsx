import React from 'react';
import logoText from '../../assets/logoText.png';
import * as Styles from './MediaStyles';

const Media = () => {
  return (
    <Styles.MediaContainer>
      <Styles.MediaTitle>Media</Styles.MediaTitle>
      <Styles.MediaSubTitle>
        <span>
          <img src={logoText} alt='' />
        </span>
        NEWS <span>Online</span>
      </Styles.MediaSubTitle>
      <Styles.MediaDescWrapper>
        <p>
          Our team of professionals are driven to educate, inform, entertain,
          collaborate, and deliver on the value that we promise: Capturing
          Today’s Events For Tomorrow’s History. It is our responsibility to
          make sure our editorial decisions are informed by data and not a
          guessing game, and that we never lose sight of the culture and values
          that got us here.
        </p>
        <ul>
          <li>Blogging</li>
          <li>Advertising: above and below the line</li>
          <li>Public relations</li>
        </ul>
      </Styles.MediaDescWrapper>
      <Styles.MediaInfoContainer>
        <Styles.MediaInfoTile>
          Advanced Writing, Printing and Publishing
        </Styles.MediaInfoTile>
        <p>
          With added Values in journalism, by undertaking to write and edit,
          print and publish we surpass our competitors in meeting the standard
          of our publications in the industry today. As a business enterprise,
          we provide institutions, deserving establishments and private sectors
          with
        </p>
        <ul>
          <li>Magazines, books, journals, newspapers, newsletters</li>
          <li>company profile, proposals, jotters, calendars and almanacs</li>
          <li>
            S.A.V, flag, mesh, sticker, poster, bill board, vehicle branding
            Banners, flyers, cards
          </li>
          <li>Computer animations for advertising.</li>
        </ul>
      </Styles.MediaInfoContainer>
    </Styles.MediaContainer>
  );
};

export default Media;
