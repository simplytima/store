import watch from './img/watch.jpeg'





function ProductItem(){
    return <div className="productItem">
        <div className="img">
            <img src={watch} alt="" />
        </div>
        <div className="collection">
            <p>Rolex Collection</p>
            <s>$24.50</s>
        </div>
        <div className="info">
            <p>Rolex Watch</p>
            <strong>$400.00</strong>
        </div>

        <div className="hover">
            <ion-icon name="eye-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="cart-outline"></ion-icon>
        </div>
    </div>
}


export default ProductItem