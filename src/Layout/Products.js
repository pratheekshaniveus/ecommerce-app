import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ALLPRODUCTS } from "./AllProducts";

const Products = () => {

  const [isSelected, setIsSelected] = useState(false);

  const addToWhishlist = (ALLPRODUCTS) => {
    if (ALLPRODUCTS.wishlist === "true") {
      setIsSelected(!isSelected);
      ALLPRODUCTS.wishlist = "false";
    } else {
      setIsSelected(!isSelected);
      ALLPRODUCTS.wishlist = "true";
    }
  };



  const [isSelectedcart, setIsSelectedcart] = useState(false);

  const addToCart1 = (ALLPRODUCTS) => {
    if (ALLPRODUCTS.incart === "true") {
      setIsSelectedcart(!isSelectedcart);
      ALLPRODUCTS.incart = "false";
    } else {
      setIsSelectedcart(!isSelectedcart);
      ALLPRODUCTS.incart = "true";
    }
  };

  return (
    <>
      <div className="products">
        {ALLPRODUCTS.map((ALLPRODUCTS, idx) => {
          const list = (
            <div className="product" >
              <img src={ALLPRODUCTS.productImage} alt="Product" />
              <div className="description">
                <p>
                  <b>{ALLPRODUCTS.productName}</b>
                </p>
                <p> &#8377;{ALLPRODUCTS.price}</p>
              </div>
              <div className="row ">
                {ALLPRODUCTS.wishlist === "true" ? (
                  <div
                    className="wishlist col-lg-6"
                    onClick={() => addToWhishlist(ALLPRODUCTS)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  </div>
                ) : (
                  <div
                    className=" col-lg-6"
                    onClick={() => addToWhishlist(ALLPRODUCTS)}
                  >
                    <Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="notwhislist bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </Link>
                  </div>
                )}
                {ALLPRODUCTS.incart === "true" ? (
                  <div className="col-lg-6">
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-cart-check-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                      </svg>
                    </Link>
                  </div>
                ) : (
                  <div
                    className="col-lg-6"
                    onClick={() => addToCart1(ALLPRODUCTS)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-cart-plus-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          );
          return list;
        })}
      </div>
    </>
  );
};

export default Products;
