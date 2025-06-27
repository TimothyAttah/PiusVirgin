import React from 'react';
import * as Styles from './NewsStyles';
import newsIcon from '../../assets/newsPicLogo1.jpg';
import { newsData } from './newsData';
import NewsLists from './NewsLists';

const News = () => {
  return (
    <Styles.NewsContainer>
      <Styles.NewsTitle>
        <h1>Welcome to PiusVirgin News</h1>

      </Styles.NewsTitle>
      <Styles.NewsListsWrapper>
        
        <Styles.NewsCardWrapper>
          {newsData.map((news, i) => (
            <NewsLists key={i} data={news} />
          ))}
        </Styles.NewsCardWrapper>
      </Styles.NewsListsWrapper>
    </Styles.NewsContainer>
  );
};

export default News;
