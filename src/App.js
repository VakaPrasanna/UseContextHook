import "./styles.css";
import React from "react";
import BlogContextDemo from "./BlogContextDemo";

const blogInfo = {
  React: {
    post: "Learn useContext Hooks",
    author: "Prasanna V"
  },
  NodeJS: {
    post: "Node Commands",
    author: "Sravanthi V"
  }
};

export const BlogContext = React.createContext(blogInfo);

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>Hello</h1>
        <BlogContext.Provider value={blogInfo}>
          <BlogContextDemo />
        </BlogContext.Provider>
      </div>
    </div>
  );
}
