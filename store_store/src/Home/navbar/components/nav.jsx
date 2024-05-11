import { iconCart, iconHeart,  iconUser } from "../../../icon"
import { Link } from "react-router-dom";






function Nav(){



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
                    <Link to='/catalog'>
                        <li>
                            <p>Catalog</p>
                        </li>
                    </Link>
                    <li><p>Shorts</p></li>
                    <li><p>Brands</p></li>
                    <li><p>New</p></li>
                    <li>TimaBusiness</li>
                </ul>
            </div>
            <div className="icon">
                <ul>
                    <li>{iconHeart}</li>
                    <li>{iconUser}</li>
                    <Link to='/cart'>
                        <li>{iconCart}</li>
                    </Link>
                </ul>
            </div>
        </div>

    </div>
}


export default Nav