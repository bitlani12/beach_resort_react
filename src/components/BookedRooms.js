import React from "react";
import defaultImg from "../images/room-1.jpeg";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import Services from "./Services";
import FeaturedRooms from "./FeaturedRooms";
import Hero from "./Hero";

const BookedRooms = () => {
  const details = JSON.parse(localStorage.getItem("bookingDetails"));
  const deleteRoom = (e) => {
    const getRoom = JSON.parse(localStorage.getItem("bookingDetails"));
    getRoom.splice(e, 1);
    localStorage.setItem("bookingDetails", JSON.stringify(getRoom));
    window.location.href = "/booking-details";
  };
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
