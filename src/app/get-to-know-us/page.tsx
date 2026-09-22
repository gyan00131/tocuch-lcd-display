import type { Metadata } from "next";
import Link from "next/link";
import {
  Monitor, Factory, Car, Cross, Shield, Cpu, Zap,
  Layers, Globe, Award, CheckCircle2, ArrowRight, Users, Phone, Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us – HMI Touch Screen & TFT LCD Display Supplier | Touch LCD Displays",
  description:
    "Learn about Touch LCD Displays – India's leading supplier of Beijing DWIN Technology products. Supplying premium UART LCD, HMI touch panels, and TFT displays for industrial, medical, automotive & military applications.",
  openGraph: {
    title: "About Us | Touch LCD Displays – DWIN Partner India",
    description: "India's trusted supplier of DWIN UART LCD and HMI touch panels since 10+ years.",
  },
};

const teamValues = [
  { icon: Award, title: "Quality First", desc: "Every product passes rigorous QA. CE, FCC, RoHS certified displays with full traceability." },
  { icon: Cpu, title: "Technical Expertise", desc: "Our engineers provide application-specific guidance, DGUS II design support, and firmware assistance." },
  { icon: Globe, title: "Global Reach", desc: "Serving clients across India, South Asia, and Southeast Asia with fast logistics." },
  { icon: Users, title: "Customer Partnership", desc: "We don't just sell displays — we become your long-term display technology partner." },
];

