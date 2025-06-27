import React from 'react';
import * as Styles from './NewsModelStyles';

const NewsModel = ({ data }) => {
  return (
    <Styles.NewsModelContainer>
      <Styles.NewsModelWrapper>
        <Styles.NewsModelPicsWrapper>
          <Styles.GridImageBox>
            {data.newsPics.map((pic) => (
              <img
                src={pic.pic}
                alt=''
                className={
                  pic.picPosition === 1
                    ? 'image-grid-col-2 image-grid-row-2'
                    : ''
                }
              />
            ))}
          </Styles.GridImageBox>
        </Styles.NewsModelPicsWrapper>
        <Styles.NewsModelDetailsWrapper>
          <Styles.NewsModelTitleBox>
            <h2>{data?.newsTitle}</h2>
            <h4>{data?.newsSubtitle}</h4>
          </Styles.NewsModelTitleBox>
          <Styles.NewsModelInfo>
            {data?.newsInfo.map((info) => (
              <p>{info}</p>
            ))}
          </Styles.NewsModelInfo>
        </Styles.NewsModelDetailsWrapper>
      </Styles.NewsModelWrapper>
    </Styles.NewsModelContainer>
  );
};

export default NewsModel;
