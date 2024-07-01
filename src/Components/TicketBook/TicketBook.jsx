import React, { useState } from "react";
import "./ticketbook.css";
import card1 from "../../assets/img/card1.jpg";
import card1Img from "../../assets/img/card1.jpg";
import card2Img from "../../assets/img/card2.avif";
import card3Img from "../../assets/img/card3.avif";
import card4Img from "../../assets/img/card4.avif";
import card5Img from "../../assets/img/card5.avif";
import { useNavigate, useParams } from "react-router-dom";
const TicketBook = () => {
  const [selectId, setSelectId] = useState([
    {
      id: 1,
      name: "Jhamkudi",
      type: "Comedy/Horror/Mystery",
      img: card1Img,
      ua: "UA",
      viewType: "2D",
      date: "31 May, 2024",
    },
    {
      id: 2,
      name: "Munjya",
      type: "Comedy/Horror",
      img: card2Img,
      ua: "UA",
      viewType: "2D",
      date: "15 June, 2024",
    },
    {
      id: 3,
      name: "Hamare Baarah",
      type: "Drama",
      img: card3Img,
      ua: "U",
      viewType: "2D",
      date: "20 July, 2024",
    },
    {
      id: 4,
      name: "Jahangir National University",
      type: "Drama",
      img: card4Img,
      ua: "U",
      viewType: "3D",
      date: "5 August, 2024",
    },
    {
      id: 5,
      name: "Chandu Champion",
      type: "Biography/Drama/Sports",
      img: card5Img,
      ua: "U",
      viewType: "2D",
      date: "25 December, 2024",
    },
  ]);
  const { postId } = useParams();
  let nevigate = useNavigate();
  let {name} = useParams()
  let movie = selectId.find((item) => item.id === parseInt(postId));
  
  const gotoSeatSelect = () => {
    localStorage.setItem('movieName',JSON.stringify(movie.name))
    nevigate(`../BookSeat/${movie.name}`);
  };
  return (
    <>
      <div className="bg-color">
        <div className="container h-100 my-5">
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <div className="row w-100">
              <div className="col-md-4">
                <div className="tickietbookimg">
                  <img
                    src={movie.img}
                    alt="Movie Poster"
                    className="w-100 h-100"
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="ticketbook-body">
                  <p className="name">Name : {movie.name}</p>
                  <p className="ua">UC : {movie.ua}</p>
                  <p className="viewType">2D/3D : {movie.viewType}</p>
                  <p className="date">Release Date : {movie.date}</p>
                  <div className="booking-btn d-flex justify-content-start align-items-center w-100 mt-3">
                    <div
                      className="btn btn-primary"
                      onClick={() => gotoSeatSelect(movie.id)}
                    >
                      Book Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketBook;
