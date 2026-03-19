import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/headings";
import { ImageComp } from "@/components/ui/image";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import {
  Bookmark,
  Heart,
  MessagesSquare,
  MoreHorizontal,
  Share2,
} from "lucide-react";
import React, { useState } from "react";
import PostModal from "./post-modal";

function Post({ posts, loading, deletePost, editPost }) {
  const [showMore, setShowMore] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEdit = (idx) => {
    setShowEditModal(idx);
    setShowModal(null);
  };
  const handleDelete = (idx) => {
    const confirmDelete = confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) {
      return;
    }
    deletePost(posts[idx].id);
    setShowModal(null);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center gap-1">
        <Spinner />
        <Heading size="h6">Loading posts...</Heading>
        <Heading size="p">
          Please wait while we fetch the posts for you.
        </Heading>
      </div>
    );
  }

  return (
    <>
      {showModal !== null && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setShowModal(null)}
        />
      )}

      <div className="grid grid-cols-1 gap-10">
        {posts.length === 0 && (
          <div className="flex flex-col items-center gap-1">
            <Heading size="h6">No posts available</Heading>
            <Heading size="p" className="text-muted-foreground">
              Be the first to create a post!
            </Heading>
          </div>
        )}

        {posts &&
          posts.length > 0 &&
          posts.map((post, idx) => (
            <React.Fragment key={idx}>
              <div className="grid gap-4 border-b pb-4">
                <div className=" flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <ImageComp
                      src={post.user.avatar}
                      alt={post.user.name}
                      className={"w-13 h-13 rounded-full"}
                    />
                    <div className="flex flex-col">
                      <Heading size="h6" className={"font-semibold"}>
                        {post.user.name}
                      </Heading>
                      <Heading size="p">@{post.user.username}</Heading>
                    </div>
                  </div>
                  <div className="relative">
                    <Button
                      variant={"none"}
                      size={"icon"}
                      onClick={() =>
                        setShowModal(showModal === idx ? null : idx)
                      }
                    >
                      <MoreHorizontal />
                    </Button>
                    {showModal === idx && (
                      <div className="absolute z-20 flex flex-col gap-2 p-2 rounded-xl right-10 top-4 border border-border bg-popover shadow-lg">
                        <Button
                          variant={"secondary"}
                          onClick={() => handleEdit(idx)}
                        >
                          Edit Post
                        </Button>
                        <Button
                          variant={"destructive"}
                          onClick={() => handleDelete(idx)}
                        >
                          Delete Post
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col group gap-4 justify-between">
                  <Heading
                    size="h6"
                    dangerouslySetInnerHTML={{ __html: post?.description }}
                    className={cn(
                      "overflow-hidden max-h-28 whitespace-pre-wrap",
                      showMore === idx && "max-h-full",
                    )}
                  />
                  {(post.description.split("\n").length > 5 ||
                    post.description.length > 100) && (
                    <Button
                      className="text-blue-500 hover:underline"
                      onClick={() => setShowMore(showMore === idx ? null : idx)}
                      variant="none"
                      size="none"
                    >
                      {showMore === idx ? "Show Less" : "Show More"}
                    </Button>
                  )}
                </div>

                {post.img && (
                  <ImageComp
                    src={post?.img}
                    alt={post?.alt}
                    className={"aspect-5/4"}
                  />
                )}

                <Heading size="p" className={"text-muted-foreground"}>
                  {post.createdAt}
                </Heading>

                <div className="h-px bg-border" />

                <div className="flex items-center justify-between w-full">
                  <Button size={"icon"} variant={"none"}>
                    <Heart /> {post.likes.count}
                  </Button>
                  <Button size={"icon"} variant={"none"}>
                    <MessagesSquare /> {post.comments.count}
                  </Button>
                  <Button size={"icon"} variant={"none"}>
                    <Bookmark /> {post.bookmarks.count}
                  </Button>
                  <Button size={"icon"} variant={"none"}>
                    <Share2 />
                  </Button>
                </div>
              </div>

              {showEditModal === idx && (
                <PostModal
                  showModal={showEditModal === idx}
                  setShowModal={setShowEditModal}
                  editPost={editPost}
                  type="edit"
                  id={posts[showEditModal]}
                />
              )}
            </React.Fragment>
          ))}
      </div>
    </>
  );
}

export default Post;
