import useFetchProduct from '../hooks/useFetchProducts';
import '../styles/Products.css'
import PageNavigator from '../utils/pageNavigation';
import { NAV_PATH } from '../constants/navigationPath';

const ProductItem = ({index,style}) => {
    const {products} = useFetchProduct();
    const {navigateTo} = PageNavigator();

    const handleItemSelection = ()=>{
        navigateTo(NAV_PATH.PRODUCT_DETAILS.replace('$id',products[index].id),products[index]);
    }

    return (
        <div className='list-item' key={index} style={style} onClick={handleItemSelection}>
            { products[index] ? (
                <>
                <img className='img-product' src={products[index].thumbnail}></img>
                <div className='content-list'>
                    <label className='title'>{products[index] ? products[index].title : 'Loading...'}</label>
                    <label className='subtitle'>Price: {products[index].price} AED</label>
                    <label className='subtitle'>Description:</label>
                    <label className='description'>{products[index].description.trim()}</label>
                </div>
                </>
    ) : <label className='product-title'>'Loading...'</label> }
        </div>
    )
}

export default ProductItem;
