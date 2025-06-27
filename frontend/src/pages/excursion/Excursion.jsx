import React from 'react';
import * as Styles from './ExcursionStyles';
import logoText from '../../assets/logoText.png';

const ToursAndExcursion = () => {
  return (
    <Styles.ToursAndExcursionContainer>
      <Styles.ToursAndExcursionTitle>
        TOURS AND EXCURSION
      </Styles.ToursAndExcursionTitle>
      <Styles.ToursAndExcursionInfoWrapper>
        <p>
          Study Guide/Holiday Train Ride For Students, Families Business
          Executives
        </p>
        <p>
          <span>
            <img src={logoText} alt='' />
          </span>{' '}
          Communication Limited <span>(PVCL)</span> surpasses our competitors in
          meeting the standard of all that our business consists of in the
          industry today. We provide institutions, deserving establishments and
          private sectors with periodicalexcursions to historical attractive
          locations in grand style in choice transportation modules.
        </p>
      </Styles.ToursAndExcursionInfoWrapper>
    </Styles.ToursAndExcursionContainer>
  );
};

export default ToursAndExcursion;
