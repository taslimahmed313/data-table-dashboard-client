import React from 'react';
import logo from "../../../assets/images/aide-logo (1).png";
import "./Slider.css";

const Slider = () => {
    return (
      //   <div className="slider">
      //     <figure>
      //       <div className="slide">
      //         <p>Image One</p>
      //         <img className='slider-img'
      //           src="https://w0.peakpx.com/wallpaper/113/393/HD-wallpaper-food-still-life-garlic-jug-onion.jpg"
      //           alt=""
      //         />
      //       </div>
      //       <div className="slide">
      //         <p>Image Two</p>
      //         <img
      //           src="https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?w=1380&t=st=1671816347~exp=1671816947~hmac=40d37b5dfc1172c4adf8b22a4bef3b4c3885c00728c120f9ce3a783a9e5fb2a1"
      //           alt=""
      //         />
      //       </div>
      //       <div className="slide">
      //         <p>Image Three</p>
      //         <img
      //           src="https://w0.peakpx.com/wallpaper/113/393/HD-wallpaper-food-still-life-garlic-jug-onion.jpg"
      //           alt=""
      //         />
      //       </div>
      //       <div className="slide">
      //         <p>Image Four</p>
      //         <img
      //           src="https://w0.peakpx.com/wallpaper/113/393/HD-wallpaper-food-still-life-garlic-jug-onion.jpg"
      //           alt=""
      //         />
      //       </div>
      //       <div className="slide">
      //         <p>Image Four</p>
      //         <img
      //           src="https://w0.peakpx.com/wallpaper/113/393/HD-wallpaper-food-still-life-garlic-jug-onion.jpg"
      //           alt=""
      //         />
      //       </div>
      //     </figure>
      //   </div>
      <div className="slide">
        <div className="load"></div>
        <div className="content">
          <div className="principle">
            <img src={logo} alt="" />
            <h1>aide</h1>
            <p>A WINDOW OF INFINITE POSSIBILITIES</p>
          </div>
        </div>
      </div>
    );
};

export default Slider;