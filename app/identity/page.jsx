import HomeHeader from "@/components/Header/HomeHeader";
import Footer from "@/components/Footer/Footer";

export default function IdentityPage() {

    return (

        <>

            <HomeHeader internal />

            <section className="identity-page">

                <div className="identity-hero">
                    <div className="identity-left">

                        <h2>

                        Every project begins with purpose and ends
                        with a legacy worth preserving.

                        </h2>

                    </div>

                    {/* <h1 className="identity-left">
                        Every project begins with purpose and ends
                        with a legacy worth preserving.
                    </h1> */}

                </div>

                <hr className="identity-divider" />

<section className="identity-section">

                    <div className="identity-left">

                        <h2>

                            Our
                            <br />
                            Studio

                        </h2>

                    </div>

                    <div className="identity-right">

                        <p>

                            At AKA, we are committed to creating
                            spaces that seamlessly unite
                            innovation, functionality and
                            timeless design.

                        </p>

                        <p>

                            Driven by creativity, technical
                            expertise and a deep understanding
                            of context, our team approaches
                            every project with purpose and
                            precision.

                        </p>

                        <p>

                            Whether designing bespoke
                            residences, commercial developments
                            or public spaces, we work closely
                            with our clients to transform
                            aspirations into meaningful
                            architectural solutions.

                        </p>

                    </div>

                </section>

                <hr className="identity-divider" />

                <section className="identity-section">

                    <div className="identity-left">

                        <h2>

                            Design
                            <br />
                            Approach

                        </h2>

                    </div>

                    <div className="identity-right">

                        <p>

                            Good architecture is never accidental.
                            It is shaped by thoughtful decisions,
                            intelligent planning and meticulous
                            attention to detail.

                        </p>

                        <p>

                            We create spaces that endure beyond
                            trends by balancing creativity,
                            functionality and technical precision
                            in every project.

                        </p>

                    </div>

                </section>

                <hr className="identity-divider" />

                <section className="identity-section">

                    <div className="identity-left">

                        <h2>

                            Collaboration

                        </h2>

                    </div>

                    <div className="identity-right">

                        <p>

                            Collaboration is at the heart of our
                            process. By listening carefully,
                            thinking strategically and paying
                            close attention to every detail,
                            every project reflects its unique
                            vision while meeting the highest
                            standards of quality and
                            craftsmanship.

                        </p>

                    </div>

                </section>

                <hr className="identity-divider" />

                <section className="identity-section">

                    <div className="identity-left">

                        <h2>

                            Our
                            <br />
                            Legacy

                        </h2>

                    </div>

                    <div className="identity-right">

                        <p>

                            At AKA, we do more than design
                            buildings.

                        </p>

                        <p>

                            We create enduring spaces that
                            inspire people, enhance everyday
                            life and leave a lasting legacy.

                        </p>

                    </div>

                </section>

            </section>

            <Footer />

        </>

    );

}