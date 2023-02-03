import styles from '@/styles/banner.module.css'
import { useEffect, useState, useRef } from 'react'
import Content from './content'

const Banner = () => {
  const slider = useRef()

  const data = [
    { 
      id: 1,
      title: 'Unlock the power of your people',
      span: 'Udemy Business is trusted by 12.5K+ companies around the world. Find out what we can do for yours.',
      img: '/img/img1.jpg'
    },
    {
      id: 2,
      title: 'Learning that gets you',
      span: 'Skills for your present (and your future). Get started with us.',
      img: '/img/img2.jpg'
    }
  ]

  const [statusSlider, setStatusSlider] = useState(true)

  const sliders = () => {
    if (statusSlider == false) {
      slider.current.scrollLeft = slider.current.scrollLeft - 1250
      setStatusSlider(true)
    } else {
      slider.current.scrollLeft = slider.current.scrollLeft + 1250
      setStatusSlider(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.button_left_rigth}>
        <div>
          <button className={styles.button_left} onClick={sliders}>
            &#60;
          </button>
        </div>

        <div ref={slider} className={styles.contentImg}>
          <Content data={data} />
        </div>

        <button className={styles.button_rigth} onClick={sliders}>
          &#62;
        </button>
      </div>
    </div>
  )
}

export default Banner
