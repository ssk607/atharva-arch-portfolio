import HomeHeader from "@/components/Header/HomeHeader";
import Footer from "@/components/Footer/Footer";

export default function StrengthPage() {

    return (

        <>

            <HomeHeader internal />

            <section className="strength-page">

                <div className="strength-hero">

                    <p className="strength-small">

                        STRENGTH

                    </p>

                    <h1>

                        “Our Greatest

                        Strength Is

                        Our People”

                    </h1>

                </div>

                <hr className="strength-divider" />

                <section className="strength-founder">

                    <img
                        src="/images/strength.jpeg"
                        alt="Atharva Kulkarni"
                    />

                    <h3>

                        Ar.Atharva Kulkarni

                    </h3>
                    <br />
                    <p>

                        Founder & Principal Architect

                    </p>

                    <div className="founder-quote">

                        <blockquote>

                            “Architecture, to me, is about solving problems with simplicity and
                            creativity. I strive to design spaces that are practical,
                            emotionally engaging, and built to last. Every line, material,
                            and proportion is carefully considered to deliver architecture
                            that balances beauty, function, and context.”

                        </blockquote>

                    </div>

                </section>

                <hr className="strength-divider" />

                <section className="strength-section">

                    <div className="strength-right">

                        <p>

                            Our greatest strength is our
                            <strong> team.</strong>

                            We are a group of passionate
                            <strong> architects</strong>,
                            <strong> designers</strong>,
                            <strong> engineers</strong> and
                            <strong> project coordinators</strong>
                            who bring diverse expertise and
                            a shared commitment to excellence.

                            <br /><br />

                            Every project benefits from
                            <strong> close collaboration</strong>,
                            <strong> technical precision</strong>
                            and thoughtful problem-solving.

                            <br /><br />

                            By combining
                            <strong> creativity</strong>
                            with practical experience,
                            our team ensures every design is
                            <strong> functional</strong>,
                            <strong> buildable</strong> and
                            executed with the highest standards
                            of <strong>quality.</strong>

                        </p>

                    </div>

                </section>

                <hr className="strength-divider" />

                <section className="strength-closing">

                    <h2>

                        Great architecture is never
                        the work of one individual.

                    </h2>

                    <p>

                        It is the outcome of trust,
                        collaboration and a shared vision.

                    </p>

                </section>

            </section>

            <Footer />

        </>

    );

}