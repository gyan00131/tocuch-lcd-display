import type { Metadata } from "next";
import Link from "next/link";
import { Monitor, Cpu, Layers, Shield, Zap, Globe, ArrowRight, CheckCircle2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Products – UART LCD, HMI Touch Panels & TFT LCD Modules | Touch LCD Displays",
  description:
    "Browse our full catalog of DWIN UART LCD displays, HMI touch panels, and TFT LCD modules. Sizes from 1.3\" to 21.5\". Industrial, medical, automotive & military grade options.",
  openGraph: {
    title: "Products | DWIN UART LCD & HMI Touch Panels",
    description: "DWIN UART LCD, HMI touch panels, TFT LCD modules – 1.3\" to 21.5\".",
  },
};

const categories = [
  {
    id: "uart-lcd",
    title: "UART LCD Displays",
    icon: Cpu,
    badge: "Most Popular",
    desc: "DWIN's flagship UART LCD series. Simple 3-wire serial integration, built-in DGUS II graphic engine, rich UI support.",
    gradient: "linear-gradient(135deg, #002B66, #003d8c)",
    features: ["DGUS II Graphic Engine", "UART / RS232 / RS485", "Built-in font library", "Touch + display combined"],
    sizes: ["2.4\"", "3.5\"", "4.3\"", "5.0\"", "7.0\"", "10.1\""],
  },
  {
    id: "hmi-touch",
    title: "HMI Touch Panels",
    icon: Layers,
    badge: "Industrial Grade",
    desc: "Purpose-built HMI panels for industrial automation, PLC visualization, and machine control interfaces.",
    gradient: "linear-gradient(135deg, #374151, #4b5563)",
    features: ["IP65 / IP67 rated", "Wide temp: -20°C to +70°C", "Modbus & CAN Bus", "Sunlight readable option"],
    sizes: ["4.3\"", "7.0\"", "10.1\"", "12.1\"", "15.6\"", "21.5\""],
  },
  {
    id: "tft-lcd",
    title: "TFT LCD Modules",
    icon: Monitor,
    badge: "High Resolution",
    desc: "High-resolution TFT and IPS LCD modules for consumer electronics, medical devices, and IoT products.",
    gradient: "linear-gradient(135deg, #065f46, #059669)",
    features: ["TFT & IPS options", "Up to 1920×1080 FHD", "Capacitive touch", "Low power modes"],
    sizes: ["1.3\"", "2.0\"", "2.4\"", "2.8\"", "3.5\"", "4.3\""],
  },
  {
    id: "industrial",
    title: "Industrial Displays",
    icon: Shield,
    badge: "Ruggedized",
    desc: "Ruggedized displays built for harsh factory environments, oil & gas, mining, and outdoor applications.",
    gradient: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
    features: ["IP69K available", "Anti-vandal glass", "EMI shielded", "Optical bonding option"],
    sizes: ["7.0\"", "10.1\"", "12.1\"", "15.6\"", "18.5\"", "21.5\""],
  },
  {
    id: "medical",
    title: "Medical Displays",
    icon: Zap,
    badge: "IEC 60601",
    desc: "IEC 60601-1 compliant display modules for patient monitors, diagnostic imaging, and medical carts.",
    gradient: "linear-gradient(135deg, #065f46, #047857)",
    features: ["IEC 60601-1 certified", "350–500+ cd/m²", "Anti-bacterial coating", "Chemical resistant glass"],
    sizes: ["5.0\"", "7.0\"", "10.1\"", "12.1\"", "15.6\""],
  },
  {
    id: "automotive",
    title: "Automotive Displays",
    icon: Globe,
    badge: "AEC-Q100",
    desc: "AEC-Q100 qualified displays for instrument clusters, infotainment, ADAS, and EV charging stations.",
    gradient: "linear-gradient(135deg, #92400e, #d97706)",
    features: ["AEC-Q100 Grade 1", "-40°C to +85°C", "CAN Bus compatible", "Anti-glare coating"],
    sizes: ["4.3\"", "5.0\"", "7.0\"", "8.0\"", "10.1\"", "12.1\""],
  },
];

