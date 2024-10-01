import "./PageFour.css";
import React from "react";
import deskImg from "./asset/contact.png"

export default function PageFour() {
    return (
        <div className="containerFour">
            <div className="contactMeText">
                <p>Contact Me</p>
                <div></div>
            </div>
            <div className="contactMeSocials">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="deskImg">
                <img id="deskImg" src={deskImg} />
            </div>
        </div>
    )
}