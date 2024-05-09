import heels from '../../suggestions/components/img/heels.jpeg'




function ProductSaleItem(){
    return <div className="productSaleItem">
        <div className="img">
            <img src={heels} alt="" />
        </div>
        <div className="collection">
            <p>Heels Collection</p>
            <s>$24.50</s>
        </div>
        <div className="info">
            <p>Heels Watch</p>
            <strong>$400.00</strong>
        </div>

    </div>
}


export default ProductSaleItem