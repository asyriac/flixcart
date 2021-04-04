const Product = ({ item: { id, name, image, price, inStock, fastDelivery }, item }) => {

    const handleAddToCart = (item) => {

    }

    const isAddedToCart = () => {
        return "Add to cart"
    }

    return (
        <div className="card card-shadow">
            <div className="card-img-container">
                <img className="card-img" src={image} alt={name} />
                <button className="btn btn-primary btn-icon btn-icon-sm card-img-overlay"><i className="far fa-heart"></i></button>
            </div>
            <div className="card-content">
                <div className="card-body">
                    <h4 className="mb-md ">{name}</h4>
                    <h5 className="">Rs. {price}</h5>
                    {inStock ? <span className="">In stock</span> : <span className=" ">Out of stock</span>}
                    {fastDelivery && <span className="mb-md ">Fast delivery</span>}
                </div>
                <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>{isAddedToCart()}</button>
            </div>
        </div>
    )
}

export default Product;