const milestones = [
  { year: "2014", event: "Founded as exclusive DWIN Technology distributor for India" },
  { year: "2016", event: "Expanded to automotive and medical display segments" },
  { year: "2018", event: "Reached 100+ active OEM/ODM clients" },
  { year: "2020", event: "Launched custom display engineering services" },
  { year: "2022", event: "500+ clients across 4 industries" },
  { year: "2024", event: "Introduced military-grade ruggedized display portfolio" },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Touch LCD Displays",
          description: "India's leading supplier of DWIN UART LCD and HMI touch panels.",
          url: "https://touchlcddisplays.com/get-to-know-us",
        })
      }} />

      {/* Hero */}
      <section className="hero-bg" style={{ paddingTop: 72 }}>
        <div className="container-custom" style={{ padding: "80px 24px 80px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <span className="section-badge" style={{ background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>
                Get To Know Us
              </span>
              <h1 style={{ fontFamily: "Poppins", fontWeight: 900, fontSize: "clamp(30px, 4.5vw, 52px)", color: "white", lineHeight: 1.15, marginBottom: 20 }}>
                India&apos;s Premier <span style={{ color: "#ff6b70" }}>DWIN Display</span> Partner
              </h1>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, lineHeight: 1.8, marginBottom: 36 }}>
                Touch LCD Displays is the authorized distributor of <strong style={{ color: "white" }}>Beijing DWIN Technology</strong> for the Indian subcontinent. We supply premium UART LCD displays, HMI touch panels, and TFT LCD modules to OEMs, system integrators, and product designers across industrial, automotive, medical, and military sectors.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link href="/contact-us" className="btn-primary">Get in Touch <ArrowRight size={16} /></Link>
                <Link href="/products" className="btn-secondary">View Products</Link>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
              {[
                { number: "10+", label: "Years Experience" },
                { number: "500+", label: "Happy Clients" },
                { number: "14", label: "Display Sizes" },
                { number: "4", label: "Industries Served" },
              ].map(({ number, label }) => (
                <div key={label} className="stat-card" style={{ flex: "0 0 calc(50% - 8px)" }}>
                  <div className="stat-number">{number}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){ .about-grid{grid-template-columns:1fr !important} }`}</style>
      </section>

      {/* Who We Are */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <div>
              <span className="section-badge">Who We Are</span>
              <h2 className="section-title">Connecting Engineers with the World&apos;s Best Display Technology</h2>
              <div className="divider" />
              <p style={{ color: "var(--gray-500)", fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
                Founded in 2014, Touch LCD Displays began with a mission to make DWIN&apos;s industry-leading display modules accessible to Indian engineers and product developers. Today, we serve over 500 clients ranging from small startups to large industrial corporations.
              </p>
              <p style={{ color: "var(--gray-500)", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                Our team of display engineers and application specialists work closely with customers to select the right display, provide DGUS II design support, and ensure smooth integration into any embedded system.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Authorized DWIN Technology Distributor",
                  "Free technical support & DGUS II design assistance",
                  "Sample programs available for all display models",
                  "Custom OEM/ODM display solutions",
                  "Fast shipping — Delhi warehouse stock",
                ].map((point) => (
                  <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckCircle2 size={18} color="var(--red)" style={{ flex: "none", marginTop: 2 }} />
                    <span style={{ color: "var(--gray-700)", fontSize: 15 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* Visual representation */}
              <div style={{
                background: "linear-gradient(135deg, var(--navy-dark), var(--navy))",
                borderRadius: 24, padding: 40,
                display: "flex", flexDirection: "column", gap: 20,
              }}>
                <div style={{ textAlign: "center", marginBottom: 8 }}>
                  <Monitor size={64} color="rgba(255,255,255,0.4)" />
                  <div style={{ color: "white", fontFamily: "Poppins", fontWeight: 700, fontSize: 20, marginTop: 12 }}>DWIN Technology Partner</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginTop: 4 }}>Beijing · India · Global</div>
                </div>
                {["UART LCD Displays", "HMI Touch Panels", "TFT LCD Modules", "Industrial Displays", "Medical Displays", "Automotive Displays"].map((item) => (
                  <div key={item} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    background: "rgba(255,255,255,0.07)", borderRadius: 10, padding: "12px 16px",
                  }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--red)" }} />
                    <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-badge">Our Values</span>
            <h2 className="section-title">Why 500+ Clients Trust Us</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 28 }}>
            {teamValues.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card" style={{ padding: "36px 28px", textAlign: "center" }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 18,
                  background: "linear-gradient(135deg, var(--navy), var(--red))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px",
                }}>
                  <Icon size={28} color="white" />
                </div>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 18, color: "var(--navy-dark)", marginBottom: 10 }}>{title}</h3>
                <p style={{ color: "var(--gray-500)", fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-badge">Our Journey</span>
            <h2 className="section-title">A Decade of Display Excellence</h2>
          </div>
          <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "var(--gray-200)", transform: "translateX(-50%)" }} />
            {milestones.map(({ year, event }, i) => (
              <div key={year} style={{
                display: "flex",
                justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                marginBottom: 32, position: "relative",
              }}>
                <div style={{
                  width: "calc(50% - 24px)",
                  background: "white", border: "1px solid var(--gray-200)",
                  borderRadius: 14, padding: "20px 24px",
                  boxShadow: "0 4px 20px rgba(0,43,102,0.06)",
                }}>
                  <div style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 22, color: "var(--red)", marginBottom: 6 }}>{year}</div>
                  <div style={{ fontSize: 14, color: "var(--gray-700)", lineHeight: 1.6 }}>{event}</div>
                </div>
                <div style={{
                  position: "absolute", left: "50%", top: "50%",
                  width: 14, height: 14, borderRadius: "50%",
                  background: "var(--navy)", border: "3px solid white",
                  boxShadow: "0 0 0 3px var(--navy)",
                  transform: "translate(-50%, -50%)",
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section style={{ background: "linear-gradient(135deg, var(--navy-dark), var(--navy))", padding: "60px 0" }}>
        <div className="container-custom" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
          <div>
            <h3 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 26, color: "white", marginBottom: 8 }}>Have a Project in Mind?</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16 }}>Let&apos;s discuss how we can power your next product with the perfect display.</p>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="mailto:sales@touchlcddisplays.com" style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "var(--red)", color: "white",
              padding: "14px 28px", borderRadius: 10, fontWeight: 600, textDecoration: "none",
            }}>
              <Mail size={16} /> sales@touchlcddisplays.com
            </a>
            <a href="tel:+918287754180" style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.1)", color: "white",
              border: "2px solid rgba(255,255,255,0.3)",
              padding: "14px 28px", borderRadius: 10, fontWeight: 600, textDecoration: "none",
            }}>
              <Phone size={16} /> +91 8287754180
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
