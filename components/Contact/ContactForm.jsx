"use client";

export default function ContactForm() {

    return (

        <div className="contact-form">

            <h2>
                Send an Enquiry
            </h2>

            <form>

                <div className="form-row">

                    <div className="form-group">

                        <label>Name *</label>

                        <input
                            type="text"
                            placeholder="Your Name"
                        />

                    </div>

                    <div className="form-group">

                        <label>Email *</label>

                        <input
                            type="email"
                            placeholder="you@example.com"
                        />

                    </div>

                </div>

                <div className="form-row">

                    <div className="form-group">

                        <label>Phone</label>

                        <input
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                        />

                    </div>

                    <div className="form-group">

                        <label>Project Type</label>

                        <select>

                            <option>Residential</option>

                            <option>Commercial</option>

                            <option>Interior Design</option>

                            <option>Hospitality</option>

                            <option>Industrial</option>

                            <option>Consultation</option>

                            <option>Other</option>

                        </select>

                    </div>

                </div>

                <div className="form-group">

                    <label>Estimated Budget</label>

                    <select>

                        <option>Below ₹25 Lakhs</option>

                        <option>₹25 Lakhs – ₹50 Lakhs</option>

                        <option>₹50 Lakhs – ₹1 Crore</option>

                        <option>Above ₹1 Crore</option>

                        <option>Let's Discuss</option>

                    </select>

                </div>

                <div className="form-group">

                    <label>Message *</label>

                    <textarea

                        rows="7"

                        placeholder="Tell us about your project, location, timeline and any specific requirements."

                    />

                </div>

                <button
                    type="submit"
                    className="contact-submit"
                >

                    Send Enquiry →

                </button>

            </form>

        </div>

    );

}