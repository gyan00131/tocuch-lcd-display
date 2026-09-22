import Link from "next/link";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

const categoryColors: Record<string, string> = {
  Industrial: "pill-industrial",
  Automotive: "pill-automotive",
  Medical: "pill-medical",
  Military: "pill-military",
  Tutorials: "pill-tutorials",
};

const placeholderColors: Record<string, string> = {
  Industrial: "linear-gradient(135deg, #002B66, #003580)",
  Automotive: "linear-gradient(135deg, #92400e, #d97706)",
  Medical: "linear-gradient(135deg, #065f46, #059669)",
  Military: "linear-gradient(135deg, #374151, #6b7280)",
  Tutorials: "linear-gradient(135deg, #D9232D, #ff5a60)",
};

export default function BlogCard({ post }: { post: BlogPost }) {
  const bg = placeholderColors[post.category] || "linear-gradient(135deg, #002B66, #003580)";

  return (
    <article className="blog-card">
      <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
        <div className="blog-card-img">
          {/* Gradient placeholder with icon */}
          <div style={{
            width: "100%", height: "100%",
            background: bg,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 12,
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: 16,
              background: "rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 500 }}>
              {post.category}
            </span>
          </div>

          {/* Category badge overlay */}
          <div style={{ position: "absolute", top: 14, left: 14 }}>
            <span className={`blog-category-pill ${categoryColors[post.category] || "pill-industrial"}`}
              style={{
                background: "rgba(0,0,0,0.5)", color: "white",
                backdropFilter: "blur(8px)", marginBottom: 0,
              }}>
              {post.category}
            </span>
          </div>
        </div>
      </Link>

      <div className="blog-card-body">
        {/* Meta row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 5, color: "var(--gray-500)", fontSize: 13 }}>
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 5, color: "var(--gray-500)", fontSize: 13 }}>
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 700, color: "var(--navy-dark)", marginBottom: 10, lineHeight: 1.4 }}>
          <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit", transition: "color 0.2s" }}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p style={{ color: "var(--gray-500)", fontSize: 14, lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
          {post.excerpt.slice(0, 120)}...
        </p>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--gray-100)", paddingTop: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: bg,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <User size={16} color="white" />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--gray-700)" }}>{post.author}</div>
              <div style={{ fontSize: 11, color: "var(--gray-500)" }}>{post.authorRole}</div>
            </div>
          </div>
          <Link href={`/blog/${post.slug}`} style={{
            display: "flex", alignItems: "center", gap: 5,
            color: "var(--red)", fontSize: 13, fontWeight: 600,
            textDecoration: "none", transition: "gap 0.2s",
          }}>
            Read More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
