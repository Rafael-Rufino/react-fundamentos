import React from "react";

import { Header } from "../components/Header";
import { Post } from "../components/Post";
import Button from "../components/Button";
import ThemeProvider from "../context";

const postsMocks = [
  {
    id: Math.random(),
    title: "Título#1",
    subtitle: "Subtítulo 1",
    likes: 50,
    read: false,
    removed: false,
  },
  {
    id: Math.random(),
    title: "Título#2",
    subtitle: "Sub#2",
    likes: 10,
    read: false,
    removed: true,
  },
  {
    id: Math.random(),
    title: "Título#3",
    subtitle: "Sub#3",
    likes: 20,
    read: true,
    removed: false,
  },
  {
    id: Math.random(),
    title: "Título#4",
    subtitle: "Sub#4",
    likes: 30,
    read: true,
    removed: false,
  },
];

export function Layout() {
  const [posts, setPosts] = React.useState([...postsMocks]);
  function handleAddPost() {
    const newPost = {
      id: Math.random(),
      title: `Título#${posts.length + 1}`,
      subtitle: `Subtítulo#${posts.length + 1}`,
      likes: Math.floor(Math.random() * 100),
    };

    setPosts((prevState) => [...prevState, newPost]);
  }

  const handleRemovePost = React.useCallback((postId) => {
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  }, []);
  return (
    <ThemeProvider>
      <Header title="JS Stack´s Blog">
        <h2>POsts da semana</h2>
        <Button onClick={handleAddPost}>Atualizar</Button>
      </Header>
      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={{
            id: post.id,
            title: post.title,
            subtitle: post.subtitle,
            likes: post.likes,
            read: post.read,
          }}
        />
      ))}
    </ThemeProvider>
  );
}
