import HomeHeader from "@/components/Header/HomeHeader";
import Footer from "@/components/Footer/Footer";

import IdentityHero from "@/components/Identity/IdentityHero";
import DesignApproach from "@/components/Identity/DesignApproach";
import OurStudio from "@/components/Identity/OurStudio";
import CoreValues from "@/components/Identity/CoreValues";
import FounderQuote from "@/components/Identity/FounderQuote";

export default function IdentityPage() {

    return (
        <>

            <HomeHeader internal />

            <IdentityHero />

            <DesignApproach />

            <OurStudio />

            <CoreValues />

            <FounderQuote />

            <Footer />

        </>
    );

}