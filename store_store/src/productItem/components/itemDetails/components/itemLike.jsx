import men from '../../../../Home/homeContainer/category/img/men.jpeg'








function ItemLike(){
    return <div className="itemLike">
        <div className="item">
            <div className="img">
                <img src={men} alt="" />
            </div>
            <div className="collection">
                <p>Men Collection</p>
                <s>$24.50</s>
            </div>
            <div className="info">
                <p>Men</p>
                <strong>$18.00</strong>
            </div>             
        </div>
 
    </div>
}



export default ItemLike