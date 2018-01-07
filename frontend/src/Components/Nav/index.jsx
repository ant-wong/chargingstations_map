import React from 'react';
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <div className="navbar navbar-default" id="navigation">
        <div className="container-fluid">
          <div className="navbar-header">

            <img src="./images/plug.svg"
                 height="70"
                 width="70"
                 className="d-inline-block align-top"
                 alt="Brand" />

            <Link to="/" className="link">
              <span className="nav-buttons">Vancity Electric Auto</span>
            </Link>

            <Link to="/vancouver" className="link">
              <span className="nav-buttons">Attractions</span>
            </Link>

            <Link to="/map" className="link">
              <span className="nav-buttons">Map</span>
            </Link>

          </div>
        </div>
      </div>
    )
  }
}

export default Nav;