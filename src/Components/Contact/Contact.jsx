import React from "react";
import "./Contact.css";
import email from "../../Assets/email.png";
import call from "../../Assets/call.jpg";
import location from "../../Assets/locat.jpg";
const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "47582e44-29ad-445d-b4c7-7ac589275f40");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert("Message sent successfully!");
        }
      };
    

    return (
        <div id='contact' className="contact">
            <div className="contact-title">Contact Me</div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Letls talk</h1>
                    <p><span>I'm SITHOL.</span>If you have any questions, comments, or feedback, we'd love to hear from you! Please fill out the contact, and we'll get back to you as soon as possible. Whether you're inquiring about our services, need support, or just want to connect, we're here to help. Your messages are important to us, and we strive to respond promptly to all inquiries. Thank you for reaching out to us!</p>
                    <div className="contact-details">
                        <div className="contact-icon">
                            <img src={email} alt="" /> <p>sithol.pen@gmail.com</p>
                        </div>
                        <div className="contact-icon">
                            <img src={call} alt="" /> <p>+855 96 896 2077</p>
                        </div>
                        <div className="contact-icon">
                            <img src={location} alt="" /><p>Phnom Penh Medical Services Co., Ltd. # No. 888, Russian Federation Blvd (110). Sangkat Toeuk Thla, Khan Sen Sok, Phnom Penh, Cambodia.</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Input Your Name</label>
                    <input type="text" placeholder="Enter Your Name" name="name"/>
                    <label htmlFor="">Input Your Email</label>
                    <input type="email" placeholder="Enter Your Email" name="email"/>
                    <label htmlFor="">Input Your Message</label>
                    <textarea name="message" id="mss"  rows="8" placeholder="Enter Your Message"></textarea>
                    <button type="submit" className="contact-sub">Send Message</button>
                </form>
            </div>
        </div>
    );
}
export default Contact