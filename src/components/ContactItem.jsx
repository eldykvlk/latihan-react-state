import React from "react";
import {createRoot} from "react-dom/client";
import ContactItemImage from "./ContactItemImage.jsx";
import ContactItemBody from "./ContactItemBody.jsx";
import DeleteButton from "./DeleteButton.jsx";

function ContactItem({imageUrl, name, tag, id, onDelete}){
    return (
        <div className="contact-item">
            <ContactItemImage imageUrl={imageUrl}/>
            <ContactItemBody name={name} tag={tag}/>
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    );
}


export default ContactItem;

