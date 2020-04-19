import React from 'react';
import '../css/app.scss'
import '../css/style.scss'
import Products from './Products';

class product extends React{

    render(){
        return(
            <div className="product">
                <div className="p-context">
                    <div className="img-wrapper">
                        <figure className="image is 4by3">
                            <img src="" alt=""/>
                        </figure>
                    </div>
                </div>
                <div className='p-footer'></div>
            </div>       
        )
    }
}

export default product