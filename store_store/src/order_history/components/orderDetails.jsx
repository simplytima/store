import product from '../../Home/homeContainer/imgCategory/components/images/bg2.jpeg'



function OrderDetails(){
    return <div className="orderDetails">
        <div className="img">
            <img src={product} alt="" />
        </div>
        <div className="desc">
            <div className="titlePrice">
                <div className="title">
                    <p>title</p>
                </div>
                <p>30.00DH</p>
            </div>
            <div className="description">
                <p>desc of product</p>
                <button>Delivered</button>
                <p>On: 20/05/2024</p>
            </div>
        </div>
    </div>
}


export default OrderDetails