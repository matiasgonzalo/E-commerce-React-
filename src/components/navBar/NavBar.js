import React from 'react'
import { CardWidget } from '../cardWidget/CardWidget';
import AdminLTELogo from './assets/img/AdminLTELogo.png'

function NavBar() {
    return (
        <>
            {/** Navbar */}
            <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
                <div class="container">
                    <a href="/" class="navbar-brand">
                        <img src={AdminLTELogo} alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style={{ opacity: .8 }} />
                        <span class="brand-text font-weight-light">LTE Shop</span>
                    </a>

                    <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse order-3" id="navbarCollapse">
                        {/** Left navbar links */}
                        <ul className="navbar-nav">
                            {/**<li className="nav-item">
                                <a className="nav-link" data-widget="pushmenu" href="#javascript" role="button"><i className="fas fa-bars"></i></a>
                            </li>*/}
                            <li className="nav-item d-none d-sm-inline-block">
                                <a href="/" className="nav-link">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a id="dropdownSubMenu1" href="#javascript" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">Categories</a>
                                <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow">
                                    <li>
                                        <a href="#javascript" class="dropdown-item">Category 1 </a>
                                    </li>
                                    <li>
                                        <a href="#javascript" class="dropdown-item">Category 2</a>
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
