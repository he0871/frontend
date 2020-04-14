import React from 'react';
import '../css/app.scss'
import '../css/style.scss'

class Login extends React.Component{
    render(){
        return(
            <div className="login-wrapper">
            <form className="box login-box">
                <div className="field">
                    <label>Email</label>
                </div>
                <div className="control">
                    <input className="input" tpye ="text" placeholder="Email"/>
                </div>
                <div>
                    <label>Password</label>
                </div>
                <div className="fiedl">
                    <input className="input" type="text" placeholder="Password"/>
                </div>
                <div className="control">
                    <button className="button is-fullwidth is-primary">Login</button>
                </div>
            </form> 
            </div>   
        )
    }
}

export default Login;