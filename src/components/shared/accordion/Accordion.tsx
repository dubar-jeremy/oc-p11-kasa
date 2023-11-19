import { useEffect, useState } from "react";
import { AccordionProps } from "./accordion.props";
import arrowBack from "../../../assets/arrow_back.png";
import arrowUp from "../../../assets/arrow_up.png";
import "./accordion.css";
import { useLocation } from "react-router-dom";

const Accordion = ({ title, content }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  const isList = Array.isArray(content);

  const location = useLocation();

  // prevent accordion to be hidden by footer
  useEffect(() => {
    if (document?.querySelector(".accordion-content")) {
      document.querySelector(".footer")?.classList?.remove("footer_fixed");
    } else {
      document.querySelector(".footer")?.classList?.add("footer_fixed");
    }
  }, [open, location]);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="accordion" onClick={handleOpen}>
      <div className="accordion-item">
        <div className={`accordion-title`}>
          <div>{title}</div>
          <div>
            <img src={open ? arrowBack : arrowUp} />
          </div>
        </div>
        {open && (
          <div className="accordion-content">
            {isList ? (
              content.map((item: string, index: number) => (
                <p key={`${item}-${index}`}>{item}</p>
              ))
            ) : (
              <p>{content}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
