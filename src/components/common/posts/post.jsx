import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/headings";
import { ImageComp } from "@/components/ui/image";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import { Bookmark, Heart, MessagesSquare, Share2 } from "lucide-react";
import { useState } from "react";

function Post({ posts, loading }) {
  const [showMore, setShowMore] = useState(null);

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
          <div key={idx} className="grid gap-4 border-b pb-4">
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
            <div className="flex flex-col gap-4 justify-between">
              <Heading
                size="h6"
                dangerouslySetInnerHTML={{ __html: post?.description }}
                className={cn(
                  "overflow-hidden max-h-28 whitespace-pre-wrap",
                  showMore === idx && "max-h-none",
                )}
              />
              <span className="self-start">
                {showMore === idx ? (
                  <Button
                    className={"text-blue-500 hover:underline"}
                    onClick={() => setShowMore(null)}
                    variant={"none"}
                    size="none"
                  >
                    {showMore === idx ? "Show Less" : "Show More"}
                  </Button>
                ) : (
                  <Button
                    className={"text-blue-500 hover:underline"}
                    onClick={() => setShowMore(idx)}
                    variant={"none"}
                    size="none"
                  >
                    {showMore === idx ? "Show Less" : "Show More"}
                  </Button>
                )}
              </span>
            </div>

            {post.image && (
              <ImageComp
                src={post?.img}
                alt={post?.alt}
                className={"aspect-video"}
              />
            )}

            <div className="h-px bg-border" />

            <div className="flex items-center justify-between w-full">
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
          </div>
        ))}
    </div>
  );
}

export default Post;
