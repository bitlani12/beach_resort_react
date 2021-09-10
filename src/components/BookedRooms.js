import React from "react";
import defaultImg from "../images/room-1.jpeg";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import Services from "./Services";
import FeaturedRooms from "./FeaturedRooms";
import Hero from "./Hero";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
const BookedRooms = () => {
  const Razorpay = useRazorpay();

  const details = JSON.parse(localStorage.getItem("bookingDetails"));
  const deleteRoom = (e) => {
    const getRoom = JSON.parse(localStorage.getItem("bookingDetails"));
    getRoom.splice(e, 1);
    localStorage.setItem("bookingDetails", JSON.stringify(getRoom));
    window.location.href = "/booking-details";
  };
  const pay=async (price , name)=>{
    // const handlePayment = async (params) => {
      // const order = await createOrder(params); //  Create order on your backend
    
      const options = {
        key: "rzp_test_vimjUbBffRSX16", // Enter the Key ID generated from the Dashboard
        amount: price*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: name,
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        // order_id: "order", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
        // handler: function (response) {
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
        // },
        prefill: {
          name: "Piyush Garg",
          email: "piyushgarg.dev@gmail.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new Razorpay(options);

  rzp1.on("payment.failed", function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });

  rzp1.open();
    
  }
  return (
    <>
      <Hero>
        <div className="col-md-12">
          <div className="row">
            {details && details.length
              ? details.map((el, index) => (
                  <div className="col-md-4">
                    <Banner
                      // title="Booked Room/resort"
                      subtitle={
                        details ? (
                          <table>
                            <tr>
                              {/* <th>Name</th>
                  <th>Price</th>
                  <th>Size</th> */}
                            </tr>
                            <tr>
                              <td>
                                Name: {el.name}
                                <br />
                                Date: {el.date}
                                <br />
                                Price: {el.price}
                                <br />
                                Size: {el.size}
                                <br />
                                {`  `}
                              </td>
                              <td>{`  `}</td>
                              <td>{`  `}</td>
                            </tr>
                          </table>
                        ) : (
                          "No bookings made yet"
                        )
                      }
                    />
                      <button
                      type="button"
                      style={{ float: "right" }}
                      className="btn btn-success ml-3"
                      onClick={() => pay(el.price, el.name)}
                    >
                      Pay
                    </button>
                    <button
                      type="button"
                      style={{ float: "right" }}
                      className="btn btn-danger"
                      onClick={() => deleteRoom(index)}
                    >
                      Delete
                    </button>
                  </div>
                ))
              : "No booking made yet"}
          </div>
        </div>
        {/* <Link to="/rooms" className="btn-primary">
            Submitted to UOR
          </Link> */}
      </Hero>
    </>
  );
};

export default BookedRooms;
