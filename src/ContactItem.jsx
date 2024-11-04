import React from "react";
import {createRoot} from "react-dom/client";
import ContactItemImage from "./ContactItemImage.jsx";
import ContactItemBody from "./ContactItemBody.jsx";

function ContactItem({imageUrl, name, tag}){
    return (
        <div className="contact-item">
            <ContactItemImage imageUrl={imageUrl}/>
            <ContactItemBody name={name} tag={tag}/>
        </div>
    );
}


export default ContactItem;

