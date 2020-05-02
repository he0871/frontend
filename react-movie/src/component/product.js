import React from 'react';
import Panel from './Panel'
import axios from '../commons/axios'
import {toast} from 'react-toastify'
import {formatPrice} from '../commons/helper'
import EditInventory from './EditInventory';

class product extends React.Component{ 

    toEdit = () => {
        Panel.open({
            component: EditInventory,
            props: {
                product: this.props.product,
                deleteProduct: this.props.delete
            },
            callback: data => {
            console.log(data);
            this.props.update(data)
            }
        });
        
    };

    addCart = async() => {
        try{
        const {id, name, image, price} = this.props.product;

        const res = await axios.get(`/carts?productId=${id}`);
        const carts = res.data;
        console.log(carts)

        if (carts && carts.length > 0){
            const cart = carts[0];
            cart.mount += 1;
            await axios.put(`/carts/${cart.id}`,cart)
            this.props.updateCartNum()
        }else{
            const cart={
                productId: id,
                name,
                image,
                price,
                mount:1
            }
            await axios.post('/carts', cart).then(res=>{
                console.log(res.data)
                
            })
        }
        toast.success('Add cart success');
    }catch(error){
        toast.error('Add cart failed!')
    }
    }

    render(){
        const {name, image, tags, price, status} = this.props.product;
        const _pClass = {
            available : 'product',
            unavailable : 'product out-stock'
        };
        return(
            <div className={_pClass[status]}>
                <div className="p-content">
                    <div className="p-head has-text-right" onClick={this.toEdit}>
                        <span className="icon edit-btn">
                            <i className="fas fa-sliders-h"></i>
                        </span>
                    </div>
                    <div className="img-wrapper">
                        <div className="out-stock-text">Out of Stock</div>
                        <figure className="image is-4by3">
                            <img src={image} alt={name}/>
                        </figure>
                        <p className="p-tags">{tags}</p>
                        <p className="p-name">{name}</p>
                    </div>
                </div>
                <div className='p-footer'>
                    <p className="price">{formatPrice(price)}</p>
                    <button 
                        className="add-cart" 
                        disabled={status === 'unavailable'}
                        onClick={this.addCart}
                    >
                        <i className="fas fa-shopping-cart"></i>
                        <i className="fas fa-exclamation"></i>
                    </button>
                </div>
            </div>       
        )
    }
}

export default product