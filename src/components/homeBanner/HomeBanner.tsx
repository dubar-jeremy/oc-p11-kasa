import logo from '../../assets/home_banner.png'
import './homeBanner.css'
const HomeBanner = () => {
    return (
        <div className='banner'>
            <div className='banner_content_container'>
                <img src={logo} alt='logo' className='logo' />
                <div className='banner_text_container'>
                    <p>Chez vous, partout et ailleurs</p>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner;