import Axios from 'axios';
import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Logo from '../../images/Pustakzone-lg.png';

function Header() {
   const navigate = useNavigate();
   const url = "http://localhost:9090/logout"
   const logout = (e) => {
      Axios.post(url).then(
         (response) => {
            navigate("/");
            swal({
               title: "Success",
               text: "You are successfully logged out",
               icon: "success",
               button: "OK",
            })
         },
         (error) => {
            swal({
               title: "Sorry",
               text: "You are not logged in",
               icon: "error",
               button: "OK",
            })
         }
      )
   }
   return (
      <>
         <header class="header_section">
            <div class="container">
               <nav class="navbar navbar-expand-lg custom_nav-container ">
                  <a class="navbar-brand" href="index.html"><img width="40" class="text-center" src={Logo} alt="#" /></a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                  </button>
                  <h2 class="logo-name">Pustak <span>zone</span></h2>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav">
                        <li class="nav-item active">
                           <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        {/* <li class="nav-item dropdown">
                           <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label"></span>Pages <span class="caret"></span></a>
                           <ul class="dropdown-menu">
                              <li><a href="about.html">About</a></li>
                              <li><a href="testimonial.html">Testimonial</a></li>
                           </ul>
                        </li> */}
                        <li class="nav-item">
                           <Link class="nav-link" to="/products">Products</Link>
                        </li>
                        <li class="nav-item">
                           <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item dropdown">
                           <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label"></span>Sign up/in <span class="caret"></span></a>
                           <ul class="dropdown-menu">
                              <li><Link class="nav-link" to="/Signin"><i class="fa fa-sign-in" aria-hidden="true"></i> &nbsp;Sign-In</Link></li>
                              <li><Link class="nav-link" to="/Signup"><i class="fa fa-user-plus" aria-hidden="true"></i> &nbsp;Sign-Up</Link></li>
                              <li><Link class="nav-link" to="/admin">Admin</Link> </li>

                           </ul>
                        </li>
                        <li class="nav-item">
                           <button class="nav-link" onClick={(e) => logout(e)}>Logout</button>
                        </li>
                        {/* <form class="form-inline">
                           <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                           <i class="fa fa-search" aria-hidden="true"></i>
                           </button>
                        </form> */}
                     </ul>
                  </div>
               </nav>
            </div>
         </header>
         <Outlet />
      </>
   );
}

export default Header;