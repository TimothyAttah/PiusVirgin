import React from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './NewsCardStyles'

const NewsCard = ({data, open}) => {
  return <div>
     <Link to='/news' onClick={open}>
          <Styles.NewsCard>
            <Styles.NewsCardTitle>
              <h4>{data?.newsTitle}</h4>
              <p>{data?.newsSubtitle}</p>
            </Styles.NewsCardTitle>

            <Styles.NewsCardImg>
              <img src={data?.newsPics[1]?.pic} alt='' />
            </Styles.NewsCardImg>
            <Styles.NewsCardOptions>
              <p>{data?.newsDate}</p>
              <button>read more</button>
            </Styles.NewsCardOptions>
          </Styles.NewsCard>
        </Link>
  </div>;
};

export default NewsCard;
