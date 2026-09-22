import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Monitor, Cpu, Zap, Shield, Award,
  Factory, Car, Cross, Sword, ChevronRight, Star,
  Phone, Mail, CheckCircle2, Globe, Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HMI Touch Screen, TFT LCD Display Panels – DWIN | Touch LCD Displays",
  description:
    "Premium DWIN UART LCD displays and HMI touch panels for industrial, automotive, medical, and military applications. Sizes 1.3\" to 21.5\". Get free samples & quotes.",
  keywords: ["touch LCD display", "HMI touch screen", "DWIN display", "UART LCD", "TFT LCD India"],
  openGraph: {
    title: "Touch LCD Displays | HMI Touch Screen & TFT LCD Display Panels",
    description: "Premium DWIN UART LCD displays for industrial, automotive, medical & military.",
    images: [{ url: "/og-image.jpg" }],
  },
};

const industries = [
  { icon: Factory, label: "Industrial", desc: "PLCs, HMIs, SCADA panels, conveyor control", color: "#002B66", gradient: "linear-gradient(135deg, #002B66, #003d8c)" },
  { icon: Car, label: "Automotive", desc: "Cluster displays, infotainment, ADAS interfaces", color: "#92400e", gradient: "linear-gradient(135deg, #92400e, #d97706)" },
  { icon: Cross, label: "Medical", desc: "Patient monitors, diagnostic imaging, infusion pumps", color: "#065f46", gradient: "linear-gradient(135deg, #065f46, #059669)" },
  { icon: Shield, label: "Military", desc: "Ruggedized consoles, vehicle-mounted displays", color: "#374151", gradient: "linear-gradient(135deg, #374151, #6b7280)" },
];

const features = [
  { icon: Cpu, title: "DWIN UART Protocol", desc: "Simple 3-wire serial integration with any MCU – Arduino, STM32, ESP32, and more." },
  { icon: Zap, title: "Rich Graphic Engine", desc: "Built-in DGUS II engine for smooth animations, fonts, and curve plotting." },
  { icon: Layers, title: "1.3\" – 21.5\" Range", desc: "Comprehensive size portfolio covering handheld to large-format panel displays." },
  { icon: Shield, title: "Industrial Grade", desc: "Wide temperature range (-20°C to +70°C), high shock & vibration resistance." },
  { icon: Globe, title: "Multi-Protocol", desc: "UART, RS232, RS485, CAN Bus, Ethernet, Modbus, and custom protocols." },
  { icon: Award, title: "CE, FCC, RoHS", desc: "Certified displays meeting international safety and regulatory standards." },
];

const sizes = [
  { size: "1.3\"", res: "240×240" }, { size: "2.0\"", res: "320×240" },
  { size: "2.4\"", res: "320×240" }, { size: "2.8\"", res: "320×240" },
  { size: "3.5\"", res: "480×320" }, { size: "4.3\"", res: "480×272" },
  { size: "5.0\"", res: "800×480" }, { size: "7.0\"", res: "800×480" },
  { size: "8.0\"", res: "1024×600" }, { size: "10.1\"", res: "1024×600" },
  { size: "12.1\"", res: "1280×800" }, { size: "15.6\"", res: "1920×1080" },
  { size: "18.5\"", res: "1920×1080" }, { size: "21.5\"", res: "1920×1080" },
];

const applications = [
  { name: "Rice Cooker", icon: "🍚", cat: "Smart Appliance" },
  { name: "Medical Cart", icon: "🏥", cat: "Healthcare" },
  { name: "Smart Oven", icon: "🔥", cat: "Home Appliance" },
  { name: "Blender Control", icon: "⚙️", cat: "Kitchen IoT" },
  { name: "3D Printer", icon: "🖨️", cat: "Maker / Industry" },
  { name: "EV Charger", icon: "⚡", cat: "Green Energy" },
  { name: "Industrial PLC", icon: "🏭", cat: "Automation" },
  { name: "Access Control", icon: "🔐", cat: "Security" },
];

const stats = [
  { number: "1.3\"", suffix: " – 21.5\"", label: "Display Size Range" },
  { number: "500", suffix: "+", label: "Active Clients" },
  { number: "10", suffix: "+", label: "Years of Experience" },
  { number: "4", suffix: "", label: "Core Industries" },
];

