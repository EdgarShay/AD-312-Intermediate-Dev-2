import { useNavigate, useParams } from "react-router";
import { posts } from "../data/posts";

export default function PostView() {
    const { postId } = useParams();
    const navigate = useNavigate();

    const post = posts.find((p) => p.id === Number(postId));

    if (!post) {
        return (
            <div className="not-found">
                <h1>Post Not Found</h1>

                <button className="back-btn" onClick={() => navigate("/")}>
                    Return to Feed
                </button>
            </div>
        );
    }

    return (
        <div className="post-view">
            <span className="post-number">Post #{post.id}</span>

            <h1>{post.title}</h1>

            <p>{post.content}</p>

            <button className="back-btn" onClick={() => navigate("/")}>
                Return to Feed
            </button>
        </div>
    );
}