import watch from '../../Home/homeContainer/suggestions/components/img/watch.jpeg'







function Item(){
    return <div className="item">
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
    </div>
}


export default Item