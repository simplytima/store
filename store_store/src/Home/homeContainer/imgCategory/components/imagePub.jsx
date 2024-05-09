import bg from './images/bg.png'
import watch from './images/Watch.jpeg'


function ImagePub(){
    return <div className="imgPub">
        <div className="img">
            <img src={bg} alt="" />
            <img src={watch} alt="" /> 
            
            <div className="desc">
                <button><strong>WELCOME</strong></button>
                <h2>Discover Timeless Elegance: Explore Our Collection of Exquisite Watches!</h2>
                <p>From luxurious classics to rugged adventurers and cutting-edge smartwatches,find the perfect timepiece to match your personality and lifestyle. Explore now!</p>
                <button>SHOP NOW</button>
            </div>

            <div className="nextPub">
                <ion-icon name="ellipse-outline"></ion-icon>
                <ion-icon name="ellipse-outline"></ion-icon>
                <ion-icon name="ellipse-outline"></ion-icon>
            </div>

        </div>




    </div>
}


export default ImagePub;