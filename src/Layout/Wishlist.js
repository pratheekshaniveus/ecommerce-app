import React, { useState } from "react";
import { ALLPRODUCTS } from "./AllProducts";
import { NavLink as Link } from "react-router-dom";


const Wishlist = () => {
  const filteredWishlistProducts = ALLPRODUCTS.filter(
    (ALLPRODUCTS) => ALLPRODUCTS.wishlist === "true"
  );
 

  const [isSelected, setIsSelected] = useState(false);
  const removeFromWhishlist = (ALLPRODUCTS) => {
    setIsSelected(!isSelected);
    ALLPRODUCTS.wishlist = "false";
  };
  return (
    <div className="bodydiv">
      <h1 className="headingcolor">Wishlist & Collections</h1>
    
      {filteredWishlistProducts.length > 0 ? (         
      <div className="products">
        
        {ALLPRODUCTS.filter(
          (ALLPRODUCTS) => ALLPRODUCTS.wishlist === "true"
        ).map((ALLPRODUCTS, idx) => {
          const list = (
            <div className="product">
              <img key="{ALLPRODUCTS}" src={ALLPRODUCTS.productImage} alt="Product" />
              <div className="description">
                <p>
                  <b>{ALLPRODUCTS.productName}</b>
                </p>
                <p> &#8377;{ALLPRODUCTS.price}</p>
              </div>
              <div className="col-lg-6">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeFromWhishlist(ALLPRODUCTS)}
                >
                  Remove From Wishlist
                </button>
              </div>
            </div>
          );
          return list;
        })}
      </div>
      ):(
        <>
           <h2 class="text-center headingcolor" >Your Wishlist is Empty</h2>
           <div className="text-center">
           <button 
              type="button"
              className="btn btn-danger btn-lg text-center"
              
            >
               <Link
            to="/"
            style={{ textDecoration: "none", color: "white" }}
          >
               Wishlist Now!!!
               </Link>
            </button>

           </div>
          
          </>
      )}
      
    </div>
  );
};

export default Wishlist;
