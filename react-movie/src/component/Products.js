import React from 'react';
import Toolbox from './Toolbox'
import Product from './product'

class Products extends React.Component{
  render(){
    return(
      <div>
        <Toolbox/>
        <div className="products">
          <div className="columns is-multiline is-desktop">
            <div className="colunms is-3">
              <Product/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Products;