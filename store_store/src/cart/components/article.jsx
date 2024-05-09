import { iconDelete, iconStore } from "../../icon"
import electronic from '../../Home/homeContainer/category/img/accessories.jpeg'







function Article(){
    return <div className="article">
        <h3>ALL ARTICLES</h3>
        
        <div className="details">
            <div className="img">
                <img src={electronic} alt="" />
            </div>
            <div className="div">
                <div className="descCancel">
                    <div className="desc">
                        <p>descriptionqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
                    </div>
                    <div className="cancel">
                        {/* <ion-icon name="heart-outline"></ion-icon> */}
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                </div>
                <div className="price">
                    <p>$20.00</p>
                    <div className="add">
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>                        
                </div>   
                <div className="livraison">
                    <p>Livraion gratuite</p>
                </div>             
            </div>

        </div>




        <div className="details">
            <div className="img">
                <img src={electronic} alt="" />
            </div>
            <div className="div">
                <div className="descCancel">
                    <div className="desc">
                        <p>description</p>
                    </div>
                    <div className="cancel">
                        {/* <ion-icon name="heart-outline"></ion-icon> */}
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                </div>
                <div className="price">
                    <p>$20.00</p>
                    <div className="add">
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>                       
                </div>  
                <div className="livraison">
                    <p>Livraion gratuite</p>
                </div>               
            </div>
        </div>
    </div>
}



export default Article