const testimonials = [
  { name: "Arjun Mehta", role: "CTO, AutoPilot Systems", text: "The DWIN displays transformed our dashboard UI. Integration was seamless and quality exceeded our expectations.", stars: 5 },
  { name: "Dr. Priya Nair", role: "R&D Head, MedTech India", text: "Medical-grade IPS panels with perfect color accuracy. Our device passed all regulatory checks on first attempt.", stars: 5 },
  { name: "Rahul Sharma", role: "Lead Engineer, SteelWorks Ltd.", text: "Ruggedized 7\" displays running 24/7 in our steel plant. Zero failures in 18 months of continuous operation.", stars: 5 },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Touch LCD Displays",
            url: "https://touchlcddisplays.com",
            logo: "https://touchlcddisplays.com/logo.png",
            contactPoint: { "@type": "ContactPoint", telephone: "+91-8287754180", contactType: "sales", areaServed: "IN" },
          }),
        }}
      />

      {/* ===== HERO ===== */}
      <section className="hero-bg" style={{ paddingTop: 72, minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{
          position: "absolute", top: "10%", right: "5%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217,35,45,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "5%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="container-custom" style={{ padding: "80px 24px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(217,35,45,0.15)", border: "1px solid rgba(217,35,45,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#D9232D", animation: "pulse-ring 2s infinite" }} />
                <span style={{ color: "#ff6b70", fontSize: 13, fontWeight: 600 }}>Powered by Beijing DWIN Technology</span>
              </div>

              <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, fontSize: "clamp(34px, 5vw, 58px)", color: "white", lineHeight: 1.1, marginBottom: 24 }}>
                Our Displays Are <br />
                <span style={{ background: "linear-gradient(135deg, #ff6b70, #D9232D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Applicable
                </span>{" "}
                Across <br /> Multiple Industries
              </h1>

              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 18, lineHeight: 1.8, marginBottom: 36, maxWidth: 520 }}>
                Premium UART LCD, HMI Touch Panels & TFT Display Modules engineered for industrial, automotive, medical, and military applications. Sizes 1.3&quot; to 21.5&quot;.
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link href="/products" className="btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
                  Explore Products <ArrowRight size={18} />
                </Link>
                <Link href="/contact-us" className="btn-secondary" style={{ fontSize: 16, padding: "16px 36px" }}>
                  Get Free Sample
                </Link>
              </div>

              {/* Industry tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 36 }}>
                {["Industrial", "Automotive", "Medical", "Military", "Smart Appliances"].map((tag) => (
                  <span key={tag} className="industry-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Right – Display mockup */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "relative", animation: "float 4s ease-in-out infinite" }}>
                {/* Main display */}
                <div style={{
                  width: 320, height: 220,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
                  border: "2px solid rgba(255,255,255,0.2)",
                  borderRadius: 20,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}>
                  <div style={{ textAlign: "center" }}>
                    <Monitor size={64} color="rgba(255,255,255,0.6)" />
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 12 }}>DWIN HMI Display</div>
                    <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, marginTop: 4 }}>7.0&quot; 800×480 Capacitive Touch</div>
                  </div>
                </div>
                {/* Stand */}
                <div style={{ width: 80, height: 8, background: "rgba(255,255,255,0.1)", borderRadius: 4, margin: "8px auto 0" }} />
                <div style={{ width: 120, height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 4, margin: "0 auto" }} />

                {/* Floating spec badges */}
                {[
                  { text: "UART Interface", pos: { top: -20, right: -60 } },
                  { text: "IP65 Rated", pos: { bottom: 40, left: -70 } },
                  { text: "Multi-Touch", pos: { top: 60, right: -80 } },
                ].map(({ text, pos }) => (
                  <div key={text} style={{
                    position: "absolute", ...pos,
                    background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 100, padding: "6px 14px",
                    color: "white", fontSize: 12, fontWeight: 500,
                    whiteSpace: "nowrap",
                  }}>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2,
            marginTop: 72, background: "rgba(255,255,255,0.05)",
            borderRadius: 16, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            {stats.map(({ number, suffix, label }) => (
              <div key={label} style={{ padding: "28px 20px", textAlign: "center", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 36, color: "white", lineHeight: 1 }}>
                  {number}<span style={{ color: "#D9232D" }}>{suffix}</span>
                </div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginTop: 8 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .stats-strip { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 500px) {
            .stats-strip { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-badge">Why Choose Us</span>
            <h2 className="section-title">Smart Touch LCDs Built for Professionals</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Every display in our portfolio is engineered to reduce development time, lower BOM cost, and deliver pixel-perfect results in demanding environments.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 28 }}>
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card" style={{ padding: "36px 28px" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: "linear-gradient(135deg, rgba(0,43,102,0.1), rgba(217,35,45,0.1))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20,
                }}>
                  <Icon size={26} color="var(--navy)" />
                </div>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 18, color: "var(--navy-dark)", marginBottom: 10 }}>{title}</h3>
                <p style={{ color: "var(--gray-500)", fontSize: 15, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SIZE SPECTRUM ===== */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-badge">Size Spectrum</span>
            <h2 className="section-title">Display Sizes from 1.3&quot; to 21.5&quot;</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Whether you need a tiny wearable display or a large industrial touchscreen, we have the exact size and resolution for your application.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 16 }}>
            {sizes.map(({ size, res }) => (
              <Link key={size} href="/products" className="size-chip">
                <div className="size-chip-title" style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 22, color: "var(--navy)", marginBottom: 6, transition: "color 0.3s" }}>
                  {size}
                </div>
                <div className="size-chip-res" style={{ fontSize: 12, color: "var(--gray-500)", transition: "color 0.3s" }}>{res}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="section-padding hero-bg" style={{ position: "relative" }}>
        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-badge">Application Industries</span>
            <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(28px, 4vw, 42px)", color: "white", marginBottom: 16 }}>
              Powering Displays Across Sectors
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 17, maxWidth: 560, margin: "0 auto" }}>
              Our displays are trusted in the most demanding environments worldwide.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
            {industries.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="industry-card">
                <div style={{
                  width: 72, height: 72, borderRadius: 20,
                  background: "rgba(255,255,255,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px",
                }}>
                  <Icon size={32} color="white" />
                </div>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 20, color: "white", marginBottom: 10 }}>{label}</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPLICATIONS ===== */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div className="container-custom">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <span className="section-badge">Application Solutions</span>
              <h2 className="section-title">Displays in Real-World Products</h2>
            </div>
            <Link href="/products" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--navy)", fontWeight: 600, textDecoration: "none" }}>
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 20 }}>
            {applications.map(({ name, icon, cat }) => (
              <div key={name} className="card" style={{ padding: "32px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{icon}</div>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 15, color: "var(--navy-dark)", marginBottom: 6 }}>{name}</div>
                <div style={{ fontSize: 12, color: "var(--gray-500)" }}>{cat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-badge">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 28 }}>
            {testimonials.map(({ name, role, text, stars }) => (
              <div key={name} className="card" style={{ padding: "36px 28px" }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} size={16} color="#F59E0B" fill="#F59E0B" />
                  ))}
                </div>
                <p style={{ color: "var(--gray-700)", fontSize: 15, lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>
                  &ldquo;{text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--navy), var(--red))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", fontWeight: 700, fontSize: 16,
                  }}>
                    {name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: "var(--navy-dark)" }}>{name}</div>
                    <div style={{ fontSize: 13, color: "var(--gray-500)" }}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ background: "linear-gradient(135deg, #D9232D 0%, #b01c25 100%)", padding: "80px 0" }}>
        <div className="container-custom" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(28px, 4vw, 44px)", color: "white", marginBottom: 16 }}>
            Ready to Get Started?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 18, marginBottom: 40, maxWidth: 520, margin: "0 auto 40px" }}>
            Contact our display experts for free consultation, product samples, and custom quotes tailored to your application.
          </p>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact-us" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "white", color: "#D9232D",
              padding: "16px 36px", borderRadius: 10,
              fontWeight: 700, fontSize: 16, textDecoration: "none",
              transition: "all 0.3s",
            }}>
              Get a Free Quote <ArrowRight size={18} />
            </Link>
            <a href="tel:+918287754180" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.15)", color: "white",
              border: "2px solid rgba(255,255,255,0.5)",
              padding: "16px 36px", borderRadius: 10,
              fontWeight: 600, fontSize: 16, textDecoration: "none",
            }}>
              <Phone size={18} /> +91 8287754180
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
