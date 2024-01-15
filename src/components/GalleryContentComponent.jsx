import React from 'react';
import '../App.css';


export default function GalleryContentComponent({data, saga}) {
  return (
    <div>
    <h4>{saga}</h4>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center carousel-container">
    {console.log("esto está leyendo el child ", data)}
    
    {data && Array.isArray(data) ? ( data.map( ele => (
        <div className="col mb-2 px-1 carousel-slide" key={ele.imdbID}>
        <img className="img-fluid" src={ele.Poster} alt="movie picture" />
      </div>
    
    ))
    ) : (
      <p>No data available</p>)}
        
      
      
    </div>
  </div>
  )
}