const allSizes = [
  { size: "1.3\"", res: "240×240", touch: "Cap", interface: "UART" },
  { size: "2.0\"", res: "320×240", touch: "Cap/Res", interface: "UART" },
  { size: "2.4\"", res: "320×240", touch: "Cap/Res", interface: "UART" },
  { size: "2.8\"", res: "320×240", touch: "Cap/Res", interface: "UART" },
  { size: "3.5\"", res: "480×320", touch: "Cap/Res", interface: "UART" },
  { size: "4.3\"", res: "480×272", touch: "Cap/Res", interface: "UART/SPI" },
  { size: "5.0\"", res: "800×480", touch: "Cap", interface: "UART/RGB" },
  { size: "7.0\"", res: "800×480", touch: "Cap", interface: "UART/RGB" },
  { size: "8.0\"", res: "1024×600", touch: "Cap", interface: "UART/MIPI" },
  { size: "10.1\"", res: "1024×600", touch: "Cap", interface: "UART/MIPI" },
  { size: "12.1\"", res: "1280×800", touch: "Cap", interface: "MIPI/LVDS" },
  { size: "15.6\"", res: "1920×1080", touch: "Cap", interface: "LVDS/eDP" },
  { size: "18.5\"", res: "1920×1080", touch: "Cap/No", interface: "HDMI/DVI" },
  { size: "21.5\"", res: "1920×1080", touch: "Cap/No", interface: "HDMI/DVI" },
];

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Touch LCD Display Products",
          url: "https://touchlcddisplays.com/products",
          numberOfItems: categories.length,
          itemListElement: categories.map((cat, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: cat.title,
            description: cat.desc,
          })),
        })
      }} />

      {/* Hero */}
      <section className="hero-bg" style={{ paddingTop: 72 }}>
        <div className="container-custom" style={{ padding: "80px 24px 72px", position: "relative", zIndex: 1, textAlign: "center" }}>
          <span className="section-badge" style={{ background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>
            Product Catalog
          </span>
          <h1 style={{ fontFamily: "Poppins", fontWeight: 900, fontSize: "clamp(30px, 5vw, 54px)", color: "white", lineHeight: 1.15, marginBottom: 16 }}>
            DWIN Display <span style={{ color: "#ff6b70" }}>Product Range</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 18, maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.75 }}>
            Complete portfolio of UART LCD displays, HMI touch panels, TFT/IPS modules – from 1.3&quot; to 21.5&quot;, for every application and industry.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact-us" className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
              Get a Quote <ArrowRight size={18} />
            </Link>
            <a href="mailto:sales@touchlcddisplays.com" className="btn-secondary" style={{ fontSize: 16, padding: "14px 32px" }}>
              Request Samples
            </a>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-badge">Product Lines</span>
            <h2 className="section-title">Display Solutions by Application</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 28 }}>
            {categories.map(({ id, title, icon: Icon, badge, desc, gradient, features, sizes }) => (
              <div key={id} className="product-card">
                {/* Card Header */}
                <div style={{ background: gradient, padding: "36px 28px", position: "relative" }}>
                  <div style={{
                    position: "absolute", top: 16, right: 16,
                    background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)",
                    color: "white", padding: "4px 12px", borderRadius: 100,
                    fontSize: 12, fontWeight: 700,
                  }}>
                    {badge}
                  </div>
                  <div style={{
                    width: 60, height: 60, borderRadius: 16,
                    background: "rgba(255,255,255,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20,
                  }}>
                    <Icon size={28} color="white" />
                  </div>
                  <h3 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 20, color: "white", marginBottom: 10 }}>{title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
                </div>

                {/* Card Body */}
                <div style={{ padding: "24px 28px" }}>
                  {/* Features */}
                  <div style={{ marginBottom: 20 }}>
                    {features.map((f) => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <CheckCircle2 size={14} color="var(--red)" />
                        <span style={{ fontSize: 14, color: "var(--gray-700)" }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Sizes */}
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "var(--gray-500)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 10 }}>
                      Available Sizes
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {sizes.map((s) => (
                        <span key={s} style={{
                          padding: "4px 10px", borderRadius: 6,
                          background: "var(--gray-100)", color: "var(--navy)",
                          fontSize: 13, fontWeight: 600,
                        }}>{s}</span>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact-us" className="btn-outline-navy" style={{ marginTop: 24, width: "100%", justifyContent: "center" }}>
                    Request Quote <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size & Spec Table */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-badge">Complete Catalog</span>
            <h2 className="section-title">Full Size & Resolution Catalog</h2>
          </div>
          <div style={{ overflowX: "auto", borderRadius: 16, boxShadow: "0 4px 20px rgba(0,43,102,0.08)", border: "1px solid var(--gray-200)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Inter, sans-serif" }}>
              <thead>
                <tr style={{ background: "var(--navy-dark)" }}>
                  {["Display Size", "Resolution", "Touch Type", "Interface", "Action"].map((h) => (
                    <th key={h} style={{ padding: "16px 20px", color: "white", fontSize: 13, fontWeight: 700, textAlign: "left", letterSpacing: "0.5px" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allSizes.map(({ size, res, touch, interface: iface }, i) => (
                  <tr key={size} style={{ background: i % 2 === 0 ? "white" : "var(--gray-50)", transition: "background 0.2s" }}>
                    <td style={{ padding: "14px 20px", fontWeight: 700, color: "var(--navy-dark)", fontSize: 15 }}>{size}</td>
                    <td style={{ padding: "14px 20px", color: "var(--gray-700)", fontFamily: "monospace", fontSize: 14 }}>{res}</td>
                    <td style={{ padding: "14px 20px" }}>
                      <span style={{ background: "rgba(0,43,102,0.08)", color: "var(--navy)", padding: "3px 10px", borderRadius: 6, fontSize: 13, fontWeight: 600 }}>
                        {touch}
                      </span>
                    </td>
                    <td style={{ padding: "14px 20px", color: "var(--gray-700)", fontSize: 14 }}>{iface}</td>
                    <td style={{ padding: "14px 20px" }}>
                      <Link href="/contact-us" style={{
                        color: "var(--red)", fontWeight: 600, fontSize: 13,
                        textDecoration: "none", display: "flex", alignItems: "center", gap: 4,
                      }}>
                        Quote <ArrowRight size={12} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: "center", marginTop: 20, color: "var(--gray-500)", fontSize: 14 }}>
            * Custom sizes, resolutions, and interface options available. Contact us for OEM/ODM requirements.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, var(--navy-dark), var(--navy))", padding: "72px 0" }}>
        <div className="container-custom" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(24px, 4vw, 38px)", color: "white", marginBottom: 16 }}>
            Not Sure Which Display to Choose?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 17, marginBottom: 36, maxWidth: 540, margin: "0 auto 36px" }}>
            Our display engineers will help you select the perfect panel for your application, free of charge.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact-us" className="btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
              Talk to an Expert <ArrowRight size={18} />
            </Link>
            <a href="tel:+918287754180" className="btn-secondary" style={{ fontSize: 16, padding: "16px 36px" }}>
              <Phone size={18} /> +91 8287754180
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
