import './home.css'
import HomeBanner from '../../components/homeBanner/HomeBanner';
import Thumbs from '../../components/thumbs/Thumbs';

const Home = () => {

    return (
        <div className="home">
            <HomeBanner />
            <Thumbs />
        </div>
    )
}

export default Home;