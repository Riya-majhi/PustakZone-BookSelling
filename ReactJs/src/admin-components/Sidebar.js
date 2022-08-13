import React from 'react';
import {Link, Outlet } from 'react-router-dom';
import "../admin-pages/style.css";


function Sidebar(props) {
    return (


            <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Core</div>
                            <Link class="nav-link" to="/Home-admin">
                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard</Link>
                            {/* <div class="sb-sidenav-menu-heading">Interface</div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Layouts
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a> */}
                            {/* <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div> */}
                            {/* <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Pages
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a> */}

                            <div class="sb-sidenav-menu-heading">Tables</div>

                            <Link class="nav-link" to="/UserTable">
                            <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                            User Table
                            </Link>

                            <Link class="nav-link" to="/BookTable">
                            <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                            Book Table
                            </Link>
                            <Link class="nav-link" to="/OrderTable">
                            <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                            Order Table
                            </Link>
                            <Link class="nav-link" to="/AddBook">
                            <div class="sb-nav-link-icon"><i class="fas fa-form"></i></div>
                            Add Book
                            </Link>
                                
                        </div>
                    </div>
                    {/* <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        Start Bootstrap
                    </div> */}
                </nav>
            </div>
            <div id="layoutSidenav_content">

            </div>
        </div>


    );
}

export default Sidebar;