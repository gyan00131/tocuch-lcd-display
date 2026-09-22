import Link from "next/link";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

const categoryColors: Record<string, string> = {
  Industrial: "linear-gradient(135deg, #002B66, #003580)",
  Automotive: "linear-gradient(135deg, #92400e, #d97706)",
  Medical: "linear-gradient(135deg, #065f46, #059669)",
  Military: "linear-gradient(135deg, #374151, #6b7280)",
  Tutorials: "linear-gradient(135deg, #D9232D, #ff5a60)",
};

export default function FeaturedPost({ post }: { post: BlogPost }) {
  const bg = categoryColors[post.category] || "linear-gradient(135deg, #002B66, #003580)";

  return (
    <article style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      borderRadius: 20,
      overflow: "hidden",
      boxShadow: "0 20px 60px rgba(0,43,102,0.18)",
      minHeight: 420,
    }} className="featured-article">
      {/* Image Side */}
      <div style={{
        background: bg,
        position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column", gap: 20,
        padding: 40,
      }}>
        {/* Decorative grid overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }} />

        {/* Floating display icon */}
        <div style={{
          width: 120, height: 120, borderRadius: 24,
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: "float 3s ease-in-out infinite",
          position: "relative", zIndex: 1,
        }}>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
            <path d="M7 8h10M7 11h7" />
          </svg>
        </div>

        {/* Badges */}
        <div style={{ display: "flex", gap: 8, position: "relative", zIndex: 1, flexWrap: "wrap", justifyContent: "center" }}>
          <span style={{
            background: "#D9232D", color: "white",
            padding: "5px 14px", borderRadius: 100,
            fontSize: 12, fontWeight: 700, letterSpacing: "0.5px",
          }}>
            ★ FEATURED
          </span>
          <span style={{
            background: "rgba(255,255,255,0.2)", color: "white",
            padding: "5px 14px", borderRadius: 100,
            fontSize: 12, fontWeight: 600,
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}>
            {post.category.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Content Side */}
      <div style={{ background: "white", padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* Meta */}
        <div style={{ display: "flex", gap: 20, marginBottom: 20, flexWrap: "wrap" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--gray-500)", fontSize: 14 }}>
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--gray-500)", fontSize: 14 }}>
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h2 style={{
          fontFamily: "Poppins, sans-serif", fontSize: 26, fontWeight: 800,
          color: "var(--navy-dark)", lineHeight: 1.3, marginBottom: 16,
        }}>
          {post.title}
        </h2>

        {/* Excerpt */}
        <p style={{ color: "var(--gray-500)", fontSize: 16, lineHeight: 1.75, marginBottom: 24 }}>
          {post.excerpt.slice(0, 160)}...
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag" style={{ fontSize: 12 }}>#{tag}</span>
          ))}
        </div>

        {/* Author + CTA */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: bg,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <User size={18} color="white" />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "var(--gray-700)" }}>{post.author}</div>
              <div style={{ fontSize: 12, color: "var(--gray-500)" }}>{post.authorRole}</div>
            </div>
          </div>

          <Link href={`/blog/${post.slug}`} className="btn-primary" style={{ padding: "12px 24px", fontSize: 14 }}>
            Read Article <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .featured-article {
            grid-template-columns: 1fr !important;
          }
          .featured-article > div:first-child {
            min-height: 260px;
          }
        }
      `}</style>
    </article>
  );
}
