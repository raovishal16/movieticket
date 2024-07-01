import React, { useState } from "react";
import "./popup.css";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Popup = ({ onClose, onSave }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    onSave(name);
    setName("");
    onClose();
    navigate("../");
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p className="popup-title fw-semibold">Enter Your Name</p>
        <input
          type="text"
          className="name-input"
          placeholder="Enter Name.."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="popup-actions">
          <button onClick={handleSave} className="btn btn-primary">
            Save
          </button>
          <button onClick={onClose} className="btn btn-secondary">
            <IoMdClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
