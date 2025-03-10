import { useState } from "react"
import logo from '../assets/images/logo.png'
import cartIcon from '../assets/images/cart.png'
import back from '../assets/images/back.png'
import setting from '../assets/images/settings.png'
import { useTranslation } from 'react-i18next'
import PageNavigator from "../utils/pageNavigation";
import { NAV_PATH } from '../constants/navigationPath';
import useCart from '../redux/useProductCart'

function Header({ title, subtitle }) {

    const { i18n } = useTranslation();
    const [appLang, setAppLang] = useState('en');
    const {goBack,navigateTo} = PageNavigator();
    const {totalCartItems} = useCart();

    const handleBtnClick = (lang) => {
        setAppLang(lang);
        i18n.changeLanguage(lang);
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }

    const handleBackclick = () => {
        goBack();
    }

    const handleCartClick = ()=>{
        navigateTo(NAV_PATH.CART);
    }

    return (
        <div className="header-section">
            <img src={logo} className='header-logo'></img>
            <img src={back} className='header-back' onClick={handleBackclick}></img>
            <div className='header-content'>
                <p className="title">{title}</p>
                <p className="subtitle">{subtitle}</p>
            </div>
            <div className='header-menus'>
                <div className='header-lang'>
                    <button className={appLang === 'en' ? 'button-lang-en active' : 'button-lang-en'} onClick={() => handleBtnClick('en')}>EN</button>
                    <button className={appLang === 'ar' ? 'button-lang-ar active' : 'button-lang-ar'} onClick={() => handleBtnClick('ar')}>AR</button>
                </div>
                <div className='cart-logo-container'>
                    <div className='cart-count'>{totalCartItems()}</div>
                    <img src={cartIcon} className='cart-logo' onClick={handleCartClick}></img>
                </div>
                <img src={setting} className='setting-logo'></img>
                
            </div>

        </div>
    )
}

export default Header
