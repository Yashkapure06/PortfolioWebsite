import React from "react";
// import contactImg from "./Contact.png";
import { useForm, ValidationError } from "@formspree/react";
import {
  Text,
  Button,
  
} from "@chakra-ui/react";
import "./ContactForm.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("mbjervyr");
  if (state.succeeded) {
    return <h3 style={{textAlign: 'center', marginTop: 56, padding:50 }}>Thanks for Connecting!!<br/> We'll be back to you soon.</h3>;
  }
  return (
      <center>
    <section className="contact-section flex reveal">
      
        <div className="contact-form">
          <Text style={{textAlign: 'center', marginBottom:'20px',fontSize:56}}>Let's  Connect</Text>
          <form onSubmit={handleSubmit}>
            <div>
              <input  className='input' type="text" name="name" placeholder="Name" required />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div>
              <input className="input" type="email" name="email" placeholder="Email" required />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                row="30"
                cols="50"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <Button type="submit" bgGradient="linear(to-l, #7928CA, #FF0080)" disabled={state.submitting}>
              Send
            </Button>
          </form>
        </div>
    </section>
      </center>
  );
};

export default Contact;