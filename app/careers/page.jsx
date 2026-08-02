import HomeHeader from "@/components/Header/HomeHeader";
import FooterCTA from "@/components/Footer/FooterCTA";
import Footer from "@/components/Footer/Footer";

export default function CareersPage() {

    return (
        <>

            <HomeHeader internal />

            <section className="career-hero">

                <div className="career-content">

                    <h1 className="career-label">
                        CAREERS
                    </h1>

                    <h1>
                        Join Our
                        <br />
                        Design Studio
                    </h1>

                    <p className="career-intro">

                        We believe great architecture is created by passionate,
                        curious and talented people.
                        If you enjoy solving design challenges and creating
                        meaningful spaces, we'd love to hear from you.

                    </p>

                </div>

            </section>

            <section className="career-image">
                <img
                    src="/images/careers.jpg"
                    alt="Careers"
                />
            </section>

            <section className="career-why">

                <div className="section-title">

                    <p>WHY JOIN US</p>

                    <h2>
                        Build meaningful spaces with meaningful people.
                    </h2>

                </div>

                <div className="career-grid">

                    <div>
                        <h3>Creative Culture</h3>

                        <p>
                            Collaborate with architects,
                            designers and engineers on inspiring projects.
                        </p>
                    </div>

                    <div>
                        <h3>Professional Growth</h3>

                        <p>
                            Continuous learning,
                            mentoring and exposure to diverse project types.
                        </p>
                    </div>

                    <div>
                        <h3>Design Excellence</h3>

                        <p>
                            We value thoughtful design,
                            technical precision and innovation.
                        </p>
                    </div>

                    <div>
                        <h3>Collaborative Studio</h3>

                        <p>
                            A friendly and open environment where every
                            idea matters.
                        </p>
                    </div>

                </div>

            </section>

            <section className="career-email">

                <h2>
                    Don't see a suitable role?
                </h2>

                <p>

                    Send your portfolio and CV to

                </p>

                <a href="mailto:careers@atharvaarchitects.com">

                    careers@atharvaarchitects.com

                </a>

            </section>

            <Footer />

        </>
    );

}