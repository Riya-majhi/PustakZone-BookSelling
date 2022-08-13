import React, { useEffect, useState } from 'react';
import "../BookTable/style.css";
import HeaderAdmin from '../../admin-components/HeaderAdmin';
import Sidebar from '../../admin-components/Sidebar';
import axios from 'axios';
import swal from 'sweetalert';



function Index(props) {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
 
    let componentMounted = true;
    useEffect(() => {
       const getProducts = async () => {
          setLoading(true);
          const response = await fetch("http://localhost:8999/orders/");
          if (componentMounted) {
             setData(await response.clone().json());
             setFilter(await response.json());
             setLoading(false);
             console.log(filter);
          }
          return () => {
             componentMounted = false;
          }
 
       }
       getProducts();
    }, []);
    
    const Loading = () => {
        return (
           <>
              {/* <Skeleton height={400} width={400}/> */}
              <div className="col-md-6">
                      <div class="d-flex justify-content-center">
                          <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                          </div>
                      </div>
  
                  </div>
           </>
        );
     }

     const delOrder=(id)=>{
        axios.delete(`http://localhost:9090/orders/${id}`).then(
            (response)=>{
                // navigate('/UserTable/')
                window.location.href="http://localhost:3000/OrderTable"
            },
            (error)=>{
                swal({
                    title: "Sorry",
                    text: "Something went wrong",
                    icon: "error",
                    button: "OK",
                  })
            }
        )
     }

    const ShowBookTable=()=>{
        var i=0;
        
        return(
            <>
                    <div class="table-wrapper">
                    <table class="fl-table" >
                        <thead>
                            <tr>
                                <th></th>
                                <th>Book-Title</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Customer Name</th>
                                <th>Address</th>
                                <th>Phone no.</th>
                                <th></th>

                            </tr>
                        </thead>
            {filter.map((order)=>{
                return(
                                        <tbody key={order.oId}>
                                            <tr>
                                                <td>{i=i+1}</td>
                                                <td>{order.bTitle}</td>
                                                <td>{order.bPrice.substring(0,order.bPrice.length-1)}</td>
                                                <td>{order.bGenre}</td>
                                                <td>{order.uName}</td>
                                                <td>{order.uAddress}</td>
                                                <td>{order.uPhone}</td>
                                                
                                                <td><button onClick={()=>{
                                                    delOrder(order.oId)
                                                }}><i class="fa-solid fa-trash-can"></i></button></td>
                                                <td></td>
                                                
                                            </tr>
                                            

                                            
                                        </tbody>
                    )
                })}
                    </table>
                </div>



                            


                               
                            
            </>
            
        )
    }

    return (

        <div className='style'>
            <div class="sb-nav-fixed">
                {/* ----------------------Nav Bar---------------------------- */}
                <HeaderAdmin />
                <div id="layoutSidenav">
                    {/* ------------------------side bar-------------------------- */}
                    <Sidebar />

                    <div id="layoutSidenav_content">
                        {/* ------------------------Main Content---------------------- */}

                        <main>
                            <div className="style">

                                <div class="one">
                                    <h1>Order Table</h1>
                                </div>
                              
                                            {loading ? <Loading /> : <ShowBookTable/>}
                        </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>




        //          {/* <table>
        //     <tr>
        //       <th>Name</th>
        //       <th>Age</th>
        //       <th>Gender</th>
        //     </tr>
        //     {data.map((val, key) => {
        //       return (
        //         <tr key={key}>
        //           <td>{val.name}</td>
        //           <td>{val.age}</td>
        //           <td>{val.gender}</td>
        //         </tr>
        //       )
        //     })}
        //   </table> */}
        // </div>
    );
}

export default Index;