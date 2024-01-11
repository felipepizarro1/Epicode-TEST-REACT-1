import React from 'react';
import img1 from '../assets/6.png';

export default function GalleryContentComponent() {
  return (
    <div>
    <h4>Trending Now</h4>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
      <div className="col mb-2 px-1">
        <img className="img-fluid" src={img1} alt="movie picture" />
      </div>
      <div className="col mb-2 px-1">
        <img className="img-fluid" src={img1} alt="movie picture" />
      </div>
      <div className="col mb-2 px-1">
        <img className="img-fluid" src={img1} alt="movie picture" />
      </div>
      <div className="col mb-2 px-1">
        <img className="img-fluid" src={img1}alt="movie picture" />
      </div>
      <div className="col mb-2 px-1">
        <img className="img-fluid" src={img1} alt="movie picture" />
      </div>
      <div className="col mb-2 px-1">
        <img className="img-fluid" src={img1} alt="movie picture" />
      </div>
    </div>
  </div>
  )
}
