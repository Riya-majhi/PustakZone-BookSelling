import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div class="hero_area">
        <section class="slider_section ">
            <div class="slider_bg_box">
               <img src="https://singaporemotherhood.com/wp-content/uploads/2016/06/iStock_85074351_MEDIUM-870x600.jpg" alt=""/>
            </div>
            <div id="customCarousel1" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <div class="container ">
                        <div class="row">
                           <div class="col-md-7 col-lg-6 ">
                              <div class="detail-box">
                                 <h1>
                                    <span>
                                   All you need 

                                    </span>
                                    
                                   Under one roof.
                                 </h1>
                                 <p>
                                 Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.
                                 </p>
                                 <div style={{fontSize:"15px" }}> - John Green, The Fault in Our Stars</div>
                                 <div class="btn-box">
                                    <Link to="/Products" class="btn1">
                                    Shop Now
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
               </div>

            </div>
         </section> 
        </div>
    );
}

export default Banner;