import './home.scss'
import Thumbs from '../../components/thumbs/Thumbs';
import Banner from '../../components/shared/banner/Banner';
import logo from '../../assets/home_banner.png'

const Home = () => {

    return (
        <div className="home">
            <Banner content="Chez vous, partout et ailleurs" logo={logo} />
            <Thumbs />
        </div>
    )
}

export default Home;