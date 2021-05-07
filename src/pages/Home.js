import ImageSlider from '../components/carousel/ImageSlider';
import { SliderData } from '../components/carousel/SliderData';
import '../components/carousel/ImageSlider.css';
import React from 'react';

function Home() {
  return (
    <div className='home'>
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default Home;