import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  const { trip, removeTour } = props;

  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {trip.map(function (tour) {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
