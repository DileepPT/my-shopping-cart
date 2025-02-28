import '../styles/ProductDetails.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"
import ImageCarousal from "../components/ImageCarousal"

const ProductDetailsScreen = (props) => {

    const data = useLocation().state.data;

    return (<div className="details-container">
        <Header title='Product Details'></Header>
        <div className="details">
            <label className="detail-title">{data.title}</label>
            <ImageCarousal product={data}></ImageCarousal>
            <div className="details-description">

            </div>
        </div>
        <Footer msg=''></Footer>

    </div>);
};
export default ProductDetailsScreen;