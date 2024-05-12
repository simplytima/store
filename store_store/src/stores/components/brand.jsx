
import logo from './logos/logo.jpg'



function Brand(){
    return <div className="brand">
        <div className="img">
           <img src={logo} alt="" /> 
        </div>
        
        <div className="name">
            <p>Brand Name</p>
            <p>100 Followers</p>
        </div>
    </div>
}


export default Brand