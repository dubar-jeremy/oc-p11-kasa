import star from "../../assets/star.png";
import starInactive from "../../assets/starInactive.png";
import { StarProps } from "./star.props";
import "./star.css";

const Star = ({ rating }: StarProps) => {
  const arrayLength = 5;

  const stars = Array.from(Array(arrayLength).keys());

  return (
    <>
      {stars.map((starNumber: number) => (
        <img
          key={starNumber}
          src={starNumber < Number(rating) ? star : starInactive}
          alt="rating"
        />
      ))}
    </>
  );
};

export default Star;
