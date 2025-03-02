import { useState } from "react"
import '../styles/Common.css'
import logo from '../assets/images/logo.png'
import cartIcon from '../assets/images/cart.png'
import back from '../assets/images/back.png'
import { useTranslation } from 'react-i18next'

function Header({ title, subtitle }) {

    const {i18n } = useTranslation();
    const [appLang, setAppLang] = useState('en');

    const handleBtnClick = (lang)=>{
        setAppLang(lang);
        i18n.changeLanguage(lang);
    }

    return (
        <div className="header-section">
            <img src={logo} className='header-logo'></img>
            <img src={back} className='header-back'></img>
            <div className='header-content'>
                <p className="title">{title}</p>
                <p className="subtitle">{subtitle}</p>
            </div>
            <img src={cartIcon} className='cart-logo'></img>
            <button className= {appLang === 'en' ? 'button-lang-en active' : 'button-lang-en'} onClick={()=>handleBtnClick('en')}>EN</button>
            <button className={appLang === 'ar' ? 'button-lang-ar active' : 'button-lang-ar'} onClick={()=>handleBtnClick('ar')}>AR</button>
        </div>
    )
}

export default Header
