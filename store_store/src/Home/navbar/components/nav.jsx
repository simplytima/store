import { useState } from "react";
import { iconCart, iconHeart, iconSearch, iconUser } from "../../../icon"






function Nav(){

    const [searchActive, setSearchActive] = useState(false);

    const showSearch = () => {
        setSearchActive(!searchActive);
    };




    return <div className="nav">
        <div className="navbar">
            <div className="logo">
                <div className="dot">
                    <p>.com</p>
                </div>
                <p>TimaOutlet</p>
            </div>
            <div className="menu">
                <ul>
                    <li>Shorts</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>TimaBusiness</li>
                </ul>
            </div>
            <div className="icon">
                <ul>
                    <li className={searchActive ? "active" : ""}  onClick={showSearch}>{iconSearch}</li>
                    <li>{iconHeart}</li>
                    <li>{iconUser}</li>
                    <li>{iconCart}</li>
                </ul>
            </div>
        </div>

        <div className={`search ${searchActive ? 'active' : ''}`}>
            <input type="text" placeholder="Search..." />
            <button>
                <ion-icon name="search-outline"></ion-icon>
            </button>
        </div>
    </div>
}


export default Nav