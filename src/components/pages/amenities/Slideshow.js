import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'https://liveattheteak.com/assets/images/cache/4601-amesbury-dr-dallas-tx-75206-High-Res-1-e77f48224bb2c72d74aff01767e7c922.jpg',
    caption: 'First Slide'
  },
  {
    url: 'https://www.uniqhotels.com/media/current_blog/Hotel_Frutt_Family_Lodge.jpg',
    caption: 'Second Slide'
  },
  {
    url: 'https://www.bu.edu/bhr/files/2019/02/pool-600-pixel.jpg',
    caption: 'Third Slide'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%' }} src={fadeImage.url} />
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow