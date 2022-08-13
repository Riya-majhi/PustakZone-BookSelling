import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import swal from 'sweetalert';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Index() {

    const navigate = useNavigate();
    // const url = "http://localhost:9090/login";
    // const [data, setData] = useState({
    //     email: "",
    //     password: ""
    // })

    // const [ck,setCk]=useState({
    //     email:""
    // })

    // function handle(e) {
    //     const newData = { ...data }
    //     newData[e.target.id] = e.target.value
    //     setData(newData)
    //     console.log(newData)
    // }
    // e.preventDefault();
    // Axios.post(url, {
    //     email: data.email,
    //     password: data.password
    // }).then(
    //     (response) => {

    //             swal({
    //                 title: "Good job!",
    //                 text: "Congrats!!! You have succesfully logged in",
    //                 icon: "success",
    //                 button: "OK",
    //             }).then((data) => {

    //                 navigate('/');
    //                 // <Link to="/"/>
    //             });

    //         console.log(response.data)
    //         console.log("success")
    //     },
    //     (error) => {
    //         swal({
    //             title: "Sorry",
    //             text: "You are not registered Yet!! Please Sign up",
    //             icon: "error",
    //             button: "OK",
    //         })


    //         console.log(error.data)
    //     }
    // )
    function formsubmit(e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const pwd = document.getElementById("password").value
        console.log(email)
        console.log(pwd)
        if (email === 'admin' && pwd === 'admin') {
            navigate('/Home-admin')
        }
        else {
            swal({
                title: "Sorry",
                text: "Invalid Credentials",
                icon: "error",
                button: "OK",
            })

        }
    }

    return (
        <>
            <Header />
            <section class="inner_page_head">
                <div class="container_fuild">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="full">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="signin">
                <div class="wrapper">
                    <div class="logo">
                        <img src="https://library.kissclipart.com/20181209/jje/kissclipart-open-book-green-clipart-book-cut-wide-open-a-blee-ff549e0ded261a28.jpg" alt="" />
                    </div>
                    <div class="text-center mt-4 name">
                        Admin Login
                    </div>
                    <form class="p-3 mt-3" onSubmit={(e) => formsubmit(e)}>
                        <div class="form-field d-flex align-items-center">
                            <span class="far fa-user"></span>
                            <input id='email' type="text" name="userName" placeholder="Username" />
                        </div>
                        <div class="form-field d-flex align-items-center">
                            <span class="fas fa-key"></span>
                            <input id='password' type="password" name="password" placeholder="Password" />
                        </div>
                        <button class="btn mt-3">Login</button>
                    </form>
                    {/* <div class="text-center fs-6">
                            <Link to="/Signup">New User? Sign-Up</Link>
                        </div> */}
                </div>
            </div>
            <Footer />
            {/* <Outlet /> */}
        </>);
}

export default Index;