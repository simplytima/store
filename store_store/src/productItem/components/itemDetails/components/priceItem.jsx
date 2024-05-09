import { iconFreeShip, star } from "../../../../icon"
import guarantee from './imgItem/guarantee.png'






function PriceItem(){
    return <div className="priceItem">
        <div className="detail">
            <p>SWEATSHIRT</p>
            <h1>Half Zip Sweatshirt in Fleece</h1>
            <div className="rating">
                <div className="star">
                   {star}{star}{star}{star}{star} 
                </div>
                <div className="reviews">
                   <p>45 Reviews</p> 
                </div>
                <div className="info">
                    <small>HOT</small>
                    <small>-30%</small>
                </div>

            </div>
        </div>
        <div className="chooseMore">
            <div className="gender">
                <p>Gender:</p>
                <p>Man</p>
            </div>
            <div className="color">
                <p>Color:</p>
                <div className="select">
                    <input type="color" name="" id="" value='#9d5243'/>
                    <input type="color" name="" id="" value='#ffff'/>
                    <input type="color" name="" id="" value='#7eb373'/>                    
                </div>
            </div>
            <div className="size">
                <p>Size:</p>
                <select name="" id="">
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>
                    <option value="">XXL</option>
                </select>
            </div>
        </div>

        <div className="prix">
            <div className="price">
                <s>$30.00</s>
                <p>$20.50</p>
            </div>
            
            <button>
                <p>ADD TO CART</p>
                <ion-icon name="basket-outline"></ion-icon>
            </button>
        </div>

        <div className="guarantee">
            <img src={guarantee} alt="" />
        </div>
    </div>
}


export default PriceItem