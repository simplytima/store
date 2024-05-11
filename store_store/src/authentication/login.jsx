import { useState } from "react"
import { Link } from "react-router-dom"
import bg from './components/img/login.png'





function Login(){
    const[userLog,setUserLog]= useState({
        username:'',
        password:''
    })

    const onhandler=(e)=>{
        setUserLog({
            ...userLog,
            [e.target.name]:e.target.value
        })
    }


    return <div className="loginContainer" >
        
        <img src={bg} alt="" />

        <form action=""  >
            <h2>LOG IN</h2> 

            <div className="userName">                   
                <input type="text" className="inputForm" name="username" value={userLog.username} onChange={onhandler} placeholder="User name" />
            </div>

            <div className="pw">
                <input type="password" className="inputForm" name="password" value={userLog.password} onChange={onhandler} placeholder="Password"/>
            </div>

            <div className="forget"> 
                <strong><Link>Forget your password?</Link></strong>
            </div>


            <button type="button"><strong>SUBMIT</strong></button>


            <div className="create">
               <strong><Link >Create an Account</Link></strong>
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

export default Login