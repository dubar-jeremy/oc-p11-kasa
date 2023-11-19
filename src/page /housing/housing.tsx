import { useEffect, useState } from "react";
import useHousing from "../../hooks/useHousing";
import { useNavigate, useParams } from "react-router-dom";
import Carrousel from "../../components/carrousel/Carrousel";
import Tag from "../../components/tag/Tag";
import "./housing.css";
import Accordion from "../../components/shared/accordion/Accordion";
import Star from "../../components/star/Star";

const Housing = () => {
  const { getOne } = useHousing();

  const { id } = useParams();

  const navigate = useNavigate();

  const house = getOne(id);

  useEffect(() => {
    if (!id || !house) {
      navigate("/not-found", {
        replace: true,
      });
    }
  }, [id, navigate, getOne, house]);

  if (!house) {
    return;
  }

  const { pictures, tags } = house;

  const [firstname, lastname] = house?.host?.name?.split(" ") || [];

  return (
    <div className="housing">
      <Carrousel pictures={pictures} />
      <div className="housing_info_container">
        <div className="housing_title_container">
          <h1>{house?.title}</h1>
          <p>{house?.location}</p>
        </div>
        <div className="housing_tags_container">
          {tags?.map((tag: string, index: number) => (
            <Tag tag={tag} key={`${tag}-${index}`} />
          ))}
        </div>
        <div className="housing_rating_container">
          <Star />
        </div>
        <div className="housing_host_container">
          <div className="housing_host_name">
            <p>{lastname}</p>
            <p>{firstname}</p>
          </div>
          <img src={house?.host?.picture} alt="host" />
        </div>
        <div className="housing_accordion_container">
          <Accordion title="Description" content={house?.description} />
          <Accordion title="Equipments" content={house?.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Housing;
