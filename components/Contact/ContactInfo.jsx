import {
    FiMapPin,
    FiPhone,
    FiMail,
    FiClock
} from "react-icons/fi";

export default function ContactInfo() {

    return (

        <div className="contact-info">

            <h2>
                Contact Information
            </h2>

            <p className="contact-info-text">

                Whether you're planning a new home,
                commercial development or interior
                renovation, we'd love to hear about
                your ideas and discuss how we can help.

            </p>

            <div className="contact-card">

                <FiMapPin />

                <div>

                    <h3>Pune</h3>

                </div>

            </div>

            <div className="contact-card">

                <FiMapPin />

                <div>

                    <h3>Pandharpur</h3>

                </div>

            </div>

            <div className="contact-card">

                <FiPhone />

                <div>

                    <h3>Phone</h3>

                    <p>+91 8446 015 936</p>

                </div>

            </div>

            <div className="contact-card">

                <FiMail />

                <div>

                    <h3>Email</h3>

                    <p>info@studioaka.in</p>

                </div>

            </div>

            <div className="contact-card">

                <FiClock />

                <div>

                    <h3>Office Hours</h3>

                    <p>Monday – Saturday</p>

                    <p>10:00 AM – 6:30 PM</p>

                </div>

            </div>

        </div>

    );

}