import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "../../styles/EditBookingDetails.css";
import Header from "./Header";
const EditBookingDetails = (editBookedcar) => {
  // const navigate = useNavigate();
  console.log(editBookedcar);
  const currentDate = new Date().toLocaleDateString(); // get current date in format MM/DD/YYYY
  const currentTime = new Date().toLocaleTimeString();
  return (
    <>
      <Header />
      <div className="EditBox flex">
        <div className="left-box Left-Edit-Section">
          <div>
            <h3 className="edit-title1">Edit Booking Details</h3>
          </div>

          <div>
            <div className="mid-div">
              <div>
                <p>Car Name</p>
                <p>Car Number</p>
              </div>

              <div>
                <h3>carname</h3>
                <p>MH 03 ZQ 1234</p>
              </div>

              <div className="mini-3rd-div-img">
                <img
                  src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?cs=srgb&dl=asphalt-auto-automobile-244206.jpg&fm=jpg"
                  alt="photo"
                />
              </div>
            </div>
          </div>

          <hr />

          <div>
            <div className="mid-div">
              <div>
                <p>Origin</p>
                <p>Destination</p>
                <p>Start Date</p>
                <p>End Date</p>
              </div>

              <div>
                <p>1</p>
                <p>2</p>
                <p>6</p>
                <p>2</p>
              </div>

              <div className="mini-3rd-div-img">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28788.78777019961!2d85.16637504100797!3d25.58502223107953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5f5876b1ada3%3A0xc899c99a139e72e8!2sMahindra%20Kiran%20Automobiles!5e0!3m2!1sen!2sin!4v1679926472552!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
          <hr />

          <div className="bottom-div">
            <div>
              <p>Booking ID </p>
              <p>Booking Date</p>
              <p>Booking Time</p>
            </div>
            <div>
              <p>id </p>
              <p>currentDate</p>
              <p>currentTime</p>
              <div>
                <Button className="cancel-btn" variant="primary">
                  Cancel
                </Button>
              </div>
            </div>
          </div>

          <hr />
        </div>

        <div className="right-box Right-Edit-Section">
          <div>
            <h3 className="edit2-title2">Payment Details</h3>
          </div>

          <div>
            <div className="price">
              <p>Price per km</p>
              <p>Rs perkm</p>
            </div>

            <div className="pricing">
              <p>Pricing</p>
              <p>Rs 150</p>
            </div>

            <div className="tax">
              <p>Tax Charges</p>
              <p>Rs BookedCar</p>
            </div>

            <hr />

            <div className="tax">
              <p>Sub Total</p>
              <p>Rs  150100</p>
            </div>
            <Button variant="primary" className="proceed-btn">
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBookingDetails;
