import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhoWeHelp from "./components/WhoWeHelp";
import TheProblem from "./components/TheProblem";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Proof from "./components/Proof";
import About from "./components/About";
import InquiryForm from "./components/InquiryForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AngleDivider from "./components/AngleDivider";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── dark → white ─── */}
        <Hero />
        <AngleDivider from="#0a0a0a" to="#ffffff" direction="left"  height={56} />

        {/* ─── white → off-white ─── */}
        <WhoWeHelp />
        <AngleDivider from="#ffffff" to="#f5f4f2" direction="right" height={44} />

        {/* ─── off-white → white ─── */}
        <TheProblem />
        <AngleDivider from="#f5f4f2" to="#ffffff" direction="left"  height={44} />

        {/* ─── full-width image banner ─── */}
        <div style={{ width: "100%", height: "320px", overflow: "hidden" }}>
          <img
            src="/images/pexels-akilmazumder-5550910.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* ─── white → off-white ─── */}
        <Services />
        <AngleDivider from="#ffffff" to="#f5f4f2" direction="right" height={44} />

        {/* ─── off-white → dark ─── */}
        <Pricing />
        <AngleDivider from="#f5f4f2" to="#0a0a0a" direction="left"  height={56} />

        {/* ─── dark → white ─── */}
        <Proof />
        <AngleDivider from="#0a0a0a" to="#ffffff" direction="right" height={56} />

        {/* ─── white → off-white ─── */}
        <About />
        <AngleDivider from="#ffffff" to="#f5f4f2" direction="left"  height={44} />

        <Testimonials />

        <InquiryForm />

        {/* ─── full-width image banner ─── */}
        <div style={{ width: "100%", height: "320px", overflow: "hidden" }}>
          <img
            src="/images/pexels-bagus-prabangkara-2151566592-33631184.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
