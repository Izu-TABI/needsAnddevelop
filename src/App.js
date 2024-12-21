import "./Contents.css";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "./features/Posts";
import { useState } from "react";
import Contents from "./Contents";

function App() {
  return (
    <>
      <Contents />

    </>
  );
}

export default App;
