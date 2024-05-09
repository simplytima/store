import home from './img/home.jpeg'
import men from './img/men.jpeg'
import women from './img/women.jpeg'
import baby from './img/baby.jpeg'
import electronic from './img/electronic.jpeg'
import accessories from './img/accessories.jpeg'





function Category(){
    return <div className="category">

        <div className="CAT">
            <div className="cat">
                <img src={women} alt="" />
                <p>Women</p>
            </div>
            <div className="cat">
                <img src={men} alt="" />
                <p>Men</p>
            </div>
            <div className="cat">
                <img src={baby} alt="" />
                <p>Baby</p>
            </div>
            <div className="cat">
                <img src={electronic} alt="" />
                <p>Electronic</p>
            </div>
            <div className="cat">
                <img src={home} alt="" />
                <p>Home</p>
            </div>
            <div className="cat">
                <img src={accessories} alt="" />
                <p>Accessories</p>
            </div>

            
            <ion-icon name="arrow-forward-outline"></ion-icon>
            
        </div>




    </div>
}


export default Category;