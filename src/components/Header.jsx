import '../styles/Common.css'
import logo from '../assets/images/logo.png'
import cartIcon from '../assets/images/cart.png'

function Header({ title, subtitle }) {

    return (
        <div className="header-section">
            <img src={logo} className='header-logo'></img>
            <div className='header-content'>
                <p className="title">{title}</p>
                <p className="subtitle">{subtitle}</p>
            </div>
            <img src={cartIcon} className='cart-logo'></img>
        </div>
    )
}

export default Header
