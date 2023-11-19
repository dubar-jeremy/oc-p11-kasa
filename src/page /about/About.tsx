import Banner from "../../components/shared/banner/Banner";
import logo from "../../assets/about_logo.png";
import Accordion from "../../components/shared/accordion/Accordion";
import { AboutItem, aboutData } from "../../data/about";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="banner_about">
        <Banner logo={logo} />
      </div>
      <div className="about">
        {aboutData?.map((item: AboutItem, index: number) => (
          <Accordion
            key={`${item?.title}-${index}`}
            title={item?.title}
            content={item?.content}
          />
        ))}
      </div>
    </>
  );
};

export default About;
