import {
  TopNav,
  Hero,
  AboutUs,
  HowItWorks,
  OurServices,
  Faqs,
  Contact,
  Footer,
} from "@/sections";
import FloatingButton from "@/sections/floating";
import Team from "@/sections/team";

export default function Home() {
  return (
    <div className="relative">
      {/* topnav */}
      <TopNav />

      {/* hero */}
      <Hero />

      {/* Team */}
      <Team />

      {/* About Us */}
      <AboutUs />

      {/* How it Works */}
      <HowItWorks />

      {/* Our Services */}
      <OurServices />

      {/* FAQs */}
      <Faqs />

      {/* Contact */}
      <Contact />

      {/* footer */}
      <Footer />

      <FloatingButton />
    </div>
  );
}
