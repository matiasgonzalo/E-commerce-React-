import React from 'react'
import { CardWidget } from '../cardWidget/CardWidget';
import AdminLTELogo from './assets/img/AdminLTELogo.png'

function NavBar() {
    return (
        <>
            {/** Navbar */}
            <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        <img src={AdminLTELogo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: .8 }} />
                        <span className="brand-text font-weight-light">LTE Shop</span>
                    </a>

                    <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                        {/** Left navbar links */}
                        <ul className="navbar-nav">
                            {/**<li className="nav-item">
                                <a className="nav-link" data-widget="pushmenu" href="#javascript" role="button"><i className="fas fa-bars"></i></a>
                            </li>*/}
                            <li className="nav-item d-none d-sm-inline-block">
                                <a href="/" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a id="dropdownSubMenu1" href="#javascript" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Categories</a>
                                <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
                                    <li>
                                        <a href="#javascript" className="dropdown-item">Category 1 </a>
                                    </li>
                                    <li>
                                        <a href="#javascript" className="dropdown-item">Category 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <a href="#javascript" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                    {/** Right navbar links */}
                    <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
                        <CardWidget />
                    </ul>
                </div>
            </nav>
            {/** /.navbar */}
        </>
    );
}

export default NavBar;
