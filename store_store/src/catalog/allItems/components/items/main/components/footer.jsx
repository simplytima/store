import { arrowLeft, arrowright } from "../../../../../../icon"






function Footer(){
    return <div className="footerProduct">
        <div></div>
        <button>VIEW MORE</button>
        <div className="nextBack">
            {arrowLeft}
            <div className="page">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>...</li>
                    <li>23</li>
                </ul>
            </div>
            {arrowright}
        </div>
    </div>
}


export default Footer