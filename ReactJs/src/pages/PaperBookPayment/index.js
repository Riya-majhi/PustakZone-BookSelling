import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import "../EbookPayment/style.css";
/*
booktitle
price
cat
pic
username
delivery address */
var today = new Date();
var date = (today.getDate() + 7) + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[(today.getDay())];

function Index(props) {

    const navigate=useNavigate();
    const{id}=useParams()
    const[order,setOrder]=useState([])
    useEffect(() => {
        const getBook = async () => {
                const response = await fetch(`http://localhost:9090/orders/${id}`);
                setOrder(await response.json());
                const bid=order.bId;
                console.log(order)
                

        };
        getBook();

    }, []);
    function showCard(e){
        e.preventDefault();
                
                        swal({
                            title: "Congratulations!",
                            text: "Card Sucessfully added",
                            icon: "success",
                            button: "OK",
                        })
    

    }

    function showMessage(e){
        e.preventDefault();
        var msg= "Your order is successfully placed"
        swal({
            title: "Are you sure?",
            text: "Your order will be placed",
            icon: "info",
            buttons: true,
            dangerMode: true,
          })
          .then((isokay) => {
            if (isokay) {
              swal(msg, {
                icon: "success",
              }).then(
                navigate('/')
              );
            } else {
              swal("Poof! your order is not placed, Try Again",{
              icon:"error",});
            }
          });
    }
    return (
        <>
            <div className='style'>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mb-lg-0 mb-3">
                            <div class="card p-3">
                                <div class="img-box">
                                    <img src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png" alt="" />
                                </div>
                                <div class="number">
                                    <label class="fw-bold" for="">**** **** **** ****</label>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <small><span class="fw-bold">Expiry date:</span><span>**/**</span></small>
                                    <small><span class="fw-bold">Name:</span><span>*****</span></small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-lg-0 mb-3">
                            <div class="card p-3">
                                <div class="img-box">
                                    <img src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
                                        alt="" />
                                </div>
                                <div class="number">
                                    <label class="fw-bold">**** **** **** ****</label>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <small><span class="fw-bold">Expiry date:</span><span>**/**</span></small>
                                    <small><span class="fw-bold">Name:</span><span>*****</span></small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-lg-0 mb-3">
                            <div class="card p-3">
                                <div class="img-box">
                                    <img src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
                                        alt="" />
                                </div>
                                <div class="number">
                                    <label class="fw-bold">**** **** **** ****</label>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <small><span class="fw-bold">Expiry date:</span><span>**/**</span></small>
                                    <small><span class="fw-bold">Name:</span><span>*****</span></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="card p-3">
                                <p class="mb-0 fw-bold h4">Payment Methods</p>
                            </div>
                        </div>
                        <div class="col-12" style={{maxWidth:'2500px'}}>
                            <div class="card p-3">
                                <div class="card-body border p-0">
                                    <p>
                                        <a class="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                                            data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                                            aria-controls="collapseExample">
                                            <span class="fw-bold">Pay On Delivery</span>
                                            <span class="fab fa-cc-paypal">
                                            </span>
                                        </a>
                                    </p>
                                    <div class="collapse p-3 pt-0" id="collapseExample">
                                        <div class="row">
                                            <div class="col-8">
                                                <p class="h4 mb-0">{}</p>
                                                <p class="mb-0"><span class="fw-bold">Product:</span><span class="c-green">: {order.bTitle}</span></p>
                                                <p class="mb-0"><span class="fw-bold">Price:</span><span
                                                    class="c-green">:₹ {order.bPrice}</span></p>
                                                <p class="mb-0">
                                                    <span class="fw-bold">Delivery to:</span>
                                                    <span class="c-green">: {order.uName}, {order.uAddress}</span>

                                                </p>
                                                
                                                <p class="mb-0"><span class="fw-bold">Excected Delivery Date: </span><span
                                                    class="c-green">{date} ({day} )</span></p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body border p-0">
                                    <p>
                                        <a class="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                                            data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                                            aria-controls="collapseExample">
                                            <span class="fw-bold">Card Details</span>
                                            <span class="">
                                                <span class="fab fa-cc-amex"></span>
                                                <span class="fab fa-cc-mastercard"></span>
                                                <span class="fab fa-cc-discover"></span>
                                            </span>
                                        </a>
                                    </p>
                                    <div class="collapse show p-3 pt-0" id="collapseExample">
                                        <div class="row">
                                            <div class="col-lg-5 mb-lg-0 mb-3">
                                                <p class="h4 mb-0">Summary</p>

                                                <span class="c-green" id='cat' >{order.cat}</span>
                                                
                                                <p class="mb-0"><span class="fw-bold">Product:</span><span class="c-green" id='product'>: {order.bTitle}</span>
                                                </p>
                                                <p class="mb-0">
                                                    <span class="fw-bold">Price:</span>
                                                    <span class="c-green">:₹ {order.bPrice}</span>
                                                </p>
                                                <p class="mb-0">
                                                    <span class="fw-bold">Delivery to:</span>
                                                    <span class="c-green">: {order.uName}, {order.uAddress}</span>

                                                </p>
                                                <p class="mb-0"><span class="fw-bold">Excected Delivery Date: </span><span
                                                    class="c-green">{date} ({day} )</span></p>
                                            </div>
                                            <div class="col-lg-7">
                                                <form action="" class="form">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="form__div">
                                                                <input type="text" class="form-control" id='card'  required />
                                                                <label for="" class="form__label">Card Number</label>
                                                            </div>
                                                        </div>

                                                        <div class="col-6">
                                                            <div class="form__div">
                                                                <input type="text" class="form-control" id='date'   required/>
                                                                <label for="" class="form__label">MM / yy</label>
                                                            </div>
                                                        </div>

                                                        <div class="col-6">
                                                            <div class="form__div">
                                                                <input type="password" class="form-control" id='cvv' required/>
                                                                <label for="" class="form__label">cvv code</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="form__div">
                                                                <input type="text" class="form-control" id='name' required />
                                                                <label for="" class="form__label">name on the card</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="btn btn-primary w-100"><button onClick={showCard}>Submit</button></div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="btn btn-primary payment">
                                <button onClick={showMessage}>Make Payment  {order.bPrice}</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;