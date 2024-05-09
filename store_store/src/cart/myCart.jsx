import Article from "./components/article"
import Item from "./components/item"
import Order from "./components/order"






function MyCart(){
    return <div className="myCart">
        <div className="title">
           <p>Shopping Cart</p> 
        </div>
        
        <div className="allArticles">
            <Article/>
            <Order/>
        </div>

        <div className="recommend">
            <h2>Recommended Products</h2>
            <div className="products">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    </div>
}

export default MyCart