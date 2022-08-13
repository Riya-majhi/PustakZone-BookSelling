import React, { useEffect, useState } from 'react';
import "../BookTable/style.css";
import HeaderAdmin from '../../admin-components/HeaderAdmin';
import Sidebar from '../../admin-components/Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

// const data = [
//     { name: "Anom", age: 19, gender: "Male" },
//     { name: "Megha", age: 19, gender: "Female" },
//     { name: "Subham", age: 25, gender: "Male" },
// ]

function Index(props) {
    const navigate=useNavigate();
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
 
    let componentMounted = true;
    useEffect
    (() => {
       const getProducts = async () => {
          setLoading(true);
          const response = await fetch("http://localhost:8999/users");
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

     const deluser=(email)=>{
        axios.delete(`http://localhost:9090/users/${email}`)
        .then(
            (response)=>{
                // navigate('/UserTable/')
                window.location.href="http://localhost:3000/UserTable"
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

     const ShowuserTable=()=>{

        var i=0;
        return(
            <>
                    <div class="table-wrapper">
                    <table class="fl-table" >
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email id</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>City</th>
                                <th></th>
                                

                            </tr>
                        </thead>
            {filter.map((user)=>{
                return(
                                        <tbody key={user.bId}>
                                            <tr>
                                                <td>{i=i+1}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td> 
                                                <td>{user.address}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.city}</td>
                                                
                                                <td><button onClick={()=>{
                                                    deluser(user.email)
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
                                    <h1>User Table</h1>
                                </div>


                                {loading ? <Loading /> : <ShowuserTable/>}
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