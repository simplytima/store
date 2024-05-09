import { arrowLeft, arrowright } from "../../../../icon"




function Header(){
    return <div className="header">
        <div className="ad">
            <div className="sug">
                <h3>You'll Love This</h3>
                <a href="">View Products</a>
            </div>
            <p>We've picked few pieces we're pretty sure you'll love.</p>
        </div>
        <div className="nextBack">
            {arrowLeft}
            {arrowright}

        </div>
    </div>
}

export default Header