import { useState } from "react";
import Bookmarks from "../constants/bookmarks";
import Comments from "../constants/comments";
import Likes from "../constants/likes";
import Posts from "../constants/posts";
import Users from "../constants/users";

export function usePosts() {
  const [posts, setPosts] = useState(Posts);
  const [loading, setLoading] = useState(fetchPosts);

  function fetchPosts() {
    setTimeout(() => setLoading(false), 1000);
    return true;
  }

  const filteredPosts = posts.map((post) => {
    const user = Users.find((user) => user.id === post.userId);
    const likes = Likes.filter((like) => like.postId === post.id);
    const bookmarks = Bookmarks.filter(
      (bookmark) => bookmark.postId === post.id,
    );
    const comments = Comments.filter((comment) => comment.postId === post.id);
    return {
      ...post,
      user,
      likes: {
        data: likes,
        count: likes.length,
      },
      bookmarks: {
        data: bookmarks,
        count: bookmarks.length,
      },
      comments: {
        data: comments,
        count: comments.length,
      },
    };
  });

  const createPost = (description, image) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newPost = {
          id: posts.length + 1,
          userId: 1,
          description,
          img: image ? URL.createObjectURL(image) : null,
          alt: "User uploaded image",
          createdAt: new Date().toLocaleString(),
        };
        setPosts((prev) => [newPost, ...prev]);
        resolve();
      }, 800);
    });
  };

  const deletePost = (postId) => {
    setPosts((prev) => prev.filter((post) => post.id !== postId));
  };

  const editPost = (postId, newDescription, newImage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setPosts((prev) =>
          prev.map((post) =>
            post.id === postId
              ? {
                  ...post,
                  description: newDescription,
                  ...(newImage && { img: URL.createObjectURL(newImage) }),
                }
              : post,
          ),
        );
        resolve();
      }, 800);
    });
  };

  return {
    filteredPosts,
    loading,
    fetchPosts,
    deletePost,
    editPost,
    createPost,
  };
}
