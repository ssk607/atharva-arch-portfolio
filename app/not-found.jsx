import Link from "next/link";

import HomeHeader from "@/components/Header/HomeHeader";
import Footer from "@/components/Footer/Footer";

export default function NotFound() {
    return (
        <>
            <HomeHeader internal />

            <main className="not-found-page">

                <div className="not-found-content">

                    <p className="not-found-label">
                        ERROR 404
                    </p>

                    <h1>
                        The page you are looking for
                        <br />
                        could not be found.
                    </h1>

                    <p className="not-found-description">
                        The requested page may have been moved,
                        removed or the URL may be incorrect.
                    </p>

                    <div className="not-found-actions">

                        <Link
                            href="/"
                            className="primary-button"
                        >
                            Back to Home
                        </Link>

                        <Link
                            href="/connect"
                            className="secondary-button"
                        >
                            Contact Us
                        </Link>

                    </div>

                </div>

            </main>

            <Footer />
        </>
    );
}