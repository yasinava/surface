"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts(0, 1);
  }, []);
  const fetchPosts = async (start: number, limit: number) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/get-product?_start=${start}&_limit=${limit}`
      );
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, ...data]);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const ids = posts.map(({ title }) => title);
  const filtered = posts.filter(
    ({ title }, index) => !ids.includes(title, index + 1)
  );
  return (
    <div style={{ display: "flex", alignItems: "center", height: "550px" }}>
      <h1>Posts</h1>
      <ul>
        {filtered.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={() => fetchPosts(filtered.length, 10)}>Load More</button>
    </div>
  );
};
export default page;
