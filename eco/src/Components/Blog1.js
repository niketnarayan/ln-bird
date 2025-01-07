import React, { useState, useEffect } from "react";
import api from './api'
import Header from './Header';

function Blog1() {
  const [blogPosts, setBlogPosts] = useState([]);

  // Fetch blog posts from the backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("getblog"); // Replace with your API endpoint
        setBlogPosts(response.data); // Assuming the API returns an array of blogs
      } catch (error) {
        console.error("Error fetching blogs:", error.message || error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <Header />

      <div
        style={{
          background: "linear-gradient(to bottom right, #dfffbf, #ffeaba)",
          fontFamily: "Arial, sans-serif",
          padding: "40px",
          marginTop: "1rem",
          marginTop:"8rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1>Kiona Tales</h1>
        </div>
        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card h-100 shadow-sm"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <img
                  src={post.image}
                  className="card-img-top"
                  alt={`Blog ${index + 1} Image`}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontSize: "1.25rem", fontWeight: "bold" }}
                  >
                    {post.title}
                  </h5>
                  <p className="card-text text-muted">{post.date}</p>
                  <p className="card-text">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog1;
