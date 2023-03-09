import React from "react";
import Modal from "../Layout/Modal";

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div>
        <h1 style={{ color: "red" }}>Cart</h1>
        <h1>Hello</h1>
        <button onClick={props.onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default Cart;
