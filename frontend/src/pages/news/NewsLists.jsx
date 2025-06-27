import { useState } from 'react';
import NewsCard from './NewsCard';
import { CloseBackground } from '../../components/CloseBackground';
import NewsModel from '../../components/newsModel/NewsModel';

const NewsLists = ({ data }) => {
  const [openModel, setOpenModel] = useState(false);
  const toggleOpenModel = () => {
    setOpenModel((prev) => !prev);
    window.scrollTo({
      top: '100px',
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <NewsCard data={data} open={toggleOpenModel} />
      {openModel && <CloseBackground close={toggleOpenModel} />}
      {openModel && <NewsModel data={data} />}
    </>
  );
};

export default NewsLists;
