import React, { useEffect, useState } from "react";
import "./showticket.css";
const ShowTickets = () => {
  let [ticketShow, setTicketShow] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tickets"));
    console.log(data,'*-*');
    setTicketShow(data);
  }, []);
  const TotalPrice = () => {
    return ticketShow?.reduce((price, ticket) => price + ticket.price, 0);
  };
  let total = TotalPrice();

  return (
    <>
      {ticketShow?.length > 0 ? (
        <div className="conatiner  px-3 py-5 d-flex justify-content-center align-items-center w-100">
          <div className="ticket-table  px-3 py-5">
            <div className="table-responsive">
              <table className="table text-center w-100">
                <thead>
                  <tr>
                    <th className="table-header" scope="col">No</th>
                    <th className="table-header" scope="col">Name</th>
                    <th className="table-header" scope="col">Movie Name</th>
                    <th className="table-header" scope="col">Seats</th>
                    <th className="table-header" scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {ticketShow.map((item, index) => {
                    return (
                      <>
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <td className="fw-medium table-body">{item.name}</td>
                          <td className="fw-medium table-body">{item.movieName}</td>
                          <td>
                            <div className="d-flex gap-2 justify-content-center align-items-center w-100">
                              {item.selectedSeats.map((x) => {
                                return (
                                  <>
                                    <div className="select-seat d-flex align-items-center justify-content-center">
                                      {x}
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </td>
                          <td className="fw-medium table-body">{item.totleSeatPrice}</td>
                        </tr>
                      </>
                    );
                  })}
                  <tr className="table-group-divider">
                    <th colSpan="3" className="text-end">
                      Total:
                    </th>
                    <td className="fw-semibold">{total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="d-flex align-items-center justify-content-center w-100 h-100">
            <div className="bg-svg-img">
              <img
                src={require("../../assets/img/ticketshow.jpg")}
                alt=""
                className="w-100"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowTickets;
