import HomeHeader from "@/components/Header/HomeHeader";
import Footer from "@/components/Footer/Footer";

import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";
import ContactMap from "@/components/Contact/ContactMap";

export default function ContactPage() {

    return (

        <>

            <HomeHeader internal />

            {/* Hero */}

            <section className="contact-hero">

                <div className="contact-hero-content">

                    <h1 className="contact-label">
                        GET IN TOUCH
                    </h1>

                    <h1>

                        Let's Discuss
                        <br />
                        Your Next Project

                    </h1>

                    <p className="contact-intro">

                        Whether you're planning a residence,
                        commercial development or interior design project,
                        we'd love to hear about your vision.

                    </p>

                </div>

            </section>

            {/* Contact */}

            <section className="contact-section">

                <div className="contact-container">

                    <ContactInfo />

                    <ContactForm />

                </div>

            </section>

            {/* Google Map */}

            <ContactMap />

            {/* FAQ */}

            <section className="contact-faq">

                <div className="section-title">

                    <p>FAQ</p>

                    <h2>
                        Frequently Asked Questions
                    </h2>

                </div>

                <div className="faq-grid">

                    <div className="faq-item">

                        <h3>
                            How soon will we respond?
                        </h3>

                        <p>
                            We generally respond to all enquiries
                            within one business day.
                        </p>

                    </div>

                    <div className="faq-item">

                        <h3>
                            Can I schedule a consultation?
                        </h3>

                        <p>
                            Yes. After reviewing your enquiry,
                            we'll arrange a convenient meeting.
                        </p>

                    </div>

                    <div className="faq-item">

                        <h3>
                            Do you undertake projects outside Maharashtra?
                        </h3>

                        <p>
                            Yes. We undertake projects across India
                            depending on the project scope.
                        </p>

                    </div>

                </div>

            </section>

            <Footer />

        </>

    );

}