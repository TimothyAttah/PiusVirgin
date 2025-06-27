import React from 'react';
import * as Styles from './HomeNewsCardStyles';
import { Link } from 'react-router-dom';

const HomeNewsCard = ({ data, open }) => {
  return (
    <Link to='/' onClick={open}>
      <Styles.HomeNewsCard>
        <Styles.HomeNewsCardTitle>
          <h4>{data?.newsTitle}</h4>
          <p>{data?.newsSubtitle}</p>
        </Styles.HomeNewsCardTitle>

        <Styles.HomeNewsCardImg>
          <img src={data?.newsPics[1]?.pic} alt='' />
        </Styles.HomeNewsCardImg>
        <Styles.HomeNewsCardOptions>
          <p>{data?.newsDate}</p>
          <button>read more</button>
        </Styles.HomeNewsCardOptions>
      </Styles.HomeNewsCard>
    </Link>
  );
};

export default HomeNewsCard;
