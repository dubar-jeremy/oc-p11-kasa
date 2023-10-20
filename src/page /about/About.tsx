import Banner from "../../components/shared/banner/Banner"
import logo from "../../assets/about_logo.png"
import Accordion from "../../components/shared/accordion/Accordion"
import { AboutItem, aboutData } from "../../data/about"
import './about.css'

const About = () => {


    
    return (
        <div className="about">
            <Banner logo={logo} />
            {aboutData?.map((item: AboutItem) => <Accordion title={item?.title} content={item?.content} />)}
        </div>
    )
}

export default About