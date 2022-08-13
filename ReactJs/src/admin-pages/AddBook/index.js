import Axios  from 'axios';
import swal from 'sweetalert';
import React, { useState } from 'react';
import HeaderAdmin from '../../admin-components/HeaderAdmin';
import Sidebar from '../../admin-components/Sidebar';
import { useNavigate } from 'react-router-dom';



function Index(props) {

    const navigate=useNavigate();
    const url="http://localhost:9091/book";
    const[data,setData]=useState({
        bId:"",
        bTitle:"",
        bHPrice:"",
        bEPrice:"",
        bGenre:"",
        bAuthor:"",
        bPublisher:"",
        bSummary:"",
        bImage:""   
    })

    function handle(e){
        const newData={...data}
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(newData)
    }


    function formsubmit(e){
        e.preventDefault();
        Axios.post(url,{
            bId:data.bId,
            bTitle:data.bTitle,
            bHPrice:data.bHPrice,
            bEPrice:data.bEPrice,
            bGenre:data.bGenre,
            bAuthor:data.bAuthor,
            bPublisher:data.bPublisher,
            bSummary:data.bSummary,
            bImage:data.bImage  
        }).then(
            (response)=>{
                swal({
                    title: "Good job!",
                    text: "Congrats!!! Your information is Registered",
                    icon: "success",
                    button: "OK",
                  }).then((data)=>{
                    navigate('/BookTable/');
                  });
            
                
                console.log(response.data)
                console.log("success")
            },
            (error)=>{
                swal({
                    title: "Sorry",
                    text: "User Already Exists Please SignIn",
                    icon: "error",
                    button: "OK",
                  })

                  
                console.log("error")
            }
        )

    }
    return (

        <div >
            <div class="sb-nav-fixed">
                {/* ----------------------Nav Bar---------------------------- */}
                <HeaderAdmin />
                <div id="layoutSidenav">
                    {/* ------------------------side bar-------------------------- */}
                    <Sidebar />

                    <div id="layoutSidenav_content" style={{backgroundColor:'#ADD8E6'}}>
                        {/* ------------------------Main Content---------------------- */}

                        <main class="col-6 offset-3 mt-2" >

                            <h3 class="bg-info p-2 text-center">Book Registration</h3>
                            <form class="bg-light p-4" onSubmit={(e)=>formsubmit(e)}>
                                
                                <div class="form-group">
                                    <label for="user_email">Book ISBN Number</label>
                                    <input type="number" onChange={(e)=>handle(e)} name="user_title" id="bId" class="form-control"/>
                                        <div id="emailErr"></div>
                                </div>
                                <div class="form-group">
                                    <label for="user_email">Book Title</label>
                                    <input type="text" onChange={(e)=>handle(e)} name="user_title" id="bTitle" class="form-control"/>
                                        <div id="emailErr"></div>
                                </div>
                                <div class="form-group">
                                    <label for="user_name">Book Price for Hard Copy</label>
                                    <input type="text" onChange={(e)=>handle(e)} name="user_phard" id="bHPrice" class="form-control"/>
                                        <div id="nameErr"></div>
                                </div>
                                <div class="form-group">
                                    <label for="user_name">Book Price for Ebook</label>
                                    <input type="text" onChange={(e)=>handle(e)} name="user_eprice" id="bEPrice" class="form-control"/>
                                        <div id="nameErr"></div>
                                </div>
                                <div class="form-group">
                                    <label for="user_name">Genre</label>
                                    <input type="text" onChange={(e)=>handle(e)} name="user_genre" id="bGenre" class="form-control"/>
                                        <div id="nameErr"></div>
                                </div>
                                <div class="form-group">
                                    <label for="user_name">Author</label>
                                    <input type="text" onChange={(e)=>handle(e)} name="user_author" id="bAuthor" class="form-control"/>
                                        <div id="nameErr"></div>
                                </div>
                                <div class="form-group">
                                    <label for="user_name">Publisher</label>
                                    <input type="text" onChange={(e)=>handle(e)} name="user_name" id="bPublisher" class="form-control"/>
                                        <div id="nameErr"></div>
                                </div>
                                <div class="form-group">
                                    <label for="user_name">Summary</label>
                                    <input type="text" onChange={(e)=>handle(e)} name="user_summary" id="bSummary" class="form-control"/>
                                        <div id="nameErr"></div>
                                </div>
                                <div class="form-group">
                                    <label for="user_name">Upload Image</label>
                                    <input type="text" onChange={(e)=>handle(e)} name="user_image" id="bImage" class="form-control"/>
                                        <div id="nameErr"></div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-outline-danger" name="register-btn">Register</button>
                                </div>

                                <div class="text-white p-3 mt-3 text-center bg-dark">Designed by love and care</div>
                            </form>
                            {/* <div className='style'>
                            <div class="container">

                                <div class="d-flex">
                                    <form action="" method="">
                                        <label>
                                            <span class="fname">First Name <span class="required">*</span></span>
                                            <input type="text" name="fname"/>
                                        </label>
                                        <label>
                                            <span class="lname">Last Name <span class="required">*</span></span>
                                            <input type="text" name="lname"/>
                                        </label>
                                        <label>
                                            <span>Company Name (Optional)</span>
                                            <input type="text" name="cn"/>
                                        </label>

                                        <label>
                                            <span>Street Address <span class="required">*</span></span>
                                            <input type="text" name="houseadd" placeholder="House number and street name" required/>
                                        </label>
                                        <label>
                                            <span>&nbsp;</span>
                                            <input type="text" name="apartment" placeholder="Apartment, suite, unit etc. (optional)"/>
                                        </label>
                                        <label>
                                            <span>Town / City <span class="required">*</span></span>
                                            <input type="text" name="city"/>
                                        </label>
                                        <label>
                                            <span>State / County <span class="required">*</span></span>
                                            <input type="text" name="city"/>
                                        </label>
                                        <label>
                                            <span>Postcode / ZIP <span class="required">*</span></span>
                                            <input type="text" name="city"/>
                                        </label>
                                        <label>
                                            <span>Phone <span class="required">*</span></span>
                                            <input type="tel" name="city"/>
                                        </label>
                                        <label>
                                            <span>Email Address <span class="required">*</span></span>
                                            <input type="email" name="city"/>
                                        </label>
                                    </form>

                                </div>
                            </div>
                            </div> */}
                        </main>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Index;