import './footer.css';
import logo from '../../../assets/logo_footer.png'
const Footer = () => {

    return (
        <div className="footer">
            <div className="footer_content">
                <img src={logo} alt="logo" className='footer_logo' />
                <div className='footer_signature'>
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;