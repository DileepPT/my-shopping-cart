import useFetchProduct from "../hooks/useFetchProducts"
import '../styles/ProductDetails.css'
import Header from "../components/Header"
import Footer from "../components/Footer"

const ProductDetailsScreen = () => {
    const { products } = useFetchProduct();

    return (<div className="details-container">
        <Header title='Product Details'></Header>
        <p>{products[0].title}</p>
        <Footer msg=''></Footer>

    </div>);
};
export default ProductDetailsScreen;