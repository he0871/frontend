import React from 'react'
import axios from '../commons/axios'
import {toast} from 'react-toastify'

class AddInventory extends React.Component{

    state = {
        name: '',
        price: '',
        tags: '',
        image: '',
        status: 'available'
    }

    handleChange = event =>{
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        })
    }

    submit = event =>{
        event.preventDefault();
        const product = this.state;
        console.log(product)
        axios.post('products',product).then(res=>{
            console.log(res.data)
            this.props.close(res.data) 
            toast.success('Add Success')
        });
        
    }

    render(){
        return(
            <div className="inventory">
                <p className="title has-text-centered">Inventory</p>
             <form onSubmit={this.submit}>
             <div className="field">
                    <div className="control">
                    <div className="label">Name</div>
                    <textarea className="textarea" name="name" value={this.state.name} onChange={this.handleChange}/>
                </div>
                </div>
                <div className="field">
                    <div className="control">
                    <label className="label">Price</label>
                        <input type="number" className="input" name="price" value={this.state.price} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                    <label className="label">Tags</label>
                        <input type="text" className="input" name="tags" value={this.state.tags} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Image</label>
                    <div className="control">
                        <input type="text" className="input" name="image" value={this.state.image} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Status</label>
                    <div className="select is-fullwidth">
                        <select name="status" value={this.state.status} onChange={this.handleChange}>
                            <option>available</option>
                            <option>unavailable</option>
                        </select>
                    </div>
                </div>
                
                <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button" type="button" onClick={() => {this.price.close()}}>Cancel</button>
                    </div>
                </div>
             </form>
            </div>
            
        )
    }
}

export default AddInventory;