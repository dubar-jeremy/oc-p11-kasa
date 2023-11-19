import { useState } from "react";
import arrowNext from "../../assets/next.png";
import arrowPrevious from "../../assets/previous.png";
import "./carrousel.css";

interface CarrouselProps {
  pictures: string[];
}
const Carrousel = ({ pictures }: CarrouselProps) => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState<number>(0);

  const displayElement: boolean = pictures?.length > 1;

  const onChangePicture = (next: boolean) => {
    if (next) {
      setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    } else {
      setCurrentPictureIndex((prevIndex) =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="carousel_container">
      <div className="carrousel">
        {displayElement && (
          <img
            src={arrowPrevious}
            onClick={() => onChangePicture(true)}
            className="arrow_previous"
          />
        )}
        <img
          src={pictures[currentPictureIndex]}
          className="carrousel_picture"
        />
        {displayElement && (
          <img
            src={arrowNext}
            onClick={() => onChangePicture(false)}
            className="arrow_next"
          />
        )}
      </div>
    </div>
  );
};

export default Carrousel;
