import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

const Navbar = () => {
  const [showAllModal, setshowcloseModal] = useState(false);
  const handleModalClose = () => setshowcloseModal(false);

  return (
    <>
      <header className="navbar ">
        <div className="navbar__title navbar__item">ShoppersStop</div>
        <div className="navbar__item">
          <Link
            to="Products"
            style={{ textDecoration: "none", color: "white" }}
          >
            Continue Shopping
          </Link>
        </div>
        <div className="navbar__item">
          <Link
            className="wishlist"
            to="/Wishlist"
            data-toggle="tooltip"
            data-placement="top"
            title="Your Wishlist is Waiting"
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
          </Link>
        </div>
        <div className="navbar__item">
          <Link
            className="cart"
            to="/Cart"
            data-toggle="tooltip"
            data-placement="top"
            title="Go to your Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-cart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </Link>
        </div>
      </header>

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
          <Form>
            <div className="container">
              <div className="col-lg-12">
                <label className="form-check-label">Username : </label>
                <input className="form-control" type="text" required />
              </div>
              <div className="col-lg-12">
                <label className="form-check-label">Password : </label>
                <input className="form-control" type="password" required />
              </div>
              <div className="col-lg-12 py-3">
                <button type="submit" className="btn btn-light btn-lg vcenter">
                  Login
                </button>
              </div>
              <div className="col-lg-12 vcenter py-3 float-left ">
                <button type="submit" className="btn btn-secondary btn-lg">
                  Login as Guest
                </button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navbar;
