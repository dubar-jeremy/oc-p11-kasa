import logo from '../../../assets/logo.png';
import './Header.css';

const Header = () => {

    return (
        <div className='header'>
                <img src={logo} alt="logo" className='header_logo' />
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>A propos</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;