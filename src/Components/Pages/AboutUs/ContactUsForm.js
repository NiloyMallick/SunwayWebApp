import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUsForm.css";

import axios from "axios";

const ContactForm = ({ submitForm }) => {
  const navigate = useNavigate();
  // const { handleChange, handleSubmit, values, error } = useForm(
  //   submitForm,
  //   validate
  // );
  const [Name, setName] = useState(null);
  
  const [message, setmessage] = useState(null);
  const [email, setemail] = useState(null);
  const [countryCode, setcountryCode] = useState(null);
  const [phone, setphone] = useState(null);

  const submitData=async()=>{
    let formField= new FormData()
    formField.append('Name', Name)
    
    formField.append('email',email)
    formField.append('countryCode',countryCode)
    formField.append('phone',phone)
    formField.append('message',message)

    await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/contactformdata/',
      data: formField
    }).then(response=>{
      navigate('/')
    })
  }


  return (
    <div className="container" id="formContiner">
      <div className="contactus-form">
      <div className="contactus-form-title">
            <h2>Got Queries?</h2>
            <p className="title-description">
              Just enter your details below And we'll reach you soon.
            </p>
          </div>
        <form className="card-form">
          <div className="input">
            <input
              id="name"
              type="text"
              name="name"
              className="input-field-contactus"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="fname" className="input-label">
             Name
            </label>
          </div>

          <div className="input">
            <input
              id="email"
              type="email"
              name="email"
              className="input-field-contactus"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />

            <label htmlFor="email" className="input-label">
              Email
            </label>
            {/* {error.email && (
              <p data-tooltip="Invalid Email Address">{error.email}</p>
            )} */}
          </div>

          <div>
           
            <div className="input">
              <input
                id="phoneno"
                type="tel"
                name="phoneno"
                className="input-field-contactus"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                required
              />
              <label htmlFor="phoneno" className="input-label">
                Phone no.
              </label>
            </div>
          </div>

          <div className="input">
            <textarea
              id="message"
              type="text"
              name="message"
              className="input-field-contactus"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              required
            />
            <label htmlFor="message" className="input-label-Message">
              Message
            </label>
          </div>
          <div className="action">
            <button className="action-button-Contactus m-2 col-6" type="submit" onClick={submitData}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
