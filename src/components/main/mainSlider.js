import { memo } from 'react'
import '../../asset/css/slider.css'

function MainSlider() {
  return (<div className="slider">
    <div className="slider-img">
      <img src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/22/638150772737878311_F-C1_1200x300.png" alt="" />
    </div>
    <div className="slider-pre">
      <i className="fa-solid fa-angle-right" />
    </div>
    <div className="slider-next">
      <i className="fa-solid fa-angle-right" />
    </div>
    <div className="slider-nav flex js-center">
      <div className="slider-nav-item active"></div>
      <div className="slider-nav-item"></div>
      <div className="slider-nav-item"></div>
      <div className="slider-nav-item"></div>
      <div className="slider-nav-item"></div>
      <div className="slider-nav-item"></div>
      <div className="slider-nav-item"></div>
      <div className="slider-nav-item"></div>
      <div className="slider-nav-item"></div>
      <div className="slider-nav-item"></div>
      <div className="slider-nav-item"></div>
      <div className="slider-nav-item"></div>
    </div>
  </div>
  )
}

export default MainSlider = memo(MainSlider)