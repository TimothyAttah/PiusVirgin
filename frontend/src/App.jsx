import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import News from './pages/news/News';
import Web from './pages/web/Web';
import HealthManagement from './pages/health/Health';
import HumanRelations from './pages/humanRelation/HumanRelation';
import Art from './pages/art/Art';
import ToursAndExcursion from './pages/excursion/Excursion';
import Media from './pages/media/Media';
import Transportation from './pages/transportation/Transportation';
import About from './pages/about/NewAbout';
import Contact from './pages/contact/NewContact';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services/transportation' element={<Transportation />} />
          <Route path='/services/media' element={<Media />} />
          <Route
            path='/services/tours_excursion'
            element={<ToursAndExcursion />}
          />
          <Route path='/services/art_gallery' element={<Art />} />
          <Route
            path='/services/human_relation_development'
            element={<HumanRelations />}
          />
          <Route
            path='/services/health_management'
            element={<HealthManagement />}
          />
          <Route path='/services/web_development' element={<Web />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
