"use client";
import { useState } from "react";
import Link from "next/link";
import { blogPosts, getFeaturedPost, getPostsByCategory } from "@/lib/blog-data";
import BlogCard from "@/components/blog/BlogCard";
import FeaturedPost from "@/components/blog/FeaturedPost";
import CategoryFilter from "@/components/blog/CategoryFilter";
import { Rss, BookOpen } from "lucide-react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = getFeaturedPost();
  const filteredPosts = getPostsByCategory(activeCategory).filter((p) => !p.featured || activeCategory !== "All");
  const gridPosts = activeCategory === "All"
    ? blogPosts.filter((p) => !p.featured)
    : filteredPosts;

  return (
    <>
      {/* Hero Banner */}
      <section className="hero-bg" style={{ paddingTop: 72 }}>
        <div className="container-custom" style={{ padding: "80px 24px 64px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <span className="section-badge" style={{ background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>
            <Rss size={14} /> Insights &amp; Resources
          </span>
          <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, fontSize: "clamp(34px, 5vw, 56px)", color: "white", lineHeight: 1.15, marginBottom: 20 }}>
            The Touch LCD <br />
            <span style={{ background: "linear-gradient(135deg, #ff6b70, #D9232D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Knowledge Hub</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 18, maxWidth: 580, margin: "0 auto 40px", lineHeight: 1.75 }}>
            Expert articles, integration guides, and industry insights on HMI touch panels, TFT LCD displays, and embedded UI development.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <span className="industry-tag"><BookOpen size={14} /> {blogPosts.length} Articles</span>
            <span className="industry-tag">Industrial</span>
            <span className="industry-tag">Automotive</span>
            <span className="industry-tag">Medical</span>
            <span className="industry-tag">Tutorials</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ background: "var(--gray-50)" }}>
        <div className="container-custom">

          {/* Featured Post */}
          {activeCategory === "All" && (
            <div style={{ marginBottom: 64 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div className="divider" style={{ margin: 0 }} />
                <span style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 20, color: "var(--navy-dark)" }}>
                  Featured Article
                </span>
              </div>
              <FeaturedPost post={featured} />
            </div>
          )}

          {/* Category Filter */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
            <div>
              <h2 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 22, color: "var(--navy-dark)" }}>
                {activeCategory === "All" ? "All Articles" : `${activeCategory} Articles`}
              </h2>
              <p style={{ color: "var(--gray-500)", fontSize: 14, marginTop: 4 }}>
                {gridPosts.length} article{gridPosts.length !== 1 ? "s" : ""} found
              </p>
            </div>
            <CategoryFilter active={activeCategory} onFilter={setActiveCategory} />
          </div>

          {/* Blog Grid */}
          {gridPosts.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 28 }}>
              {gridPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--gray-500)" }}>
              <BookOpen size={48} style={{ margin: "0 auto 16px", opacity: 0.4 }} />
              <p style={{ fontSize: 18 }}>No articles found in this category yet.</p>
              <button onClick={() => setActiveCategory("All")} className="btn-outline-navy" style={{ marginTop: 20 }}>
                View All Articles
              </button>
            </div>
          )}

          {/* Newsletter CTA */}
          <div style={{
            marginTop: 80, padding: "56px 48px", borderRadius: 24,
            background: "linear-gradient(135deg, var(--navy-dark), var(--navy))",
            textAlign: "center",
          }}>
            <h3 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: 28, color: "white", marginBottom: 12 }}>
              Stay Updated with Latest Insights
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 32, fontSize: 16 }}>
              Get expert articles on HMI displays, integration guides, and industry news delivered to your inbox.
            </p>
            <div style={{ display: "flex", gap: 12, maxWidth: 480, margin: "0 auto", flexWrap: "wrap" }}>
              <input
                type="email"
                placeholder="your@email.com"
                className="form-input"
                style={{ flex: 1, minWidth: 200 }}
              />
              <button className="btn-primary" style={{ whiteSpace: "nowrap" }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
