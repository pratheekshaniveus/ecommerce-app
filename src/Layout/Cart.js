import React, { useState } from "react";
import { ALLPRODUCTS } from "./AllProducts";
import Modal from "react-bootstrap/Modal";
import { NavLink as Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  let grandtotal = 0;
  const [showAllModal, setshowModal] = useState(false);
  const handleModalClose = () => setshowModal(false);

  const [showCheckoutModal, setshowCheckoutModal] = useState(false);
  const handleCheckoutModalClose = () => setshowCheckoutModal(false);

  const [isSelectedcart, setIsSelectedcart] = useState(false);

  const removeFromCart = (ALLPRODUCTS) => {
    setIsSelectedcart(!isSelectedcart);
    ALLPRODUCTS.incart = "false";
  };

  const oncheckout = (ALLPRODUCTS) => {
    setshowModal(true);
  };
  const [loginguest, setloginguest] = useState(false);

  const loginasGuest = () => {
    let loginguest = "true";
    setloginguest(loginguest);
    setshowModal(false);
    setshowCheckoutModal(true);
    
  };

  
  const registerandLogin = () => {
    let loginguest = "false";
    setloginguest(loginguest);
    setshowModal(false);
    setshowCheckoutModal(true);
   
  };
  const [countItem, setcountItem] = useState({});
  const [count, setCount] = useState(1);

  const additem = (ALLPRODUCTS) => {
    countItem[ALLPRODUCTS.id] = countItem[ALLPRODUCTS.id]
      ? countItem[ALLPRODUCTS.id] + 1
      : 1;
    setcountItem(countItem);
    setCount(count + 1);

    let showcount = countItem[ALLPRODUCTS.id];
    setCount(showcount);

    ALLPRODUCTS.count = showcount;
  };

  const removeitem = (ALLPRODUCTS) => {
    countItem[ALLPRODUCTS.id] = countItem[ALLPRODUCTS.id]
      ? countItem[ALLPRODUCTS.id] - 1
      : 0;
    setcountItem(countItem);
    setCount(count - 1);

    let showcount = countItem[ALLPRODUCTS.id];
    setCount(showcount);

    ALLPRODUCTS.count = showcount;
  };

  const [showdoneModal, setshowdoneModal] = useState(false);
  const handleDoneModalClose = () => setshowdoneModal(false);
  const onhowDoneModalChange = (e) => {
    if (e) {
      handleDoneModalClose();
    }
  };

  const onPlaceOrder = (e) => {
    e.preventDefault();
    setshowCheckoutModal(false);
    setshowdoneModal(true);
  };

  const navigate = useNavigate();

  const continueShopping = (ALLPRODUCTS) => {
    for (let i = 0; i < ALLPRODUCTS.length; i++) {
      ALLPRODUCTS[i].incart = "false";
    }
    setshowdoneModal(false);
    navigate("/");
  };
  const filteredProducts = ALLPRODUCTS.filter(
    (ALLPRODUCTS) => ALLPRODUCTS.incart === "true"
  );
 

  return (
    <>
      <div className="bodydiv">
        <div className="row col-lg-12 py-3">
          <div className="col-lg-10">
            <h1 className="headingcolor">My Cart</h1>
          </div>
          {filteredProducts.length > 0 && (
            <div className="col-lg-2 text-right">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => oncheckout(ALLPRODUCTS)}
              >
                Checkout to Buy
              </button>
            </div>
          )}
        </div>
        {filteredProducts.length > 0 ? (
          <>
            <div className="products">
              {ALLPRODUCTS.filter(
                (ALLPRODUCTS) => ALLPRODUCTS.incart === "true"
              ).map((ALLPRODUCTS, idx) => {
                const list = (
                  <div className="product">
                    <img
                      key="{ALLPRODUCTS}"
                      src={ALLPRODUCTS.productImage}
                      alt="Product"
                    />
                    <div className="description">
                      <p>
                        <b>{ALLPRODUCTS.productName}</b>
                      </p>
                      <p> &#8377;{ALLPRODUCTS.price}</p>
                    </div>
                    <div className="row col-lg-12">
                      <div className="col-lg-6">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => removeFromCart(ALLPRODUCTS)}
                        >
                          Remove From Cart
                        </button>
                      </div>
                      <div className="col-lg-3">
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => additem(ALLPRODUCTS)}
                        >
                          + {countItem[ALLPRODUCTS.id]}
                        </button>
                      </div>
                      <div className="col-lg-3">
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => removeitem(ALLPRODUCTS)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                );
                return list;
              })}
            </div>
          </>
        ) : (
          <>
           <h2 class="text-center headingcolor" >Your Cart is Empty</h2>
           <div className="text-center">
           <button 
              type="button"
              className="btn btn-warning btn-lg text-center"
              
            >
               <Link
            to="/"
            style={{ textDecoration: "none", color: "white" }}
          >
               Shop Now!!!
               </Link>
            </button>

           </div>
          
          </>
        )}
        
      </div>
      <Modal
        show={showAllModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <div className="col-lg-11">
            <h3 className="modal-title text-center">Login</h3>
          </div>
          <div className="col-lg-1">
            <svg
              onClick={handleModalClose}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="col-lg-12 text-center py-3  ">
              <button
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={() => loginasGuest("true")}
              >
                Login as Guest
              </button>&nbsp;
              <button
                type="button"
                className="btn btn-secondary btn-lg "
                onClick={() => registerandLogin("true")}
              >
                 Login
              </button>
            </div>

          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showCheckoutModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <div className="col-lg-11">
            <h3 className="modal-title text-center">
              Address and Payment Details
            </h3>
          </div>
          <div className="col-lg-1">
            <svg
              onClick={handleCheckoutModalClose}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              onPlaceOrder(e);
            }}
          >
            <div className="container">
            {loginguest !== "true" && (
              <>
              <h1>Login and Place Order</h1>

              <div className="row col-lg-12">
              <div className="col-lg-6 py-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col-lg-6 py-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              </div>
              </>
              ) }
              
              <h1>Payment Details</h1>
              <div className="row col-lg-12">
                <div className="col-lg-6 py-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-lg-6 py-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address line1"
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address line2"
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Zip Code"
                    required
                  />
                </div>

                <div>
                  <h1 className="py-3">Item Details</h1>
                  <table className="col-lg-12">
                    <tr>
                      <th>Item Name</th>
                      <th>Price </th>
                      <th>Qty</th>
                      <th>Total</th>
                    </tr>
                    <tbody>
                      {ALLPRODUCTS.filter(
                        (ALLPRODUCTS) => ALLPRODUCTS.incart === "true"
                      ).map((ALLPRODUCTS, idx) => {
                        let total = ALLPRODUCTS.price * 2;
                        grandtotal += total;
                        const list = (
                          <tr key={ALLPRODUCTS}>
                            <td>{ALLPRODUCTS.productName}</td>
                            <td>{ALLPRODUCTS.price}</td>
                            <td>
                              {ALLPRODUCTS.count > 0 ? ALLPRODUCTS.count : 1}
                            </td>
                            <td>{total}</td>
                          </tr>
                        );
                        return list;
                      })}
                    </tbody>
                  </table>
                  <div className="row col-lg-12 py-2 ">
                    <div className="col-lg-10 ml-3">
                      <h5>Grand Total:</h5>
                    </div>
                    <div className="col-lg-2">
                      <h5>{grandtotal}</h5>
                    </div>
                  </div>

                  <div className="row col-lg-12 py-2 ">
                    <button
                      type="submit"
                      value="submit"
                      className="btn btn-secondary btn-lg"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        show={showdoneModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <div className="col-lg-11">
            <h1 className="modal-title text-center" style={{ color: "green" }}>
              Order Placed
            </h1>
          </div>
          <div className="col-lg-1">
            <svg
              onClick={onhowDoneModalChange}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="col-lg-12 text-center py-3  ">
            <button
              type="button"
              className="btn btn-success btn-lg"
              onClick={() => continueShopping(ALLPRODUCTS)}
            >
              Continue Shopping
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Cart;
