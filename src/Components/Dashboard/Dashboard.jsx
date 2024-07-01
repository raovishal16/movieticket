import React, { useEffect, useState } from "react";
import "./dashboard.css";
import bannerImg from "../../assets/img/banner1.jpg";

import card1Img from "../../assets/img/card1.jpg";
import card2Img from "../../assets/img/card2.avif";
import card3Img from "../../assets/img/card3.avif";
import card4Img from "../../assets/img/card4.avif";
import card5Img from "../../assets/img/card5.avif";
import { useNavigate, useParams } from "react-router-dom";

const Dashboard = () => {
  const [card, setCard] = useState([
    {
      id: 1,
      name: "Jhamkudi",
      type: "Comedy/Horror/Mystery",
      img: card1Img,
    },
    {
      id: 2,
      name: "Munjya",
      type: "Comedy/Horror",
      img: card2Img,
    },
    {
      id: 3,
      name: "Hamare Baarah",
      type: "Drama",
      img: card3Img,
    },
    {
      id: 4,
      name: "Jahangir National University",
      type: "Drama",
      img: card4Img,
    },
    {
      id: 5,
      name: "Chandu Champion",
      type: "Biography/Drama/Sports",
      img: card5Img,
    },
  ]);

  const navigate = useNavigate();
  const { id } = useParams();

  const HandleBook = (id) => {
    navigate(`../TicketBook/${id}`);
  };

  return (
    <>
      <section className="my-4">
        <div className="container">
          <div className="row w-100">
            <div className="col-12">
              <div className="banner-img">
                <img src={bannerImg} alt="" className="w-100 h-100" />
              </div>
            </div>
          </div>
          <div className="my-3">
            <div className="row w-100 gx-3 gy-4">
              {card.map((item) => (
                <div className="col-md-3" key={item.id}>
                  <div className="card w-100 border-0">
                    <div className="card-top-img">
                      <img
                        src={item.img}
                        alt=""
                        className="w-100 h-100 rounded-3"
                      />
                    </div>
                    <div className="card-body">
                      <p className="name fw-semibold mb-0">{item.name}</p>
                      <p className="type mb-0">{item.type}</p>
                    </div>
                    <div
                      className="btn btn-primary"
                      onClick={() => HandleBook(item.id)}
                    >
                      Book
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
