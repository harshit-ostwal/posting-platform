import { useState } from "react";
import Footer from "./components/common/footer";
import Navbar from "./components/common/navbar";
import CreatePostBtn from "./components/posts/create-post-btn";
import Post from "./components/posts/post";
import { usePosts } from "./hooks/usePosts";
import PostModal from "./components/posts/post-modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const { filteredPosts, loading, deletePost, editPost, createPost } =
    usePosts();

  return (
    <div className="w-11/12 relative sm:border-x lg:w-1/4 mx-auto min-h-screen flex flex-col">
      <Navbar />
      <main className="sm:px-5 flex flex-col gap-10 h-auto flex-1">
        <CreatePostBtn setShowModal={setShowModal} />
        <PostModal
          showModal={showModal}
          setShowModal={setShowModal}
          type="create"
          createPost={createPost}
        />
        <Post
          posts={filteredPosts}
          loading={loading}
          deletePost={deletePost}
          editPost={editPost}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
