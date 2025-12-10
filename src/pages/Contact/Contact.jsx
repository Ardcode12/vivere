import React from "react";
import "./Contact.css";

const Contact = () => {
  const contacts = [
    {
      name: "Rahul Kumar",
      role: "Technical Events In‑Charge",
      phone: "+91 98765 43210",
    },
    {
      name: "Anjali Sharma",
      role: "Non‑Technical Events In‑Charge",
      phone: "+91 91234 56789",
    },
  ];

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">Reach out to our coordinators</p>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          {contacts.map((person, index) => (
            <div key={index} className="contact-card">
              <h2 className="contact-name">{person.name}</h2>
              <p className="contact-role">{person.role}</p>
              <p className="contact-phone">{person.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
