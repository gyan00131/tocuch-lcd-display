import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";
import BlogCard from "./BlogCard";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;

  return (
    <section style={{ marginTop: 80 }}>
      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 16,
      }}>
        <div>
          <span className="section-badge">Continue Reading</span>
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: 28, fontWeight: 700, color: "var(--navy-dark)" }}>
            Related Articles
          </h2>
        </div>
        <Link href="/blog" style={{
          display: "flex", alignItems: "center", gap: 6,
          color: "var(--navy)", fontWeight: 600, fontSize: 14,
          textDecoration: "none",
        }}>
          View All <ArrowRight size={16} />
        </Link>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 28,
      }}>
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
