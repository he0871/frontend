import React, { Fragment } from 'react';
import '../css/app.scss'
import '../css/style.scss'

const Header = props => (

      <div className="header">
        <div className="grid">
          <div className="start">

          </div>
          <div className="end">
            {props.nickname ?(
              <span className="nickname">
                <i className="far fa-user"></i>
                {props.nickname}
              </span>
            ):(
              <Fragment>
                <a href = "/">Login</a>
                <a href = "/">Register</a>
              </Fragment>
            )}
          </div>

        </div>
      </div>
    
)

export default Header;