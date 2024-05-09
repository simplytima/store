import { arrowLeft, arrowright } from "../../../../icon"
import ItemSimilar from "./itemSimilar"






function SimilarItems(){
    return <div className="similarItems">
        <div className="header">
            <p>Similar Items</p>
            <div className="arrow">
                {arrowLeft}
                {arrowright}
            </div>
        </div>
        <div className="similar">
            <ItemSimilar/>
            <ItemSimilar/>
            <ItemSimilar/>
            <ItemSimilar/>
            <ItemSimilar/>
            <ItemSimilar/>
        </div>
    </div>
}


export default SimilarItems