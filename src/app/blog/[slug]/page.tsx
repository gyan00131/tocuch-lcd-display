import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllSlugs, getRelatedPosts, BlogPost } from "@/lib/blog-data";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from "lucide-react";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Touch LCD Displays Blog`,
    description: post.excerpt.slice(0, 160),
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt.slice(0, 160),
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt.slice(0, 160),
    },
  };
}

const categoryColors: Record<string, string> = {
  Industrial: "linear-gradient(135deg, #002B66, #003580)",
  Automotive: "linear-gradient(135deg, #92400e, #d97706)",
  Medical: "linear-gradient(135deg, #065f46, #059669)",
  Military: "linear-gradient(135deg, #374151, #6b7280)",
  Tutorials: "linear-gradient(135deg, #D9232D, #ff5a60)",
};

const pillCategoryClass: Record<string, string> = {
  Industrial: "pill-industrial",
  Automotive: "pill-automotive",
  Medical: "pill-medical",
  Military: "pill-military",
  Tutorials: "pill-tutorials",
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, post.category, 3);
  const bg = categoryColors[post.category] || categoryColors.Industrial;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author, jobTitle: post.authorRole },
    publisher: { "@type": "Organization", name: "Touch LCD Displays", url: "https://touchlcddisplays.com" },
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="hero-bg" style={{ paddingTop: 72 }}>
        <div className="container-custom" style={{ padding: "60px 24px 48px", position: "relative", zIndex: 1 }}>
          {/* Back link */}
          <Link href="/blog" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: "rgba(255,255,255,0.7)", textDecoration: "none",
            fontSize: 14, fontWeight: 500, marginBottom: 28,
            transition: "color 0.2s",
          }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          {/* Category pill */}
          <div style={{ marginBottom: 16 }}>
            <span className={`blog-category-pill ${pillCategoryClass[post.category] || ""}`}
              style={{ background: "rgba(255,255,255,0.15)", color: "white", backdropFilter: "blur(8px)" }}>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 900,
            fontSize: "clamp(26px, 4vw, 48px)", color: "white",
            lineHeight: 1.2, maxWidth: 800, marginBottom: 24,
          }}>
            {post.title}
          </h1>

          {/* Meta row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, color: "rgba(255,255,255,0.7)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14 }}>
              <User size={15} />
              <strong style={{ color: "white" }}>{post.author}</strong> · {post.authorRole}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14 }}>
              <Calendar size={15} />
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14 }}>
              <Clock size={15} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Image Banner */}
      <div style={{ background: bg, height: 8 }} />
      <div style={{ background: "var(--gray-50)", padding: "0 0 8px" }}>
        <div className="container-custom" style={{ padding: "0 24px" }}>
          <div style={{
            background: bg,
            borderRadius: "0 0 20px 20px",
            height: 280,
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden",
            marginTop: 0,
          }}>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }} />
            <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              <div style={{
                width: 80, height: 80, borderRadius: 20,
                background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 16px",
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4M7 8h10M7 11h7" />
                </svg>
              </div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>{post.category} · Touch LCD Displays Blog</div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <section style={{ background: "var(--gray-50)", paddingBottom: 80 }}>
        <div className="container-custom" style={{ padding: "0 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>

            {/* Tags */}
            <div style={{ padding: "28px 0 24px", display: "flex", flexWrap: "wrap", gap: 8 }}>
              {post.tags.map((tag) => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>

            {/* Excerpt highlight */}
            <div style={{
              background: "white",
              border: "1px solid var(--gray-200)",
              borderLeft: "4px solid var(--navy)",
              borderRadius: "0 12px 12px 0",
              padding: "20px 24px",
              marginBottom: 32,
              color: "var(--navy-dark)",
              fontSize: 17,
              fontWeight: 500,
              lineHeight: 1.7,
              fontStyle: "italic",
            }}>
              {post.excerpt}
            </div>

            {/* Content */}
            <div
              className="article-body"
              style={{ background: "white", borderRadius: 16, padding: "40px 40px", boxShadow: "0 4px 20px rgba(0,43,102,0.06)" }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share strip */}
            <div style={{
              marginTop: 40, padding: "24px 28px",
              background: "white", borderRadius: 16,
              display: "flex", alignItems: "center", justifyContent: "space-between",
              flexWrap: "wrap", gap: 16,
              boxShadow: "0 4px 20px rgba(0,43,102,0.06)",
            }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "var(--navy-dark)", marginBottom: 4 }}>Found this helpful?</div>
                <div style={{ fontSize: 13, color: "var(--gray-500)" }}>Share it with your engineering team.</div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {["LinkedIn", "Twitter", "WhatsApp"].map((platform) => (
                  <button key={platform} style={{
                    padding: "10px 18px", borderRadius: 8, border: "2px solid var(--gray-200)",
                    background: "white", color: "var(--gray-700)", fontWeight: 600, fontSize: 13,
                    cursor: "pointer", transition: "all 0.2s",
                  }}>
                    {platform}
                  </button>
                ))}
              </div>
            </div>

            {/* Author bio */}
            <div style={{
              marginTop: 32, padding: "32px", background: "white",
              borderRadius: 16, display: "flex", gap: 20, alignItems: "flex-start",
              boxShadow: "0 4px 20px rgba(0,43,102,0.06)", flexWrap: "wrap",
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%", background: bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                flex: "none",
              }}>
                <User size={28} color="white" />
              </div>
              <div>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 17, color: "var(--navy-dark)", marginBottom: 4 }}>
                  {post.author}
                </div>
                <div style={{ fontSize: 13, color: "var(--red)", fontWeight: 600, marginBottom: 10 }}>{post.authorRole}</div>
                <p style={{ fontSize: 14, color: "var(--gray-500)", lineHeight: 1.7 }}>
                  Expert at Touch LCD Displays with deep knowledge in display technology, embedded systems, and industrial applications.
                  Passionate about helping engineers build better products.
                </p>
              </div>
            </div>

            {/* Related Posts */}
            <RelatedPosts posts={related} />
          </div>
        </div>
      </section>
    </>
  );
}
