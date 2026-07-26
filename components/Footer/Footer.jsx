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

                    <h4>Contact</h4>

                    <p>Pune, Maharashtra</p>

                    <p>+91 8446015936</p>

                    <p>atharva@studioaka.in</p>

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