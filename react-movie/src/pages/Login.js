import React from 'react';
import '../css/app.scss'
import '../css/style.scss'

class Login extends React.Component{
    state = {
        email: '',
        password: ''
    };


    /*Event handle:*/
    handleSubmit = event =>{
      //1.prevent default event action
      event.preventDefault();
      //2.Acqurie data from form
      //3.process login request
      //4.switch to index
      this.props.history.push('/')
    }

    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className="login-wrapper">
            <form className="box login-box" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label>Email</label>
                </div>
                <div className="control">
                    <input 
                    className="input" 
                    tpye ="text" 
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                </div>
                <div className="fiedl">
                    <input 
                    className="input" 
                    type="text" 
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
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