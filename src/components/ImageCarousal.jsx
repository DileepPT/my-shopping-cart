import '../styles/ProductDetails.css'

const ImageCarousal = ({ product }) => {
    
    const getRandomId = ()=>{
        return Math.floor(Math.random() * 100);
    }

    const renderImageList = product.images.map((imageUrl) => {
        return (
            <div className="images-list" key={getRandomId()}>
                <img className="list-image-item" src={imageUrl}></img>
            </div>
        )
    })

    return (
        <div className="details-images">
            {renderImageList}
        </div>
    )
}

export default ImageCarousal;
