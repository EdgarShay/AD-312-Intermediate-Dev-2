import { Link } from "react-router";
import { posts } from "../data/posts";

export default function Home() {
  return (
    <div>
      <section className="hero-section">
        <h1>Welcome to the Tech Blog</h1>

        <p>
          Explore React, frontend development, and modern web technologies.
        </p>
      </section>

      <div className="posts-grid">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <span className="post-number">Post #{post.id}</span>

            <h2>{post.title}</h2>

            <p>{post.content.substring(0, 70)}...</p>

            <Link to={`/post/${post.id}`} className="read-btn">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}