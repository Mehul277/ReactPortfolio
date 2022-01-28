import "./contact.css";
import call from "../../img/call.png"
import email from "../../img/email.png"
import address from "../../img/address.png"



import {useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_190j0kd",
        "template_ivdz9bd",
        formRef.current,
        "user_epFwXYMIendApvBA0192K"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={call} alt="" className="c-icon" />
              +91 8168535227
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={email} alt="" />
              mgmehulgarg@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={address} alt="" />
              242 Model Town , Ratia ,125051
            </div>
          </div>
        </div>
        <div className="c-right">
          <h2 className="c-desc1">Get in Touch</h2>
         <p className="c-desc2"> Always available for some amazing projects!!</p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;