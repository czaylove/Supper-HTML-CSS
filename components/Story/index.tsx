// import * as styles from './styles.js';
import Swiper from 'react-id-swiper';
import React, { useState } from 'react';
import 'swiper/css/swiper.css';
import * as styles from './styles';

const Story = () => {
  const [swiper, updateSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <div
      style={{ width: '490px', height: '850px', background: 'rebeccapurple' }}
    >
      <Swiper getSwiper={updateSwiper}>
        <styles.Slide>Slide 1</styles.Slide>
        <styles.Slide>Slide 2</styles.Slide>
        <styles.Slide>Slide 3</styles.Slide>
        <styles.Slide>Slide 4</styles.Slide>
      </Swiper>
      <button type="button" onClick={goPrev}>
        Prev
      </button>
      <button type="button" onClick={goNext}>
        Next
      </button>
    </div>
  );
};

export default Story;
