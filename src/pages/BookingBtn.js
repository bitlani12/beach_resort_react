import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalExample from "./BookingModal";

const BookingBtn = (props) => {
  const { hotelName, price, size } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <React.Fragment>
      <Link to="#" onClick={toggle} className="btn-primary">
        Book this room
      </Link>
      <ModalExample
        toggle={toggle}
        modal={modal}
        hotelName={hotelName}
        price={price}
        size={size}
      />
    </React.Fragment>
  );
};

export default BookingBtn;
