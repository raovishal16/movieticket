import React, { useEffect, useState } from "react";
import { MdChair } from "react-icons/md";
import "./bookseat.css";
import Popup from "../Popup/Popup";
import { useParams } from "react-router-dom";

const BookSeat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [ticketDetails, setTicketDetails] = useState(null);
  const [bookSeats, setBookSeats] = useState([]);
  const [perSeatPrice, setPerSeatPrice] = useState("");
  let { postName } = useParams();
  useEffect(() => {
    let storeTicket = JSON.parse(localStorage.getItem("tickets")) || [];
    let movieSelect = storeTicket.filter((x)=> x.movieName === postName)
    let bookseatticket = movieSelect.flatMap((ticket) => ticket.selectedSeats);
    setBookSeats(bookseatticket);
  }, []);

  const handleSeatClick = (seatNumber) => {
    let seatRow = seatNumber.charAt(0);
    let seatPrice =
      seatRow === "a" || seatRow === "b"
        ? 450
        : seatRow === "c" || seatRow === "d" || seatRow === "e"
        ? 350
        : seatRow === "f" || seatRow === "g" || seatRow === "h"
        ? 250
        : 150;
    setPerSeatPrice(seatPrice);
console.log(seatPrice ,'++++++');
    setSelectedSeats((prevSelectedSeats) => {
      const isSelected = prevSelectedSeats.includes(seatNumber);
      const newSelectedSeats = isSelected
        ? prevSelectedSeats.filter((seat) => seat !== seatNumber)
        : [...prevSelectedSeats, seatNumber];

      setTotalPrice((prevTotal) =>
        isSelected ? prevTotal - seatPrice : prevTotal + seatPrice
      );

      return newSelectedSeats;
    });
  };

  const generateSeats = () => {
    const seats = [];
    const groups = "abcdefghij".split("");
    groups.forEach((group) => {
      for (let i = 1; i <= 10; i++) {
        seats.push(`${group}${i}`);
      }
    });
    return seats;
  };

  const seats = generateSeats();
  const seatRows = [];
  for (let i = 0; i < seats.length; i += 10) {
    seatRows.push(seats.slice(i, i + 10));
  }

  const saveTicketDetails = () => {
   
      const newTicket = {
        price: totalPrice,
        seatPrice: parseInt(perSeatPrice),
        selectedSeats: selectedSeats,
      };
      setTicketDetails(newTicket);
      setIsPopupOpen(true);
    
  };

  const saveNameAndTickets = (name) => {
    const newTicket = { ...ticketDetails, name: name, movieName: postName , totleSeatPrice : totalPrice};
    const existingTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const updatedTickets = [...existingTickets, newTicket];
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
    const storedSeat = newTicket.selectedSeats;
    setBookSeats((preSeat) => [...preSeat, ...storedSeat]);
    setTotalPrice(0);
    setIsPopupOpen(false);
  };

  return (
    <div className="container-fluid px-3 py-3">
      <div className="d-flex justify-content-center w-100">
        <p className="book-dec">Select Seats</p>
      </div>
      <div className="seat-grid">
        {seatRows.map((row, index) => (
          <>
            <div className="d-flex justify-content-center align-items-center w-100 py-2">
              <p className="seat-type mb-0">
                {index === 0
                  ? "ROYAL RECLINER"
                  : index === 2
                  ? "ROYAL"
                  : index === 5
                  ? "CLUB"
                  : index === 8
                  ? "EXECUTIVE"
                  : ""}
              </p>
            </div>
            <div key={index} className="seat-row my-3">
              {row.map((seat, index) => (
                <div
                  key={index}
                  className={`seat d-flex align-items-center justify-content-center ${
                    
                    bookSeats.includes(seat)
                      ? "booked"
                      : selectedSeats.includes(seat)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleSeatClick(seat)}
                >
                  <MdChair className="seat-icon" />
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
      <div className="price-bar">
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="add-ticket d-flex align-items-center gap-3">
            <span className="fw-bold">
              TOTAL : <span>{totalPrice} Rs</span>
            </span>
            {/* <span className="fw-bold showseats">Seats :
             {
              selectedSeats.map((x)=>{
                return (
                  <>
                    {x}
                  </>
                )
              })
             }
              
            </span> */}
          </div>
          <div className="pay-ticket">
            <div
              className="btn btn-primary fw-semibold"
              onClick={saveTicketDetails}
            >
              Pay Now
            </div>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <Popup
          onClose={() => setIsPopupOpen(false)}
          onSave={saveNameAndTickets}
        />
      )}
    </div>
  );
};

export default BookSeat;
