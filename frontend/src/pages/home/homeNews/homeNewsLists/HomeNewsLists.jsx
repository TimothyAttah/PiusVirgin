import React, { useState } from 'react';
import * as Styles from './HomeNewsListStyles';
import HomeNewsCard from '../homeNewsCard/HomeNewsCard';
import NewsModel from '../../../../components/newsModel/NewsModel';
import { CloseBackground } from '../../../../components/CloseBackground';

const HomeNewsLists = ({ data }) => {
  const [openModel, setOpenModel] = useState(false);
  const toggleOpenModel = () => {
    setOpenModel((prev) => !prev);
    window.scrollTo({
      top: '100px',
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <HomeNewsCard data={data} open={toggleOpenModel} />
      {openModel && <CloseBackground close={toggleOpenModel} />}
      {openModel && <NewsModel data={data} />}
    </>
  );
};

export default HomeNewsLists;
