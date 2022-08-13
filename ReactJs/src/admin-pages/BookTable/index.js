import React, { useEffect, useState } from 'react';
import "../BookTable/style.css";
import HeaderAdmin from '../../admin-components/HeaderAdmin';
import Sidebar from '../../admin-components/Sidebar';
import Axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';



function Index(props) {
    const navigate=useNavigate();
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
 
    let componentMounted = true;
    useEffect(() => {
       const getProducts = async () => {
          setLoading(true);
          const response = await fetch("http://localhost:8999/book");
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
     const url="http://localhost:8999/book"
     const delBook=(id)=>{

        Axios.delete(`http://localhost:9091/book/${id}`).then(
            (response)=>{
                // navigate('/UserTable/')
                window.location.href="http://localhost:3000/BookTable"
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
        var i=0
        
        return(
            <>
                    <div class="table-wrapper">
                    <table class="fl-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Price(Hard Cover)</th>
                                <th>Price(Ebook)</th>
                                <th>Publisher</th>
                                <th>Genre</th>
                                <th></th>
                                

                            </tr>
                        </thead>
            {filter.map((book)=>{
                return(
                                        <tbody key={book.bId}>
                                            <tr>
                                                <td>{i=i+1}</td>
                                                <td>{book.bTitle}</td>
                                                <td>{book.bAuthor}</td>
                                                <td>{book.bHPrice}</td>
                                                <td>{book.bEPrice}</td>
                                                <td>{book.bPublisher}</td>
                                                <td>{book.bGenre}</td>
                                                <td><button onClick={()=>{
                                                    delBook(book.bId)
                                                }}><i class="fa-solid fa-trash-can" ></i></button></td>
                                            
                                                {/* <td><button ><i class="fas fa-edit"></i></button></td> */}
                                                
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
                                    <h1>Book Table</h1>
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