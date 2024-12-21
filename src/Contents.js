import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "./features/Posts";
import DetailPage from './DetailPage';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Contents = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [detailState, setDetailState] = useState("");

  //useSelectorでstoreの中のstateにアクセスできる。usersはreducer名
  const postList = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addPost({
        id: postList.length + 1,
        name: name,
        content: content,
      })
    );

    setName("");
    setContent("");
  };

  const createDetailState = (id, name, content) => {
    return {
      id: id,
      name: name,
      content: content
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Needs & Develop</h1>
      </div>
      <div className="addPost">
        <input
          type="text"
          placeholder="お名前"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="投稿内容"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button onClick={() => handleClick()}>投稿</button>
        <hr />
      </div>
      <div className="displayPosts">
        <DetailPage detailState={detailState} />
        {postList.map((post) => (
          <div key={post.id} className="post">
            <h1 className="postName">{post.name}</h1>
            <h1 className="postContent">{post.content}</h1>
            <button onClick={() => {
              setDetailState(createDetailState(post.id, post.name, post.content))
            }}>詳細</button><br />

            <button onClick={() => dispatch(deletePost({ id: post.id }))}>
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contents
