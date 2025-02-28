import '../styles/ProductDetails.css'

const ImageCarousal = ({ product }) => {

    const renderImageList = product.images.map((imageUrl) => {
        return (
            <div className="images-list">
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
