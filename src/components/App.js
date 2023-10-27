import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Article from "./Article";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <ArticleList/>
    </div>
  );
}

export default App;
