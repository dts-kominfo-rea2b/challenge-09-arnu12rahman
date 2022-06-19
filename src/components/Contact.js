// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ data }) => {
    return (
        <div className="card">
            <img className="card-image" src={data.photo} alt={data.name} />
            <div className="card-content">
                <h5 className="card-title">{data.name}</h5>
                <div className="card-body}">
                    <h2 className="card-phone">{data.phone}</h2>
                    <p className="card-email">{data.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
