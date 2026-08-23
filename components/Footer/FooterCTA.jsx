import Link from "next/link";

export default function FooterCTA() {
    return (
        <section className="footer-cta">

            <div className="footer-cta-content">

                <p className="footer-label">
                    START YOUR PROJECT
                </p>

                <h2>
                    Let's Build Something
                    <br />
                    Meaningful.
                </h2>

                <p className="footer-description">
                    Whether you're planning a residence,
                    commercial development or interior
                    design project, we'd love to hear your vision.
                </p>

                <Link
                    href="/connect/contact-us"
                    className="footer-button"
                >
                    Get In Touch →
                </Link>

            </div>

        </section>
    );
}