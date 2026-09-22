"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Monitor } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/get-to-know-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.35s ease",
        background: scrolled
          ? "rgba(0,27,64,0.97)"
          : "rgba(0,27,64,0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <div className="container-custom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: "linear-gradient(135deg, #D9232D, #ff5a60)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Monitor size={22} color="white" />
          </div>
          <div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 17, color: "white", lineHeight: 1.1 }}>
              Touch LCD
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", fontWeight: 500, letterSpacing: "0.5px" }}>
              DISPLAYS
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "8px" }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: isActive ? "white" : "rgba(255,255,255,0.75)",
                  fontWeight: isActive ? 600 : 500,
                  fontSize: 15,
                  textDecoration: "none",
                  padding: "8px 14px",
                  borderRadius: "8px",
                  background: isActive ? "rgba(217,35,45,0.85)" : "transparent",
                  transition: "all 0.25s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.target as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                    (e.target as HTMLElement).style.color = "white";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.target as HTMLElement).style.background = "transparent";
                    (e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)";
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact-us" className="btn-primary" style={{ marginLeft: "8px", padding: "10px 22px", fontSize: 14 }}>
            Get Quote
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none", border: "none", color: "white",
            cursor: "pointer", padding: 8, borderRadius: 8,
            display: "none",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(0,27,64,0.98)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "16px 24px 24px",
          animation: "slideDown 0.2s ease",
        }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 16px",
                  color: isActive ? "white" : "rgba(255,255,255,0.75)",
                  fontWeight: isActive ? 600 : 500,
                  fontSize: 16,
                  textDecoration: "none",
                  borderRadius: 10,
                  background: isActive ? "rgba(217,35,45,0.8)" : "transparent",
                  marginBottom: 4,
                  transition: "all 0.2s",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact-us"
            onClick={() => setMenuOpen(false)}
            className="btn-primary"
            style={{ marginTop: 12, width: "100%", justifyContent: "center" }}
          >
            Get Quote
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
