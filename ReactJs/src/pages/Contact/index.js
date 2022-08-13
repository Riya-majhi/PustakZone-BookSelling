import Axios  from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Index(props) {
   const navigate=useNavigate();
    const url="http://localhost:9092/contact";
    const[data,setData]=useState({
        name:"",
        email:"",
        subject:"",
        message:""   
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
            subject:data.subject,
            message:data.message
        }).then(
            (response)=>{
               
                    swal({
                        title: "Sorry",
                        text: response.data,
                        icon: "info",
                        button: "OK",
                      }).then((data)=>{
                        navigate('/');
                      });
               
                console.log(response.data)
                console.log("success")
            },
            (error)=>{
                swal({
                    title: "Sorry",
                    text: "Some error Occured , Try Again!!",
                    icon: "error",
                    button: "OK",
                  })

                  
                console.log("error")
            }
        )

    }
    return (
        <div>
         <Header/>

{/* <!-- inner page section --> */}
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
      {/* <!-- end inner page section -->
      <!-- why section --> */}
      <section class="why_section layout_padding">
         <div class="container">      
            <div class="row">
               <div class="col-lg-8 offset-lg-2">
                  <div class="full">
                  <h3 class="text-center">Contact Us</h3>
                     <form onSubmit={(e)=>formsubmit(e)}>
                        <fieldset>
                           <input onChange={(e)=>handle(e)} id='name' value={data.name} type="text" placeholder="Enter your full name" name="name" required />
                           <input onChange={(e)=>handle(e)} id='email' value={data.email} type="email" placeholder="Enter your email address" name="email" required />
                           <input onChange={(e)=>handle(e)} id='subject' value={data.subject} type="text" placeholder="Enter subject" name="subject" required />
                           <textarea onChange={(e)=>handle(e)} id='message' value={data.message} placeholder="Enter your message" ></textarea>
                           <input type="submit" value="Submit" />
                        </fieldset>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <Footer/>
            
        </div>
    );
}

export default Index;