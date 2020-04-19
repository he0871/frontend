import React from 'react';
import '../css/app.scss'
import '../css/style.scss'

class Toolbox extends React.Component{
    render(){
        return(
            <div className='tool-box'>
                <div className="logo-text">Store</div>
                <div className="search-box">
                    <div className="field has-addons">
                        <div className="control">
                            <input 
                            type="text" 
                            className="search-input" 
                            placeholder="Search product"/>
                        </div>
                        <div className="control">
                            <button className="button">x</button>
                        </div>
                    </div>
                </div>
                <div className="cart-box">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-num">(0)</span>
                </div>
                
            </div>
        )
    }
}

export default Toolbox