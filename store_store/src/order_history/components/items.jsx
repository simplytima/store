import { arrowLeft, arrowright } from "../../icon"
import OneItem from "./oneItem"



function Items(){
    return <div className="items">

        <div className="header">
            <p>What About This?</p>
            <div className="arrow">
                {arrowLeft}
                {arrowright}
            </div>
        </div>
        <div className="similar">
            <OneItem/>
            <OneItem/>
            <OneItem/>
            <OneItem/>
            <OneItem/>
            <OneItem/>
            <OneItem/>
            <OneItem/>
            <OneItem/>
            <OneItem/>
            <OneItem/>
            <OneItem/>
            <OneItem/>
            <OneItem/>
            <OneItem/>
            <OneItem/>
            <OneItem/>
            <OneItem/>
        </div>
    </div>
}


export default Items