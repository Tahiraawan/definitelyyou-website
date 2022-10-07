import React, { useState } from "react";
import { UserOutlined, MailTwoTone, FormOutlined } from "@ant-design/icons";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-form">
      <div className="heading">
        <h1>Contact Us</h1>
      </div>
      <div className="map-contact">
        <div className="map">
          <iframe
            width="600"
            height="410"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Tungsten%20software%20house,%20Islamabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
        <div className="contact">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <UserOutlined className="input-icon" />
            </div>
            <div className="input-container">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <MailTwoTone className="input-icon" />
            </div>
            <div className="input-container">
              <textarea
                rows="8"
                cols="92"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{ resize: "none" }}
              >
                Message
              </textarea>
            </div>
            <button type="submit">
              <FormOutlined className="btn-icon" />
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
