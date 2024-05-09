import DescriptionItem from "./components/descriptionItem"
import PriceItem from "./components/priceItem"
import SimilarItems from "./components/similarItems"






function ItemDetails(){
    return <div className="itemDetails">
        <DescriptionItem/>
        <PriceItem/>
    </div>
}


export default ItemDetails