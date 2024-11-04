import React from "react";
import {createRoot} from "react-dom/client";
import ContactItemImage from "./ContactItemImage.jsx";
import ContactItemBody from "./ContactItemBody.jsx";

function ContactItem({image, url, tag}){
    return (
        <div className="contact-item">
            <ContactItemImage image={image}/>
            <ContactItemBody url={url} tag={tag}/>
        </div>
    );
}


export default ContactItem;