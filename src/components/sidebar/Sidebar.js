import AdminLTELogo from './assets/img/AdminLTELogo.png'
import User2Img from './assets/img/user2-160x160.jpg'

function Sidebar() {
    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/** Brand Logo */}
                <a href="../../index3.html" className="brand-link">
                    <img src={AdminLTELogo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{
                        opacity: .8
                    }} />
                    <span className="brand-text font-weight-light">LTE Shop</span>
                </a>

                {/** Sidebar */}
                <div className="sidebar">
                    {/** Sidebar user */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={User2Img} className="img-circle elevation-2" alt="User" />
                        </div>
                        <div className="info">
                            <a href="#javascript" className="d-block">Matias Acosta</a>
                        </div>
                    </div>

                    {/** Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li class="nav-item">
                                <a href="#javascript" class="nav-link">
                                    <i class="nav-icon fas fa-th"></i>
                                    <p>
                                        Shop
                                        <span class="right badge badge-danger">New</span>
                                    </p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#javascript" class="nav-link">
                                    <i className="fas fa-globe-americas nav-icon"></i>
                                    <p>
                                        Contact us
                                        <span class="right badge badge-danger">New</span>
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/** /.sidebar-menu */}
                </div>
                {/** /.sidebar */}
            </aside>
        </>
    );
}

export default Sidebar;
