import './banner.scss'
import { BannerProps } from './banner.props';

const Banner = ({content, logo}: BannerProps) => {
    return (
        <div className='banner'>
            <div className='banner_content_container'>
                <img src={logo} alt='logo' className='logo' />
                {content && <div className='banner_text_container'>
                    <p>{content}</p>
                </div>}
            </div>
        </div>
    )
}

export default Banner;