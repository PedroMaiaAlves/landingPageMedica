import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { DifferentialsSection } from "./components/DifferentialsSection";
import { EducationSection } from "./components/EducationSection";
import { EthicalFooter } from "./components/EthicalFooter";
import { FAQSection } from "./components/FAQSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { JourneySection } from "./components/JourneySection";
import { ServicesSection } from "./components/ServicesSection";
import { TimelineSection } from "./components/TimelineSection";
import { TrustBar } from "./components/TrustBar";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <TimelineSection />
        <DifferentialsSection />
        <JourneySection />
        <EducationSection />
        <FAQSection />
        <ContactSection />
      </main>
      <EthicalFooter />
      <WhatsAppButton />
    </>
  );
}
