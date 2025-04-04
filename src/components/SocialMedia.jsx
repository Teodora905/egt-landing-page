import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

function SocialMedia() {
    return (
        <section className="social-media-section">
            <div className="social-media-icons">
                <div className="social-icon">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FaFacebookF />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://youtube.com" target="_blank" rel="noreferrer">
                        <FaYoutube />
                    </a>
                </div>
                
            </div>
        </section>
    )
}

export default SocialMedia;