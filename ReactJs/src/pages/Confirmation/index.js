import Axios from 'axios';
import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import axios from 'axios';


function Confirmation(props) {


    const navigate = useNavigate();
    const { id } = useParams();
    const [book, setBook] = useState([]);
    const [user, setUser] = useState([]);
    const [data, setData] = useState({
        price: "",
        address: "",
        cat: ""
    },[])

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getBook = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:8999/book/${id}`);
            setBook(await response.json());
            axios.get(`http://localhost:9090/getCookie`).then(
                // console.log(cookie)
                (response) => {
                    const email = response.data
                    console.log(email)
                    Axios.get(`http://localhost:9090/users/${email}`).then(
                        (response) => {
                            setUser(response.data);

                        }
                    )

                }

            )
            setLoading(false);
        };
        getBook();

    }, []);

    var address = user.address + ", " + user.city;
    const addAddress = () => {
        const building = document.getElementById("Building_no").value;
        const city = document.getElementById("city").value;
        const state = document.getElementById("state").value;
        const pincode = document.getElementById("pincode").value;
        address = building + " " + pincode + " ," + city + " ," + state;
        document.getElementById("address").value = address;
        console.log(address)
        return address;
    }

    var book_option = [
        {
            value: book.bHPrice,
            label: "Hard Cover"
        },
        {
            value: book.bEPrice,
            label: "Ebook"
        }
    ];
    const [result, priceValue] = useState(book_option.value);
    const [cat, setCat] = useState(book_option.label);
    const price = (e) => {
        priceValue(e.value);
        setCat(e.label);
        if (e.label === "Ebook") {
            document.getElementById("myBtn").hidden = true;

        }
        if (e.label === "Hard Cover") {
            document.getElementById("myBtn").hidden = false;

        }
    }

  

    const url = `http://localhost:9090/orders/${book.bId}`;
    function formsubmit(e) {
        e.preventDefault();
        Axios.post(url, {
            price: document.getElementById("price").value,
            address:  document.getElementById("address").value,
            cat: cat
        }).then(
            (response) => {
                 var id=response.data;
                if(cat==="Hard Cover"){
                    navigate(`/PaperBookPayment/${id}`)
                }
                else if(cat=== "Ebook"){
                    navigate(`/EbookPayment/${id}`)
                }

            },
            (error) => {
                swal({
                    title: "Sorry!",
                    text: "An error Occured. Please Try again",
                    icon: "error",
                    button: "OK",
                })
            }
        );
        // const form= document.getElementById("form");

        //         } else {
        //             swal("Poof! Your booking is not done", {
        //                 icon: "warning",
        //             });
        //             return false;
        //         }
        //     });
        // return false;
    }





    return (
        <>
            <Header />
            <div class="">
                <div >
                    <div class="page-wrapper1 bg-red p-t-180 p-b-100 font-robo ">
                        <div class="wrapper1 wrapper--w960">
                            <div class="card1 card-2">
                                <div className='row py-4'>

                                    <div class="col-md-5 px-4">
                                        <img src={book.bImage} width={350} height={600}></img>
                                    </div>
                                    <div class="col-md-7 py-4">
                                        <div className='px-5'>

                                            <h2 class="title1">Check Out</h2>
                                            <form key={book.bId} onSubmit={(e) => formsubmit(e)} >
                                                <div class="input-group">
                                                    <strong>Book Name:</strong>   <input class="input--style-2 input1" type="text" value={book.bTitle} name="bname" />
                                                </div>
                                                <div class="input-group">
                                                    <strong>Delivery Address: <div class="p-t-30">
                                                        <a href="#" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" id="myBtn" style={{ color: 'red' }}>change address</a>
                                                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                            <div class="modal-dialog" role="document">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel">Add new Address</h5>
                                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <form id="Address-modal">


                                                                            <div class="form-group">
                                                                                <label for="message-text" class="col-form-label">Building No:</label>
                                                                                <input type="number" class="form-control" id="Building_no" />
                                                                            </div>
                                                                            <div class="form-group">
                                                                                <label for="message-text" class="col-form-label">City:</label>
                                                                                <input type="text" class="form-control" id="city" />
                                                                            </div>
                                                                            <div class="form-group">
                                                                                <label for="message-text" class="col-form-label">State:</label>
                                                                                <input type="text" class="form-control" id="state" />
                                                                            </div>
                                                                            <div class="form-group">
                                                                                <label for="message-text" class="col-form-label">Pin Code:</label>
                                                                                <input type="number" class="form-control" id="pincode" />
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                        <button type="button" onClick={addAddress} class="btn btn-outline-danger">Add Address</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div></strong>
                                                    <input class="input--style-2 input1" id="address" type="text" value={address} name="bname" />

                                                </div>

                                                {/* <div class="input-group">
                                                    <strong>Author:</strong>  <input class="input--style-2 input1" type="text" value={book.bAuthor} name="bauthor" />

                                                </div> */}


                                                <div class="input-group">
                                                    <div class="rs-select2 js-select-simple select--no-search">
                                                        <Select options={book_option} onChange={price} />
                                                        <div class="select-dropdown"></div>
                                                    </div>
                                                </div>
                                                {/* '₹ ' */}
                                                <div class="row1 row-space">
                                                    <div class="col-4">
                                                        <div class="input-group">
                                                            <strong>Book Price:</strong><input class="input--style-2 input1"  id='price' type="text" value={result} name="bprice" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="p-t-30">
                                                    <button className="cart-btn" type="submit">Order Now</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Confirmation;
