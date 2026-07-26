import Link from "next/link";
import {
    FiInstagram,
    FiLinkedin,
    FiMail
} from "react-icons/fi";

export default function Footer() {

    return (

        <footer className="site-footer">

            <div className="footer-grid">

                <div>

                    <h3>ATHARVA KULKARNI ARCHITECTS</h3>

                    <p>
                        Architecture crafted with simplicity,
                        precision and timeless design.
                    </p>

                </div>

                <div>

                    <h4>Navigation</h4>

                    <Link href="/">Home</Link>

                    <Link href="/identity">Identity</Link>

                    <Link href="/strength">Strength</Link>

                    <Link href="/connect">Connect</Link>

                </div>

                <div>

                    <h4>Services</h4>

                    <p>Architectural Design</p>

                    <p>Interior Design</p>

                    <p>Residential</p>

                    <p>Commercial</p>

                </div>

                <div>

                    <h4>Contact</h4>

                    <p>Pune, Maharashtra</p>

                    <p>+91 XXXXX XXXXX</p>

                    <p>hello@atharva.in</p>

                    <div className="social-icons">

                        <FiInstagram />

                        <FiLinkedin />

                        <FiMail />

                    </div>

                </div>

            </div>

            <div className="footer-bottom">

                © 2026 Atharva Kulkarni Architects

            </div>

        </footer>

    );

}