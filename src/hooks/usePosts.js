import { useState } from "react";
import Bookmarks from "../constants/bookmarks";
import Comments from "../constants/comments";
import Likes from "../constants/likes";
import Posts from "../constants/posts";
import Users from "../constants/users";

export function usePosts() {
  const [loading, setLoading] = useState(fetchPosts);

  function fetchPosts() {
    setTimeout(() => setLoading(false), 1000);
    return true;
  }

  const filteredPosts = Posts.map((post) => {
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

  return { filteredPosts, loading, fetchPosts };
}
