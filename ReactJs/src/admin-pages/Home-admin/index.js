import React, { useEffect, useState } from 'react';
import "../style.css"
import HeaderAdmin from '../../admin-components/HeaderAdmin';
import Sidebar from '../../admin-components/Sidebar';


function Index(props) {

 

   const [book, setBook] = useState([]);
   const [user, setUser] = useState([]);
   const [order, setOrder] = useState([]);

   let componentMounted = true;
   useEffect(() => {
      const getProducts = async () => {
        //  setLoading(true);
        
         const countuser=await fetch("http://localhost:8999/count-user")
         const countbook=await fetch("http://localhost:9091/count-book")
         const countorder=await fetch("http://localhost:8999/count-order")
         if (componentMounted) {
            setBook(await countbook.clone().json());
            setUser(await countuser.clone().json());
            setOrder(await countorder.clone().json());
            
            
            
            console.log(user);
         }
         return () => {
            componentMounted = false;
         }

      }
      getProducts();
   }, []);
   const num=Number(book)+Number(user)+Number(order);
    
    
    // let componentMounted = true;
    // useEffect=(()=>{
    //     const getcounts = async ()=>{
           

    //        
    //             if (componentMounted) {
    //                 
    //                 console.log(book);
    //             }
    //             return () => {
    //                 componentMounted = false;
    //              }
            
    //     }
    //     getcounts();
    // },[]);

    return (
        
<div className='style'>
<div  class="sb-nav-fixed">
    {/* ----------------------Nav Bar---------------------------- */}
    <HeaderAdmin/>
<div id="layoutSidenav">
    {/* ------------------------side bar-------------------------- */}
    <Sidebar/>

    <div id="layoutSidenav_content">
    {/* ------------------------Main Content---------------------- */}

    <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4">Dashboard</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                        <div class="row">
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-primary text-white mb-4">
                                    <div class="card-body">Total Books</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        {book}
                                        {/* <a class="small text-white stretched-link" href="#">View Details</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div> */}
                                    </div>
                                </div>
                            </div>
                             
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-warning text-white mb-4">
                                    <div class="card-body">Customers</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        {user}
                                        {/* <a class="small text-white stretched-link" href="#">View Details</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-success text-white mb-4">
                                    <div class="card-body">Placed Orders</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        {order}
                                        {/* <a class="small text-white stretched-link" href="#">View Details</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-primary text-white mb-4">
                                    <div class="card-body">Total Entries</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        {num}
                                        {/* <a class="small text-white stretched-link" href="#">View Details</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
    </div>
</div>
</div>
</div>




    );
}

export default Index;