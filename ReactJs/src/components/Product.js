import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function Product() {

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

   const filterProduct=(cat)=>{
      const updatedList=data.filter((x)=>x.bGenre===cat);
      setFilter(updatedList);
  }

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


   const ShowBooks = () => {
      return (
         <>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
               <button className="btn btn-outline-dark me-2 " onClick={()=>setFilter(data)}>All</button>
               <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Computer Books")}>Computer Books</button>
               <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Story Books")}>Story Books</button>
               <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("Commerce Books")}>Commerce Books</button>
           </div>
            {filter.map((books) => {
               return (
                  <>
                     {/* <div className="col-md-3 mb-4">
                           <div className="card h-100 text-center p-4" key={books.id} >
                               <img src={books.image} class="card-img-top" alt={books.bTitle} height="250px"/>
                                   <div className="card-body">
                                       <h5 className="card-title mb-0">{books.title}</h5>
                                       <p className="card-text lead fw-bold">${books.price}</p>
                                       <NavLink to={`/books/${books.id}`} className="btn btn-outline-dark">Buy Now
                                       </NavLink>
                                   </div>
                           </div>
                       </div> */}
                       <div class="col-sm-6 col-md-4 col-lg-4"  key={books.bId}>
                     <div class="box">
                        <div class="option_container">
                           <div class="options">
                              <li><Link class="option2" to={`/Book-details/${books.bId}`}>Quick View</Link></li>
                           </div>
                        </div>
                        <div class="img-box">
                           <img src={books.bImage} alt="" />
                        </div>
                        <div class="detail-box" >
                           <h6>
                              {books.bTitle}
                           </h6>
                        </div>
                        <div class="text-center" style={{fontWeight:'bold'}}>
                           <h6><strong>Paper Copy</strong>&nbsp;&nbsp;
                           <span class='price'>
                             <i class="fa fa-inr">  </i> {books.bHPrice}                      
                           </span>
                           </h6>
                        </div>
                        <div class="text-center">
                           <h6><strong>Ebook</strong> &nbsp;&nbsp;
                           <span class='price'>
                             <i class="fa fa-inr">  </i>{books.bEPrice}                      
                           </span>
                           </h6>
                        </div>
                     </div>
                  </div>

                  </>
               )

            })}



         </>
      )
   }





   return (
      <div>
         <Header/>
         <section class="product_section layout_padding">
            <div class="container">
               <div class="heading_container heading_center">
                  <h2>
                     Our <span>Books</span>
                  </h2>
               </div>
               <div class="row">
                  {loading ? <Loading /> : <ShowBooks />}
                  
                  </div>
            </div>
         </section>
         <Footer/>
      </div>
   );
}

export default Product;