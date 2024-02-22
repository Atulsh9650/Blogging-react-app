import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Bloglist } from "../store/Blog-list-store"; // Importing Bloglist directly, not as Bloglistdata

function Blog({ blog }) {
  const { deleteblog } = useContext(Bloglist);

  return (
    <div className="card post-card blog-content" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {blog.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger deletebutton"
            onClick={() => deleteblog(blog.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{blog.body}</p>
        {blog.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {blog.reactions} people.
        </div>
      </div>
    </div>
  );
}

export default Blog;
