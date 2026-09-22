import Link from "next/link";
import { Mail, Phone, MapPin, Monitor, ArrowRight } from "lucide-react";

const footerLinks = {
  products: [
    { label: "UART LCD Displays", href: "/products" },
    { label: "HMI Touch Panels", href: "/products" },
    { label: "TFT LCD Modules", href: "/products" },
    { label: "Industrial Displays", href: "/products" },
    { label: "Medical Displays", href: "/products" },
    { label: "Automotive Displays", href: "/products" },
  ],
  company: [
    { label: "About Us", href: "/get-to-know-us" },
    { label: "Blog & Insights", href: "/blog" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Get a Quote", href: "/contact-us" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  industries: [
    { label: "Industrial Automation", href: "/products" },
    { label: "Automotive", href: "/products" },
    { label: "Medical Devices", href: "/products" },
    { label: "Military & Defense", href: "/products" },
    { label: "Smart Appliances", href: "/products" },
    { label: "Building Automation", href: "/products" },
  ],
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    svg: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com",
    svg: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    svg: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    svg: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer-bg" style={{ color: "white" }}>
      {/* CTA Banner */}
      <div style={{
        background: "linear-gradient(135deg, #D9232D, #b01c25)",
        padding: "48px 0",
      }}>
        <div className="container-custom" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <div>
            <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 28, fontWeight: 700, color: "white", marginBottom: 8 }}>
              Ready to Build Something Amazing?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16 }}>
              Talk to our display experts. Get custom quotes, samples, and technical support.
            </p>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/contact-us" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "white", color: "#D9232D",
              padding: "14px 28px", borderRadius: 10,
              fontWeight: 700, fontSize: 15, textDecoration: "none",
              transition: "all 0.3s",
            }}>
              Get a Quote <ArrowRight size={18} />
            </Link>
            <a href="tel:+918287754180" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.15)",
              border: "2px solid rgba(255,255,255,0.5)",
              color: "white",
              padding: "14px 28px", borderRadius: 10,
              fontWeight: 600, fontSize: 15, textDecoration: "none",
            }}>
              <Phone size={18} /> Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom" style={{ padding: "64px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48 }}>
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "linear-gradient(135deg, #D9232D, #ff5a60)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Monitor size={24} color="white" />
              </div>
              <div>
                <div style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 18, color: "white" }}>Touch LCD</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "1px" }}>DISPLAYS</div>
              </div>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.75, marginBottom: 24 }}>
              Authorized distributor of Beijing DWIN Technology. Supplying premium UART LCD, HMI touch panels & TFT displays across India and globally.
            </p>

            {/* Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: Mail, text: "sales@touchlcddisplays.com", href: "mailto:sales@touchlcddisplays.com" },
                { icon: Phone, text: "+91 8287754180", href: "tel:+918287754180" },
                { icon: MapPin, text: "New Delhi, India", href: "#" },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  color: "rgba(255,255,255,0.7)", fontSize: 14,
                  textDecoration: "none", transition: "color 0.2s",
                }}>
                  <Icon size={16} color="#D9232D" />
                  {text}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {socials.map(({ svg, label, href }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.7)", textDecoration: "none",
                  transition: "all 0.25s",
                }}>
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 15, color: "white", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Products
            </h4>
            {footerLinks.products.map((l) => (
              <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 15, color: "white", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Company
            </h4>
            {footerLinks.company.map((l) => (
              <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </div>

          {/* Industries */}
          <div>
            <h4 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 15, color: "white", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Industries
            </h4>
            {footerLinks.industries.map((l) => (
              <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          marginTop: 48, paddingTop: 24,
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between", gap: 12,
        }}>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14 }}>
            © {new Date().getFullYear()} Touch LCD Displays. All rights reserved. Powered by Beijing DWIN Technology.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <a key={item} href="#" style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
