import Items from "./components/items"
import Order from "./components/order"





function OrderHistory(){
    return <div className="orderHistory">
        <div className="title">
            <h3>Orders History</h3>
            <Order/>
            <Items/>
        </div>
    </div>
}

export default OrderHistory