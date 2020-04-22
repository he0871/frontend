import React from 'react';
import Toolbox from './Toolbox'
import Product from './product'
import '../css/app.scss'
import '../css/style.scss'
import axios from '../commons/axios'

class Products extends React.Component{
 
state = {
  products: [],
  sourceProduct: []
};

componentDidMount(){
  /*execute after first render of this component*/
  

  axios.get('/products').then(response => {
    this.setState({
      products: response.data,
      sourceProduct : response.data
    })
    
  })
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

render(){
    return(
      <div>
        <Toolbox search={this.search}/>
        <div className="products">
          <div className="columns is-multiline is-desktop">
            {
              this.state.products.map(p => {
                return(
                  <div className="colunms is-3" key={p.id}>
                    <Product product={p}/>
                  </div>
                )
              })
            }
            
          </div>
        </div>
      </div>
    )
  }
}

export default Products;