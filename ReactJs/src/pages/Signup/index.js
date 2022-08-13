import React, { useState } from 'react';
import Axios from 'axios';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

// const SignUp = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '90vh',
//         backgroundImage: "url('https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg')",
//         backgroundRepeat: 'no-repeat'
      
//       }}
//     >
//   <div class="signup-form" style={{ backgroundColor:'white',padding:'20px'}}  >
//     <form action="/examples/actions/confirmation.php" method="post">
// 		<h2>Sign Up</h2>
// 		<p>Please fill in this form to create an account!</p>
// 		<hr/>
//         <div class="form-group">
// 			<div class="row">
// 				<div class="col"><input type="text" class="form-control" name="first_name" placeholder="First Name" required="required" /></div>
// 				<div class="col"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required" /></div>
// 			</div>        	
//         </div>
//         <div class="form-group">
//         	<input type="email" class="form-control"  name="email" placeholder="Email" required="required" />
//         </div>
// 		<div class="form-group">
//             <input type="password" class="form-control" name="password" placeholder="Password" required="required" />
//         </div>
// 		<div class="form-group">
//             <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
//         </div>        
//         <div class="form-group">
// 			<label class="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
// 		</div>
// 		<div class="form-group">
//             <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
//         </div>
//     </form>
// 	<div class="hint-text">Already have an account? <a href="#">Login here</a></div>
// </div>

      
//     </div>
//   );
// };

function SignUp(){


    const navigate=useNavigate();
    const url="http://localhost:9090/register";
    const[data,setData]=useState({
        name:"",
        email:"",
        address:"",
        city:"",
        phone:"",
        gender:"",
        password:"",
        cpwd:""   
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
            name:data.name,
            email:data.email,
            address:data.address,
            city:data.city,
            phone:data.phone,
            gender:data.gender,
            password:data.password,
            cpwd:data.cpwd
        }).then(
            (response)=>{
                if(response.data === "saved"){
                    swal({
                        title: "Good job!",
                        text: "Congrats!!! Your information is Registered",
                        icon: "success",
                        button: "OK",
                      }).then((data)=>{
                        navigate('/');
                      });
                }
                else if(response.data==="Not Equal"){
                    swal({
                        title: "Sorry",
                        text: "Password and Confirm Password must be same",
                        icon: "error",
                        button: "OK",
                      })
                }
                console.log(response.data)
                console.log("success")
            },
            (error)=>{
                swal({
                    title: "Sorry",
                    text: "User Already Exists Please SignIn",
                    icon: "error",
                    button: "OK",
                  }).then((data)=>{
                    window.location.href="http://localhost:3000/Signin";
                  })

                  
                console.log("error")
            }
        )

    }
  return(
    <>
    <Header/>
    <div class="signin ">
  <div class="wrapper">
  <div class="logo">
      <img src="https://library.kissclipart.com/20181209/jje/kissclipart-open-book-green-clipart-book-cut-wide-open-a-blee-ff549e0ded261a28.jpg" alt=""/>
  </div>
  <div class="text-center mt-4 name">
     Sign Up to Pustokzone
  </div>
  <form class="p-3 mt-3" onSubmit={(e)=>formsubmit(e)}>
      <div class="form-field d-flex align-items-center">
          <span class="fa fa-user"></span>
          {/* <input type="text" name="userName" id="userName" placeholder="Username"/> */}
   				<div class="col"><input onChange={(e)=>handle(e)} id='name' value={data.name} type="text" class="form-control" name="name" placeholder="Enter Name" required="required" /></div>
      </div>
      <div class="form-field d-flex align-items-center">
          <span class="fa fa-envelope"></span>
          <div class="col"><input onChange={(e)=>handle(e)} id='email' value={data.email} type="email" class="form-control" name="email" placeholder="Enter Email id" required="required" /></div>
      </div>
      <div class="form-field d-flex align-items-center">
          <span class="fa fa-map-marker"></span>
          <input onChange={(e)=>handle(e)} id='address' value={data.address} type="text" class="form-control"  name="address" placeholder="Enter Address" required="required" />
      </div>
      <div class="form-field d-flex align-items-center">
          <span class="fa fa-city"></span>
          <input onChange={(e)=>handle(e)} id='city' value={data.city} type="text" class="form-control" name="city" placeholder="Enter City" required="required" />
      </div>
      <div class="form-field d-flex align-items-center">
          <span class="fa fa-phone"></span>
          <input onChange={(e)=>handle(e)} id='phone' value={data.phone} type="phone" name="phone" placeholder="Enter Phone number"/>
      </div>
      <div class="form-field d-flex align-items-center">
          <span class="fa fa-genderless"></span>
          <select onChange={(e)=>handle(e)} id='gender' value={data.gender} className='form-control' name= "gender" placeholder='Choose Your gender'>
            <option name="select" value="select">Select</option>
            <option name="select" value="Male">Female</option>
            <option name="select" value="Female">Male</option>
          </select>
      </div>
      <div class="form-field d-flex align-items-center">
          <span class="fas fa-key"></span>
          <input onChange={(e)=>handle(e)} id='password' value={data.password} type="password" name="password" placeholder="Enter Password"/>
      </div>
      <div class="form-field d-flex align-items-center">
          <span class="fas fa-key"></span>
          <input onChange={(e)=>handle(e)} id='cpwd' value={data.cpwd} type="password" name="c_pwd"  placeholder="Repeat Password"/>
      </div>
      
      <button class="btn mt-3">SignUp</button>
  </form>
  <div class="text-center fs-6">
  <Link to="/Signin">Already have an Account? Sign in</Link>
  </div>
</div>
</div>
<Footer/>

    </>
);
}

export default SignUp;
