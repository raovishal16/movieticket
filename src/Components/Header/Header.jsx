import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaTicketAlt } from "react-icons/fa";

import "./header.css";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  let nevigate = useNavigate();
  const goToShowTicket = () => {
    nevigate("../showTickets");
  };
  const goToDashboard = () => {
    nevigate("../");
  };
  return (
    <>
      <Navbar expand="lg" bg="light" className="header">
        <Container>
          <div className="logo" onClick={() => goToDashboard()}>
            <img
              src={require("../../assets/img/logo.webp")}
              alt=""
              className="img-fluid"
            />
          </div>

          <Nav className="ms-auto">
            <Link
              className="show-ticket fw-semibold"
              to="/showTickets"
              onClick={() => goToShowTicket()}
            >
              <div className="ticket-icon d-flex justify-content-center align-items-center">
                <FaTicketAlt className="icon-ticket" />
              </div>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
