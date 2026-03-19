import Footer from "./components/common/footer";
import Navbar from "./components/common/navbar";
import CreatePost from "./components/common/posts/create-post";
import Post from "./components/common/posts/post";
import { usePosts } from "./hooks/usePosts";

function App() {
  const { filteredPosts, loading } = usePosts();

  return (
    <div className="w-11/12 sm:border-x lg:w-1/4 mx-auto min-h-screen flex flex-col">
      <Navbar />
      <main className="sm:px-5 flex flex-col gap-10 h-auto flex-1">
        <CreatePost />
        <Post posts={filteredPosts} loading={loading} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
