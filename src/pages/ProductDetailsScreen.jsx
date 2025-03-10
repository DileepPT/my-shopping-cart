import '../styles/ProductDetails.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"
import ImageCarousal from "../components/ImageCarousal"
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import useCart from '../redux/useProductCart'
import AlertUtils from '../utils/alertUtils'
import { TOAST_TYPE } from "../constants/constants";

const ProductDetailsScreen = () => {
    const [isctive, setActive] = useState(true);
    const [cartCount, setCartCount] = useState(1);
    const data = useLocation().state.data;
    const { t: translate, i18n } = useTranslation();
    const { addProductToCart, cartItems } = useCart();
    const {ToastContainer, showToast} = AlertUtils();

    const onCartItemChange = () => {

    }

    const handleCartClick = () => {
        if (cartCount < 10) {
            console.log("handleCartClick :::"+JSON.stringify(data))
            addProductToCart(data);
            showToast(TOAST_TYPE.SUCCESS, `${cartCount} ${data.title} added to your cart.`);
        }
    }

    const handleSmallBtnClick = (count) => {
        if (count >= 1 && count <= 10) {
            setCartCount(count);
        }
    }

    return (<div className="details-container">
        <Header title={translate('iProductDetails')}></Header>
        <div className="details">
            <label className="detail-title">{data.title}</label>
            <ImageCarousal product={data}></ImageCarousal>
            <div className="details-description">
                <label className='details-price'>{translate('iPrice')}: {data.price} AED</label>
                <label className='details-product-details'>{translate('iDescription')}: {data.description}</label>
            </div>
            <div className='details-cart-container'>
                <button className='button-small-primary' onClick={() => handleSmallBtnClick(cartCount - 1)}>-</button>
                <input className='input-primary' style={{ width: '25px' }} onChange={onCartItemChange} value={cartCount} type='number'></input>
                <button className='button-small-primary' onClick={() => handleSmallBtnClick(cartCount + 1)}>+</button>
                <button className={isctive ? 'button-primary' : 'button-primary active'} style={{ marginLeft: '15px' }} onClick={handleCartClick}>Add to Cart</button>
            </div>
            <ToastContainer rtl={i18n.language === 'ar'}></ToastContainer>
        </div>
        <Footer msg={translate('iAuthor')}></Footer>

    </div>);
};
export default ProductDetailsScreen;