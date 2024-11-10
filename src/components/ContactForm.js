import "./ContactFormStyles.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('Codexsuvro_travelo', 'template_4n4q4m7', form.current, 'GzNR0Q0KxhyQ02uB7')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id="contact-form" className="form-container">
            <h2><span className="h1">What's Next?</span></h2>
            {/* <h2>Join our waitlist. We'll keep you posted</h2> */}
            {/* <form ref={form} onSubmit={sendEmail}>
                <input placeholder="Full Name" name="to_name" type="text" />
                <input placeholder="Email" type="email" name="from_name" />
                <input placeholder="WhatsApp Number (+234 000 0000 000) " type="number" rows="4" name="message"></input>
                <button type="submit" value="Send">Notify Me</button>
            </form> */}
        </div>
    );
};

export default ContactForm;