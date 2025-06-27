import React from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './HomeNewsStyles';
import road5 from '../../../assets/road5.jpg';
import road1 from '../../../assets/road1.jpg';
import road2 from '../../../assets/road2.jpg';
import road3 from '../../../assets/road3.jpg';
import road4 from '../../../assets/road4.jpg';
import road6 from '../../../assets/road6.jpg';
import { homeNewsData } from './homeNewsData';
import HomeNewsLists from './homeNewsLists/HomeNewsLists';

const HomeNews = () => {
  return (
    <Styles.HomeNewsContainer>
      <Styles.HomeNewsTitle>More News</Styles.HomeNewsTitle>
      <Styles.HomeNewsCardWrapper>
        {homeNewsData.map((news, i) => (
          <HomeNewsLists key={i} data={news} />
        ))}
      </Styles.HomeNewsCardWrapper>
    </Styles.HomeNewsContainer>
  );
};

export default HomeNews;
