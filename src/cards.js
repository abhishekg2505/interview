import React from "react";


const Cards = (props) => {

  return (
    <>
      <div className="blog card">
        <div className="blog-item">
          <div className="blog-img">
            <img src={props.thumb} alt="Blog" className="img-fluid" />
          </div>
          <div className="blog-content">
            <h2 className="blog-title">{props.name}</h2>
            <div className="blog-meta">
              <p>{props.locality}</p>
              <p>{props.cuisines}</p>
              <p>{props.rating}</p>
            </div>
            <div className="blog-text">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Cards;
