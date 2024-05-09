


import { arrowLeft, arrowright } from "../../../../icon"
import ItemLike from "./itemLike"
import ItemSimilar from "./itemSimilar"






function MightLike(){
    return <div className="mightLike">
        <div className="header">
            <p>Similar Items</p>
            <div className="arrow">
                {arrowLeft}
                {arrowright}
            </div>
        </div>
        <div className="like">
            <ItemLike/>
            <ItemLike/>
            <ItemLike/>
            <ItemLike/>
            <ItemLike/>
            <ItemLike/>
        </div>
    </div>
}


export default MightLike