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
                        DESIGN | BUILD | INSPIRE
                    </p>

                </div>

                <div>

                    <h4>Contact</h4>

                    <p>Pune, Maharashtra</p>

                    <p>+91 8446015936</p>

                    <p>atharva@studioaka.in</p>

                    <div className="social-icons">

                        <a
                            href="https://www.instagram.com/_ak_architects?igsh=MTkycHhhb216eW91Nw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FiInstagram />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ar-atharva-kulkarni-17660a244?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin />
                        </a>

                        <a
                            href="mailto:atharva@studioaka.in"
                            aria-label="Email"
                        >
                            <FiMail />
                        </a>

                    </div>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © {new Date().getFullYear()} Atharva Kulkarni Architects
                </p>

                <p className="footer-credit">

                    Created by{" "}

                    <a
                        href="https://www.linkedin.com/in/siddhesh-khatavka-java-ai-developer/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Siddhesh Khatavkar
                    </a>

                </p>

            </div>

        </footer>

    );

}