import logo from './Images/logo192.png'
//type rfce and enter (from extension ES7+)
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div className="py-2 pl-2" style={{borderBottom: "1px solid #777"}}>
            <img src={logo} alt="logo" style={{height:"35px",verticalAlign:"top"}}/>
            <span className="h2 pt-4 m-2 text-white-50">RouteOPedia</span>
        </div>

        {/* Copied from https://getbootstrap.com/docs/5.3/components/navbar/#supported-content */}
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink 
                            className={ ({isActive}) => isActive? "nav-link active text-info" : "nav-link" }
                            aria-current="page" 
                            to="/"
                        >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={ ({isActive}) => isActive? "nav-link active text-info" : "nav-link" }
                            to="/about"
                        >About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={ ({isActive}) => isActive? "nav-link active text-info" : "nav-link" } 
                            to="/cryptodetail/BTC"
                        >Crypto Detail</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Product
                        </a>
                        <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/product">Product</Link></li>
                        <li><Link className="dropdown-item" to="/product/details/001">Product Details</Link></li>
                        <li><Link className="dropdown-item" to="/product/list">Product List</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="/product/create">Create Product</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
  )
}
export default Header