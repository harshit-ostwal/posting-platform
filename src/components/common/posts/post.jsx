import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/headings";
import { ImageComp } from "@/components/ui/image";
import { cn } from "@/lib/utils";
import { Bookmark, Heart, Share2 } from "lucide-react";
import React, { useState } from "react";

function Post({ posts }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-10">
      {posts &&
        posts.length > 0 &&
        posts.map((post, idx) => (
          <div key={idx} className="grid gap-4">
            <div className="flex items-center gap-4">
              <ImageComp
                src={post.user.avatar}
                alt={post.user.name}
                className={"w-14 h-14 rounded-full"}
              />
              <div className="flex flex-col">
                <Heading size="h6">{post.user.name}</Heading>
                <Heading size="p">@{post.user.username}</Heading>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Heading
                size="h6"
                dangerouslySetInnerHTML={{ __html: post?.description }}
                className={cn(
                  "line-clamp-2 whitespace-break-spaces text-ellipsis truncate",
                  showMore && "line-clamp-none",
                )}
              />
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-2 items-center">
                  <Button size={"icon-lg"} variant={"none"}>
                    <Heart />
                  </Button>
                  <Button size={"icon-lg"} variant={"none"}>
                    <Bookmark />
                  </Button>
                  <Button size={"icon-lg"} variant={"none"}>
                    <Share2 />
                  </Button>
                </div>
                <Heading size="h6" className={"text-muted-foreground"}>
                  {post.createdAt}
                </Heading>
              </div>
              {showMore ? (
                <Button
                  onClick={() => setShowMore(!showMore)}
                  variant={"none"}
                  size="none"
                >
                  {showMore ? "Show Less" : "Show More"}
                </Button>
              ) : (
                <Button
                  onClick={() => setShowMore(!showMore)}
                  variant={"none"}
                  size="none"
                >
                  {showMore ? "Show Less" : "Show More"}
                </Button>
              )}
            </div>

            <ImageComp
              src={post?.img}
              alt={post?.alt}
              className={"aspect-video"}
            />
          </div>
        ))}
    </div>
  );
}

export default Post;
