import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";
import Hours from "./Hours";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

// ReactDOM.render("What to show ", "Where to show")
function App() {
  return (
    <div>
      <Header />
      {/* <Heading />
      <List />
      <Hours /> */}
      <Note />
      <Footer />
    </div>
  );
}
export default App;
