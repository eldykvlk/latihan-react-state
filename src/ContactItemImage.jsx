import React from "react";
import { createRoot } from "react-dom/client";

function ContactItemImage({image}){
    return (
        <div className="contact-item__image">
            <img src={image} alt="contact-avatar"/>
        </div>
    );
}

export default ContactItemImage;