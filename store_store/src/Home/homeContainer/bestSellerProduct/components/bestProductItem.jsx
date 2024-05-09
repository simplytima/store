import baby from '../../suggestions/components/img/baby.jpeg'





function BestProductItem(){
    return <div className="bestProductItem">
        <div className="notHover">
            <div className="img">
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


        <div className="hover">
            <div className="img">
                <img src={baby} alt="" />
            </div>
            <div className="desc">
                <p>Baby Collection</p>
                <p>Baby Suit</p>
                <div className="sale">
                    <small>SALE</small>
                    <small>-30%</small>                    
                </div>

                <s>$24.50</s>
                
                <div className="price">    
                    <strong>$18.00</strong>
                    <ion-icon name="bag-handle-outline"></ion-icon>
                </div>
            </div>
        </div>
    </div>
}



export default BestProductItem