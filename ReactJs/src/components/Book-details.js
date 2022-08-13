import Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useParams,useNavigate,Link,Redirect, Route } from 'react-router-dom';
import swal from 'sweetalert';
import Confirmation from '../pages/Confirmation';
import Footer from './Footer';
import Header from './Header';




function Bookdetails(props) {
    const navigate=useNavigate();
    const { id } = useParams();
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getBook = async () => {
            setLoading(true);
                    const response = await fetch(`http://localhost:8999/book/${id}`);
                    setBook(await response.json());
                    setLoading(false);
        };
        getBook();

    }, []);

    const Loading = () => {
        return (
            <>

                <div className="col-md-6">
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>

                </div>
            </>
        )
    }
    const url="http://localhost:9090/getCookie";
    
    const checkCookie=(e)=>{
        e.preventDefault();
        Axios.get(url).then(
            (response)=>{
                console.log(response.data);
                navigate(`/Confirmation/${book.bId}`);              
            },
            (error)=>{
                
                swal({
                    title: "Sorry!",
                    text: "You are not logged in",
                    icon: "error",
                    button: "OK",
                })
            }
                
                    // <Link to='Confirmation'/>
                    // window.location.href = "http://localhost:3000/";
              
            
        )
    }
    const ShowBook = () => {
        return (
            <>
            {/* <div className="row py-4">
                <div class="col-md-6">
                    <img data-image="red" src={book.bImage} alt={book.bTitle} />
                </div>
               
                <div class="col-md-6">

                   
                    <div class="prod-description">
                        <span>{book.bGenre}</span>
                        <div class="heading_container heading_center"></div>
                        <h1>{book.bTitle}</h1>
                        <h3>Author: {book.bAuthor}</h3>
                        <p>{book.bSummary}</p>
                    </div>

                  
                    <div class="prod-price">
                        <span>₹ {book.bHPrice}</span>
                        <a href="#" class="cart-btn">Buy Now</a>

                    </div>
                </div>
            </div> */}
                <div className="row py-4" key={book.bId}>


                    <div className="col-md-4">
                        <img src={book.bImage} alt={book.bTitle} height="400px" width="300px" />
                    </div>
                    <div className="col-md-8
                    ">
                        <h4 className='text-uppercase text-black-50'>
                            {book.bGenre}
                        </h4>
                        <h1 className='display-5'>{book.bTitle}</h1>
                        {/* <p className='lead fw-bolder'>
                            Rating {book.rating && book.rating.rate}
                            <i className='fa fa-star'></i>
                        </p> */}
                        <h4 className="prod-price ">
                        <div>
                        <strong>Paper Copy</strong>&nbsp;&nbsp;
                            ₹ {book.bHPrice}

                        </div>
                        </h4>
                        <h4 className="prod-price ">
                        <div>
                        <strong>Ebook </strong>&nbsp;&nbsp;
                            ₹ {book.bEPrice}

                        </div>
                        </h4>
                        <h3 className='lead fw-bolder'>Author: {book.bAuthor}</h3>
                        <div className="lead py-3">{book.bSummary}</div>
                        <Link to="" className="cart-btn" onClick={(e)=>checkCookie(e)}
                           >                           
                            Buy Now
                        </Link>
                        {/* <Link to={ `Confirmation/${book.bId}`} className="cart-btn" >
                            Buy Now
                        </Link> */}
                    </div>
                </div>
            </>

        );
    }


    return (
        <div >
            <Header/>

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
            {/* <div  style={{marginTop:"75px"}}>
            <h2 class="text-center">Book Details</h2>
            </div> */}

            <div class="heading_container heading_center" style={{ marginTop: "75px" }}>
                <h2>
                    Book <span>Details</span>
                </h2>
            </div>


            <div class="container" style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "15px",
                display: "flex",
                marginBottom: "20px",
                marginTop: "4px"
            }}>

                <div>

                    <div >
                        {loading ? <Loading /> : <ShowBook />}
                    </div>
                </div>

            </div>
            <Footer/>
        </div>

    );
}

export default Bookdetails;