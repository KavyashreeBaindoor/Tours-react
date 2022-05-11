import React, { useState } from "react";

const Tour = (props) => {
  const { id, image, info, price, name, removeTour } = props;
  const [readMore, setReadMore] = useState(false);

  return (
    <React.Fragment>
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h1 className="tour-price">Rs{price}</h1>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 180)}`}....
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "Show Less" : "Read More"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            Not Interested
          </button>
        </footer>
      </article>
    </React.Fragment>
  );
};

export default Tour;
