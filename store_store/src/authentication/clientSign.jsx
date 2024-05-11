import { useState } from "react"
import bg from './components/img/login.png'
import { Link } from "react-router-dom"





function SignupClient(){

    const[clientSign,setClientSign] = useState({
        firstName:'',
        lastName:'',
        phone:'',
        email:'',
        userName:'',
        password:'',
        confirm:'',
        city:'',
        postal:'',
        adresse:''
    })


    const onhandler=(e)=>{
        setClientSign({
            ...clientSign,
            [e.target.name]:e.target.value
        })
    }




    return <div className="signupClient">
        {/* first last phone mail  username pw  city postal adr  */}

        <img src={bg} alt="" />

        <form action=""  >
            <h2>SIGN UP</h2> 

            <div className="form">
                <div className="fullName">                   
                    <input type="text" className="inputForm" name="firstName" value={clientSign.firstName} onChange={onhandler} placeholder="First Name" />
                    <input type="text" className="inputForm" name="lastName" value={clientSign.lastName} onChange={onhandler} placeholder="Last Name" />
                </div>

                <div className="phone">
                    <input type="text" className="inputForm" name="phone" value={clientSign.phone} onChange={onhandler} placeholder="Phone" />
                </div>

                <div className="mail">
                    <input type="text" className="inputForm" name="email" value={clientSign.email} onChange={onhandler} placeholder="E-Mail" />
                </div>

                <div className="username">
                <input type="text" className="inputForm" name="userName" value={clientSign.userName} onChange={onhandler} placeholder="User Name" />
                </div>

                <div className="pw">
                    <input type="password" className="inputForm" name="password" value={clientSign.password} onChange={onhandler} placeholder="Password"/>
                    <input type="password" className="inputForm" name="confirm" value={clientSign.confirm} onChange={onhandler} placeholder="Confirm Password"/>
                </div>


                {/* <div className="cityPostal">
                    <input type="password" className="inputForm" name="city" value={clientSign.city} onChange={onhandler} placeholder="City"/>
                    <input type="password" className="inputForm" name="postal" value={clientSign.postal} onChange={onhandler} placeholder="Postal Code"/>
                </div>


                <div className="adr">
                    <input type="password" className="inputForm" name="adresse" value={clientSign.adresse} onChange={onhandler} placeholder="Adresse"/>
                </div>  */}
                
            </div>


            <button type="button"><strong>SIGN UP</strong></button>


            <div className="log">
                <p>Already have an account?</p>
                <strong><Link >Sign In</Link></strong>
            </div>


            <div className="socialMedia">
                <p>Or</p>
                <div className="media">
                    <ion-icon name="logo-google"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                </div>
            </div>

        </form> 
    </div>
}

export default SignupClient