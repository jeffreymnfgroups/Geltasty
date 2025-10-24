import { Metadata } from "next";
// import Achievements from "./components/home/achievements";
import Brand from "./components/home/brand";
// import CreativeMind from "./components/home/creative-mind";
import CustomerStories from "./components/home/customer-stories";
import HowItWorks from "./components/home/how-it-works";
import KeyBenefits from "./components/home/key-benefits/page";
// import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
// import Innovation from "./components/home/innovation";
// import OnlinePresence from "./components/home/online-presence";
import Solutions from "./components/home/solution";
// import Subscription from "./components/home/subscription";
import WebResult from "./components/home/web-result";
import GestaltyDifference from "./components/home/gestalty-difference";
import { PlatformFeatures } from "./components/home/platform-features";
import { GestaltyUnique } from "./components/home/gestalty-unique";

export const metadata: Metadata = {
    title: "Home | Gestalty",
};

export default function Home() {
  return (
    <main>
      {/* ---------------------Hero section Starts-----------------  */}
      <HeroSection />
      {/* ---------------------Hero section Ends-----------------  */}
      <KeyBenefits />

      {/* ---------------------Brand logo section Starts-----------------  */}
      <Brand />
      {/* ---------------------Brand logo section Ends-----------------  */}

      {/* ---------------------Web result section Starts-----------------  */}
      <WebResult />
      {/* ---------------------Web result section Ends-----------------  */}

      {/* ---------------------Gestalty Difference section Starts-----------------  */}
      <GestaltyDifference />
      {/* ---------------------Gestalty Difference section Ends-----------------  */}

      {/* ---------------------Customer Stories section Starts-----------------  */}
      <CustomerStories />
      {/* ---------------------Customer Stories section Ends-----------------  */}

      {/* ---------------------How It Works section Starts-----------------  */}
      <HowItWorks />
      {/* ---------------------How It Works section Ends-----------------  */}

      {/* ---------------------Platform Features section Starts-----------------  */}
      <PlatformFeatures />
      {/* ---------------------Platform Features section Ends-----------------  */}

      {/* ---------------------Gestalty Unique section Starts-----------------  */}
      <GestaltyUnique />
      {/* ---------------------Gestalty Unique section Ends-----------------  */}

      {/* ---------------------Innovation section Starts-----------------  */}
      {/* <Innovation /> */}
      {/* ---------------------Innovation section Ends-----------------  */}

      {/* ---------------------Online presence section Starts-----------------  */}
      {/* <OnlinePresence /> */}
      {/* ---------------------Online presence section Ends-----------------  */}

      {/* ---------------------Creative mind section Starts-----------------  */}
      {/* <CreativeMind /> */}
      {/* ---------------------Creative mind section Ends-----------------  */}

      {/* ---------------------Subscription section Starts-----------------  */}
      {/* <Subscription /> */}
      {/* ---------------------Subscription section Ends-----------------  */}

      {/* ---------------------Faq section Starts-----------------  */}
      {/* <Faq /> */}
      {/* ---------------------Faq section Ends-----------------  */}

      {/* ---------------------Achievements section Starts-----------------  */}
      {/* <Achievements /> */}
      {/* ---------------------Achievements section Ends-----------------  */}

      {/* ---------------------Solutions section Starts-----------------  */}
      <Solutions />
      {/* ---------------------Solutions section Ends-----------------  */}
    </main>
  )
}
