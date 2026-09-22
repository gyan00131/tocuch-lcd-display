"use client";
import { useState } from "react";
import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "sales@touchlcddisplays.com", href: "mailto:sales@touchlcddisplays.com", desc: "We reply within 4 business hours" },
  { icon: Phone, label: "Call Us", value: "+91 8287754180", href: "tel:+918287754180", desc: "Mon – Sat, 9 AM – 6 PM IST" },
  { icon: MapPin, label: "Visit Us", value: "New Delhi, India", href: "#", desc: "By appointment only" },
  { icon: MessageSquare, label: "WhatsApp", value: "+91 8287754180", href: "https://wa.me/918287754180", desc: "Quick responses via WhatsApp" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-bg" style={{ paddingTop: 72 }}>
        <div className="container-custom" style={{ padding: "80px 24px 72px", position: "relative", zIndex: 1, textAlign: "center" }}>
          <span className="section-badge" style={{ background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>
            Contact Us
          </span>
          <h1 style={{ fontFamily: "Poppins", fontWeight: 900, fontSize: "clamp(30px, 5vw, 52px)", color: "white", marginBottom: 16, lineHeight: 1.2 }}>
            Let&apos;s Build Something <span style={{ color: "#ff6b70" }}>Together</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 18, maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            Get in touch with our display experts for free consultation, technical support, product samples, and custom quotes.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section style={{ background: "var(--gray-50)", padding: "0 0 0" }}>
        <div className="container-custom" style={{ padding: "0 24px" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 20, marginTop: -36, position: "relative", zIndex: 2,
          }}>
            {contactInfo.map(({ icon: Icon, label, value, href, desc }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                style={{ textDecoration: "none" }}>
                <div className="card" style={{ padding: "28px 24px", textAlign: "center", height: "100%" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: "linear-gradient(135deg, var(--navy), var(--navy-light))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px",
                  }}>
                    <Icon size={22} color="white" />
                  </div>
                  <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 14, color: "var(--gray-500)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "var(--navy-dark)", marginBottom: 6 }}>{value}</div>
                  <div style={{ fontSize: 13, color: "var(--gray-500)" }}>{desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "flex-start" }}>
            {/* Form */}
            <div className="card" style={{ padding: "48px 40px" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <CheckCircle2 size={64} color="var(--whatsapp)" style={{ margin: "0 auto 20px" }} />
                  <h3 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 24, color: "var(--navy-dark)", marginBottom: 12 }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "var(--gray-500)", fontSize: 16, lineHeight: 1.7 }}>
                    Thank you for reaching out. Our display experts will get back to you within 4 business hours.
                  </p>
                  <button className="btn-primary" style={{ marginTop: 28 }} onClick={() => setSubmitted(false)}>
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 26, color: "var(--navy-dark)", marginBottom: 8 }}>
                    Send Us a Message
                  </h2>
                  <p style={{ color: "var(--gray-500)", fontSize: 15, marginBottom: 32 }}>
                    Fill in the form below and we&apos;ll get back to you with a detailed quote or technical answer.
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <div>
                        <label className="form-label" htmlFor="contact-name">Full Name *</label>
                        <input id="contact-name" className="form-input" type="text" placeholder="Rajesh Kumar" required
                          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div>
                        <label className="form-label" htmlFor="contact-email">Email Address *</label>
                        <input id="contact-email" className="form-input" type="email" placeholder="you@company.com" required
                          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <div>
                        <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                        <input id="contact-phone" className="form-input" type="tel" placeholder="+91 XXXXX XXXXX"
                          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                      </div>
                      <div>
                        <label className="form-label" htmlFor="contact-company">Company Name</label>
                        <input id="contact-company" className="form-input" type="text" placeholder="Your Company"
                          value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label className="form-label" htmlFor="contact-interest">I&apos;m Interested In</label>
                      <select id="contact-interest" className="form-input"
                        value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
                        <option value="">Select a product or service...</option>
                        <option>UART LCD Displays</option>
                        <option>HMI Touch Panels</option>
                        <option>TFT LCD Modules</option>
                        <option>Industrial Displays</option>
                        <option>Medical Displays</option>
                        <option>Automotive Displays</option>
                        <option>Custom/OEM Solution</option>
                        <option>Technical Support</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label" htmlFor="contact-message">Message *</label>
                      <textarea id="contact-message" className="form-input" rows={5}
                        placeholder="Describe your application, required display size, quantity, and any specific requirements..."
                        required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        style={{ resize: "vertical" }} />
                    </div>
                    <button type="submit" className="btn-primary" style={{ fontSize: 16, padding: "16px", justifyContent: "center" }}>
                      <Send size={18} /> Send Message
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Side info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <div className="card" style={{ padding: "36px 28px" }}>
                <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 20, color: "var(--navy-dark)", marginBottom: 16 }}>
                  Why Contact Us?
                </h3>
                {[
                  "Free technical consultation & application assessment",
                  "Display sample program support (DGUS II)",
                  "Custom size & resolution quotes",
                  "Volume pricing for OEM/ODM projects",
                  "Fast shipping from Delhi warehouse",
                  "Post-sales firmware integration support",
                ].map((point) => (
                  <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                    <CheckCircle2 size={16} color="var(--whatsapp)" style={{ flex: "none", marginTop: 2 }} />
                    <span style={{ color: "var(--gray-700)", fontSize: 14, lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>

              <div className="card" style={{ padding: "28px", background: "var(--navy-dark)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <Clock size={24} color="var(--red)" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: "white" }}>Business Hours</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Indian Standard Time (IST)</div>
                  </div>
                </div>
                {[
                  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
                  { day: "Saturday", time: "9:00 AM – 2:00 PM" },
                  { day: "Sunday", time: "Closed" },
                ].map(({ day, time }) => (
                  <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.08)", alignItems: "center" }}>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>{day}</span>
                    <span style={{ color: "white", fontSize: 14, fontWeight: 600 }}>{time}</span>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/918287754180?text=Hi, I need help with Touch LCD Displays." target="_blank" rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 16,
                  background: "var(--whatsapp)", color: "white",
                  padding: "20px 24px", borderRadius: 16,
                  textDecoration: "none", transition: "all 0.3s",
                }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16 }}>Chat on WhatsApp</div>
                  <div style={{ fontSize: 13, opacity: 0.85 }}>Get instant replies from our team</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
