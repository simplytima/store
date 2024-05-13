


import electronic from '../../Home/homeContainer/category/img/electronic.jpeg'






function OneItem(){
    return <div className="oneItem">
        <div className="item">
            <div className="img">
                <img src={electronic} alt="" />
            </div>
            <div className="collection">
                <p>electronic Collection</p>
                <s>$24.50</s>
            </div>
            <div className="info">
                <p>electronic</p>
                <strong>$18.00</strong>
            </div>             
        </div>
 
    </div>
}



export default OneItem