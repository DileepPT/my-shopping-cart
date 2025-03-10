import '../styles/ProductDetails.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useTranslation } from 'react-i18next'
import useCart from '../redux/useProductCart'
import { useState, useEffect } from 'react'
import '../styles/Cart.css'

const ProductCartScreen = () => {

    const [cart, setCart] = useState([]);
    const { t: translate } = useTranslation();
    const {getGroupedcartItems}= useCart();

    useEffect(()=>{
        const cartItems = getGroupedcartItems();
        const cartList = [];
        if(cartItems){
            Object.entries(cartItems).map(([key,items])=>{
                const item = items[0];
                item.count = items.length; 
                cartList.push(item);
             });
             setCart([...cart,...cartList])
        }

    },[])

    const renderCartList = cart.map((item) => {
        return (
            <div className="cart-item" key={item.id}>
                <label>{item.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       {translate('iCount')}: {item.count}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       {translate('iPrice')}: {item.price} AED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       {translate('iTotal')}: {item.count * item.price} AED</label>
            </div>
        )
    });

    return (<div className="details-container">
        <Header title={translate('iOrders')}></Header>
        <div className="cart-container">
            {renderCartList}
        </div>
        <Footer msg={translate('iAuthor')}></Footer>

    </div>);
};
export default ProductCartScreen;