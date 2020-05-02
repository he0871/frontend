import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import Toolbox from './Toolbox'
import Product from './product'
import Panel from './Panel'
import AddInentory from './AddInventory'
import '../css/app.scss'
import '../css/style.scss'
import axios from '../commons/axios'

class Products extends React.Component{
 
state = {
  products: [],
  sourceProduct: [],
  cartNum : 0
};

componentDidMount(){
  /*execute after first render of this component*/
  

  axios.get('/products').then(response => {
    this.setState({
      products: response.data,
      sourceProduct : response.data
    })
  })
  this.updateCartNum()
}

search = text =>{
  //get new array
  let _products = [...this.state.sourceProduct]
  //filter
  _products = _products.filter(p =>{
    const matchArray = p.name.match(new RegExp(text,'gi'));
    return !!matchArray;
  })

  //set state
  this.setState({
    products : _products
  });
}


toAdd = () =>{
  Panel.open({
    component: AddInentory,
    callback : data =>{
      console.log("call back")
      console.log(data)
      if (data){
        this.add(data);
      }
    }
  })
}

add = product =>{
  const _products = [...this.state.products]
  _products.push(product)
  const _sproducts = [...this.state.sourceProduct]
  _products.push(product)
  _sproducts.push(product)
  this.setState({
    products: _products,
    sourceProduct:_sproducts
  })
}

update = product =>{
  const _products = [...this.state.products]
  const _index = _products.findIndex(p => p.id === product.id)
  _products.splice(_index,1,product)
  const _sproducts = [...this.state.sourceProduct]
  const _sindex = _sproducts.findIndex(p => p.id === product.id)
  _sproducts.splice(_sindex,1,product)
  this.setState({
    products: _products,
    sourceProduct:_sproducts
  })
}

delete = id =>{
  const _products = this.state.products.filter(p => p.id !== id)
  const _sproducts = this.state.sourceProduct.filter(p => p.id !== id)
  this.setState({
    products: _products,
    sourceProduct:_sproducts
  })
}

updateCartNum = async() =>{
  const cartNum = await this.initCartNum();
  this.setState({
    cartNum: cartNum
  })
}

initCartNum = async() =>{
  const res = await axios.get('/carts');
  const carts = res.data || [];
  const cartNum = carts
  .map(cart=>cart.mount)
  .reduce((a, value)=>a + value, 0)

  return cartNum;
}

render(){
    return(
      <div>
        <Toolbox search={this.search} cartNum={this.state.cartNum}/>
        <div className="products">
          <div className="columns is-multiline is-desktop">
            <TransitionGroup component={null}>
            {
              this.state.products.map(p => {
                return(
                  <CSSTransition classNames="product-fade" timeout={{enter:300,exit:300}} key={p.id}>
                  <div className="colunms is-3" key={p.id}>
                    <Product 
                      product={p} 
                      update={this.update} 
                      delete={this.delete}
                      updateCartNum={this.updateCartNum}
                      />
                  </div>
                  </CSSTransition>
                )
              })
            }
            </TransitionGroup>
          </div>
          <button className="button is-primary add-btn" onClick={this.toAdd}>add</button>
        </div>
      </div>
    )
  }
}

export default Products;