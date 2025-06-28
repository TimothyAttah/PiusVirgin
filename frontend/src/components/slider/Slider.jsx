/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import * as Styles from './SliderStyles';

const Slider = () => {
  useEffect(() => {
    const slides = document.querySelector('.slider-items')?.children;
    // const prev = document.querySelector('.prev');
    // const next = document.querySelector('.next');
    const totalSlides = slides?.length;
    let index = 0;
    const duration = 6000;

    const slide = (direction) => {
      progress();
      if (direction === 'next') {
        if (index === totalSlides - 1) {
          index = 0;
        } else {
          index++;
        }
      }

      if (direction === 'prev') {
        if (index === 0) {
          index = totalSlides - 1;
        } else {
          index--;
        }
      }

      clearInterval(timer);
      timer = setInterval(autoSlide, duration);

      for (let i = 0; i < slides?.length; i++) {
        slides[i].classList.remove('active');
      }

      slides[index].classList.add('active');
      // slideInfo();
    };

    // let width = 100 / totalSlides;

    // function slideInfo() {
    //   document.querySelector('.number').innerHTML =
    //     index + 1 + '/' + totalSlides;
    //   document.querySelector('.inner').style.width = (index + 1) * width + '%';
    // }

    function progress() {
      document.querySelector('.progress').innerHTML = '';

      let div = document.createElement('div');
      div.style.height = '5px';
      div.style.width = '0px';
      div.style.position = 'absolute';
      div.style.left = '0';
      div.style.top = '0';
      div.style.background = 'linear-gradient(139deg, blue 0%, red 90%)';
      div.style.zIndex = '22px';
      div.id = 'progress';
      div.style.animation = 'progress ' + duration / 1000 + 's linear';
      document.querySelector('.progress').appendChild(div);
    }

    function autoSlide() {
      slide('next');
    }

    let timer = setInterval(autoSlide, duration);

    // slideInfo();
    progress();
  }, []);
  return (
    <Styles.SliderContainer>
      <Styles.Slider className='slider'>
        <Styles.SliderItems className='slider-items'>
          <Styles.SliderItem className='item active'>
            <Styles.SliderImg
              className='img'
              slider='slider1'
            ></Styles.SliderImg>
            <Styles.SliderCaption className='caption'>
              <Styles.SliderCaptionText className='text'>
                <h4>🎒🌍 Excursion Alert! Adventure Meets Education! 🚌📚</h4>
                <p>
                  Get ready for an unforgettable journey as you takes learning
                  beyond the classroom!
                </p>
                <span>✨ Excursion 2025 is here, and it’s packed with:</span>
                <ul>
                  <li>✅ Eye-opening destinations</li>
                  <li>✅ Fun-filled activities</li>
                  <li>✅ Real-life learning experiences</li>
                  <li>✅ Bonding with classmates</li>
                  <li>✅ A break from routine!</li>
                </ul>
                <p>
                  This is more than just a trip — it's a chance to explore,
                  experience, and enjoy the world around us.
                </p>
                <p>Let’s learn, laugh, and make memories together! 🌟</p>
                <p>#Excursion2025 #LearningBeyondWalls #SchoolAdventure</p>
              </Styles.SliderCaptionText>
            </Styles.SliderCaption>
          </Styles.SliderItem>
          <Styles.SliderItem className='item'>
            <Styles.SliderImg
              className='img'
              slider='slider2'
            ></Styles.SliderImg>
            <Styles.SliderCaption className='caption'>
              <Styles.SliderCaptionText className='text'>
                {/* <h1>Headline Goes Here</h1> */}
                <h1>
                  We challenge injustice and create positive change for all
                  communities
                </h1>
              </Styles.SliderCaptionText>
            </Styles.SliderCaption>
          </Styles.SliderItem>
          <Styles.SliderItem className='item'>
            <Styles.SliderImg
              className='img'
              slider='slider3'
            ></Styles.SliderImg>
            <Styles.SliderCaption className='caption'>
              <Styles.SliderCaptionText className='text'>
                {/* <h1>Headline Goes Here</h1> */}

                <h1>
                  Join a fair journey Where people agree on ride prices together
                </h1>
              </Styles.SliderCaptionText>
            </Styles.SliderCaption>
          </Styles.SliderItem>
        </Styles.SliderItems>
        {/* <Styles.SlideInfo className='slide-info'>
          <div className='meter'>
            <div className='inner'></div>
          </div>
          <div className='number'></div>
        </Styles.SlideInfo> */}

        <Styles.Progress className='progress'></Styles.Progress>
      </Styles.Slider>
    </Styles.SliderContainer>
  );
};

export default Slider;
