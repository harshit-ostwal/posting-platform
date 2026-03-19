import Navbar from "./components/common/navbar";
import Post from "./components/common/posts/post";
import Posts from "./constants/posts";
import User from "./constants/user";

function App() {
  const filteredPosts = Posts.map((post) => {
    const user = User.find((user) => user.id === post.userId);
    return { ...post, user };
  });

  return (
    <div className="w-11/12 md:w-4/5 lg:w-3/4 xl:w-1/2 mx-auto flex flex-col gap-10">
      <Navbar />

      <Post posts={filteredPosts} />
    </div>
  );
}

export default App;
