import { cn } from "@/lib/utils";
import React from "react";
import { useForm } from "react-hook-form";
import { Heading } from "../ui/headings";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { Input } from "../ui/input";

function PostModal({
  showModal,
  setShowModal,
  type,
  id,
  editPost,
  createPost,
}) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: id?.description || "",
    },
  });

  const onSubmit = (data) => {
    try {
      if (type === "edit") {
        editPost(id.id, data.description);
      } else {
        createPost(data.description, data?.image?.[0]);
      }
      setShowModal(false);
      reset();
    } catch (error) {
      console.error("Failed to submit post:", error);
    }
  };

  return (
    <div
      className={cn(
        showModal ? "flex" : "hidden",
        "fixed inset-0 z-1000 backdrop-blur-xs items-center justify-center p-2",
      )}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl w-full bg-background p-4 rounded-lg shadow-lg min-h-96 border border-border flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <Heading size="h5" className={"font-semibold"}>
              {type === "edit" ? "Edit Post" : "Create a New Post"}
            </Heading>
            <Button
              onClick={() => setShowModal(false)}
              variant={"none"}
              size={"icon"}
            >
              <X />
            </Button>
          </div>
          <Heading size="p">
            {type === "edit"
              ? "Update your post with new content or images."
              : "Share your thoughts, code snippets, or anything you want with the community!"}
          </Heading>
        </div>
        <div className="flex flex-col gap-2">
          <Textarea
            {...register("description", {
              required: "Description is required",
            })}
            placeholder={"What's on your mind?"}
          />
          {errors.description && (
            <Heading size="p" className="text-destructive">
              {errors.description.message}
            </Heading>
          )}
        </div>

        <Input
          type="file"
          accept="image/*"
          className={"file-input file-input-bordered file-input-sm w-full"}
          {...register("image")}
        />

        <Button type="submit" className="self-end" size={"sm"}>
          {type === "edit" ? "Update Post" : "Create Post"}
        </Button>
      </form>
    </div>
  );
}

export default PostModal;
