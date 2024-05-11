import { useState } from "react"
import bg from './components/img/login.png'
import { Link } from "react-router-dom"





function SignupMerchant(){

    const[merchantSign,setMerchantSign] = useState({
        firstName:'',
        lastName:'',
        phone:'',
        email:'',
        userName:'',
        password:'',
        confirm:'',
        storeName:''
    })


    const onhandler=(e)=>{
        setMerchantSign({
            ...merchantSign,
            [e.target.name]:e.target.value
        })
    }




    return <div className="signupMerchant">
        {/* first last phone mail  username pw  city postal adr  */}

        <img src={bg} alt="" />

        <form action=""  >
            
            <h2>SIGN UP</h2> 

            <div className="form">
                <div className="fullName">                   
                    <input type="text" className="inputForm" name="firstName" value={merchantSign.firstName} onChange={onhandler} placeholder="First Name" />
                    <input type="text" className="inputForm" name="lastName" value={merchantSign.lastName} onChange={onhandler} placeholder="Last Name" />
                </div>

                <div className="phone">
                    <input type="text" className="inputForm" name="phone" value={merchantSign.phone} onChange={onhandler} placeholder="Phone" />
                </div>

                <div className="mail">
                    <input type="text" className="inputForm" name="email" value={merchantSign.email} onChange={onhandler} placeholder="E-Mail" />
                </div>

                <div className="storename">
                    <input type="text" className="inputForm" name="storeName" value={merchantSign.storeName} onChange={onhandler} placeholder="Store Name" />
                </div>

                <div className="username">
                    <input type="text" className="inputForm" name="userName" value={merchantSign.userName} onChange={onhandler} placeholder="User Name" />
                </div>

                <div className="pw">
                    <input type="password" className="inputForm" name="password" value={merchantSign.password} onChange={onhandler} placeholder="Password"/>
                    <input type="password" className="inputForm" name="confirm" value={merchantSign.confirm} onChange={onhandler} placeholder="Confirm Password"/>
                </div>
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

export default SignupMerchant



