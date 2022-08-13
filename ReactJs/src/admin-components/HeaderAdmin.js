import React from 'react';
import {Link, Outlet } from 'react-router-dom';
import "../admin-pages/style.css";


function HeaderAdmin(props) {
    return (

        <>
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/* <!-- Navbar Brand--> */}
            {/* <a class="navbar-brand ps-3" href="index.html">PustakZone</a> */}
            <Link class="nav-link navbar-brand ps-3" to="/Home-admin">Admin</Link>
            {/* <!-- Navbar Search--> */}
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    {/* <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button> */}
                </div>
            </form>
            {/* <!-- Navbar--> */}
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <Link to="/" class="nav-link " ><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</Link>
                    {/* <Link class="nav-link" to="/">Logout</Link> */}
                    {/* <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul> */}
                </li>
            </ul>
        </nav>

    </>


        
//         <div>
//             {/* <!-- top navigation bar --> */}
//             <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//       <div class="container-fluid">
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="offcanvas"
//           data-bs-target="#sidebar"
//           aria-controls="offcanvasExample"
//         >
//           <span class="navbar-toggler-icon" data-bs-target="#sidebar"></span>
//         </button>
//         <a
//           class="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
//           href="#">PustakZone Admin</a
//         >
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#topNavBar"
//           aria-controls="topNavBar"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="topNavBar">
//           <form class="d-flex ms-auto my-3 my-lg-0">
//             <div class="input-group">
//               <input
//                 class="form-control"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button class="btn btn-primary" type="submit">
//                 <i class="bi bi-search"></i>
//               </button>
//             </div>
//           </form>
//           <ul class="navbar-nav">
//             <li class="nav-item dropdown">
//               <a
//                 class="nav-link dropdown-toggle ms-2"
//                 href="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 <i class="bi bi-person-fill"></i>
//               </a>
//               <ul class="dropdown-menu dropdown-menu-end">
//                 <li><a class="dropdown-item" href="#">Action</a></li>
//                 <li><a class="dropdown-item" href="#">Another action</a></li>
//                 <li>
//                   <a class="dropdown-item" href="#">Something else here</a>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//     {/* <!-- top navigation bar --> */}
//     {/* <!-- offcanvas --> */}
//     <div
//       class="sidenav sidebar-nav bg-dark"
//       tabindex="-1"
//       id="sidebar"
//     >
//       <div class="offcanvas-body p-0">

//         <nav class="navbar-dark">
//           <ul class="navbar-nav">
//             <li>
//               <div class="text-muted small fw-bold text-uppercase px-3">
//                 CORE
//               </div>
//             </li>
//             <li>
//               <a href="#" class="nav-link px-3 active">
//                 <span class="me-2"><i class="bi bi-speedometer2"></i></span>
//                 <span>Dashboard</span>
//               </a>
//             </li>
//             <li class="my-4"><hr class="dropdown-divider bg-light" /></li>
//             <li>
//               <div class="text-muted small fw-bold text-uppercase px-3 mb-3">
//                 Interface
//               </div>
//             </li>
//             <li>
//               <a
//                 class="nav-link px-3 sidebar-link"
//                 data-bs-toggle="collapse"
//                 href="#layouts"
//               >
//                 <span class="me-2"><i class="bi bi-layout-split"></i></span>
//                 <span>Layouts</span>
//                 <span class="ms-auto">
//                   <span class="right-icon">
//                     <i class="bi bi-chevron-down"></i>
//                   </span>
//                 </span>
//               </a>
//               <div class="collapse" id="layouts">
//                 <ul class="navbar-nav ps-3">
//                   <li>
//                     <a href="#" class="nav-link px-3">
//                       <span class="me-2"
//                         ><i class="bi bi-speedometer2"></i
//                       ></span>
//                       <span>Dashboard</span>
//                     </a>
//                     <Link class="nav-link px2" to="/BookTable"><span class="me-2"><i class="bi bi-table"></i></span><span>Book Table</span></Link>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//             <li>
//               <a href="#" class="nav-link px-3">
//                 <span class="me-2"><i class="bi bi-book-fill"></i></span>
//                 <span>Pages</span>
//               </a>
//             </li>
//             <li class="my-4"><hr class="dropdown-divider bg-light" /></li>
//             <li>
//               <div class="text-muted small fw-bold text-uppercase px-3 mb-3">
//                 Addons
//               </div>
//             </li>
//             <li>
//               <a href="#" class="nav-link px-3">
//                 <span class="me-2"><i class="bi bi-graph-up"></i></span>
//                 <span>Charts</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" class="nav-link px-3">
//                 <span class="me-2"><i class="bi bi-table"></i></span>
//                 <span>Tables</span>
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
// <Outlet/>

//         </div>
    );
}

export default HeaderAdmin;