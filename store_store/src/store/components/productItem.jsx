
import baby from '../../Home/homeContainer/category/img/baby.jpeg'





function ProductItem(){
    return <div className="productItem">
        <div className="product">
            <div className="imgProduct">
                <img src={baby} alt="" />
            </div>

            <div className="collection">
                <p>Baby Collection</p>
                <s>$24.50</s>
            </div>
            <div className="info">
                <p>Baby Suit</p>
                <strong>$18.00</strong>
            </div> 
        </div>
    </div>
}


export default ProductItem