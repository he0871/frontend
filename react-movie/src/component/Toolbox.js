import React from 'react';
import '../css/app.scss'
import '../css/style.scss'
import { withRouter } from "react-router";

class Toolbox extends React.Component{

    state = {
        searchText : '',
    }

    handleChange = event =>{
        const value = event.target.value;
        this.setState({
            searchText: value
        });
        this.props.search(value);
    };

    clearSearchText = () =>{
        this.setState({
            searchText: ''
        });
        this.props.search('');
    };

    goCart = () =>{
        this.props.history.push('/cart')
    }
    

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
                            placeholder="Search product"
                            value={this.state.searchText}
                            onChange={this.handleChange}
                            />
                        </div>
                        <div 
                        className="control"
                        onClick={this.clearSearchText}
                        >
                            <button className="button">x</button>
                        </div>
                    </div>
                </div>
                <div className="cart-box" onClick={this.goCart}>
                    <i className="fas fa-shopping-cart"></i>
        <span className="cart-num">({this.props.cartNum})</span>
                </div>
                
            </div>
        )
    }
}

export default withRouter(Toolbox)