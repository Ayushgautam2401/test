import React, { useState } from "react";
import "./Crosole.scss";

type Item = {
  image: string;
  title: string;
  description: string;
};

type Props = {
  items: Item[];
};

const Carousel: React.FC<Props> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const disablePrev = currentIndex === 0;
  const disableNext = currentIndex === items.length - 1;

  return (
    <div className="carousel-container">
      <button disabled={disablePrev} onClick={handlePrevClick} className="carousel-prev">
        Prev
      </button>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div className="carousel-item" key={index}>
              <img src={item.image} alt={`Image ${index}`} />
              <div className="carousel-item-info">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button disabled={disableNext} onClick={handleNextClick} className="carousel-next">
        Next
      </button>
      <div className="carousel-index">
        {currentIndex + 1} / {items.length}
      </div>
    </div>
  );
};

export default Carousel;
