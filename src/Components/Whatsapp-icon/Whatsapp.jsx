import React from "react";
import "./whatsapp.css";
import wpLogo from "../../../src/assets/wpLogo.png";
const Whatsapp = () => {
  return (
    <>
      {/* <!-- ------------ WHATSAPP ---------  --> */}

      <a href="https://wa.me/+919334076843/?text=Hello, I want to know more about your services..">
        <div className="chat-with-wp" title="Chat with us">
          <img
            loading="lazy"
            width="70"
            height="70"
            src={wpLogo}
            alt="whatsapp--v1"
          />
        </div>
      </a>
    </>
  );
};

export default Whatsapp;
