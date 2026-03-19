import { useState } from "react";
import Footer from "./components/common/footer";
import Navbar from "./components/common/navbar";
import CreatePost from "./components/posts/create-post";
import CreatePostBtn from "./components/posts/create-post-btn";
import Post from "./components/posts/post";
import { usePosts } from "./hooks/usePosts";

function App() {
  const [showModal, setShowModal] = useState(false);
  const { filteredPosts, loading } = usePosts();

  return (
    <div className="w-11/12 relative sm:border-x lg:w-1/4 mx-auto min-h-screen flex flex-col">
      <Navbar />
      <main className="sm:px-5 flex flex-col gap-10 h-auto flex-1">
        <CreatePostBtn setShowModal={setShowModal} />
        <CreatePost showModal={showModal} setShowModal={setShowModal} />
        <Post posts={filteredPosts} loading={loading} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
