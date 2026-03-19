import { cn } from "@/lib/utils";
import React from "react";
import { useForm } from "react-hook-form";
import { Heading } from "../ui/headings";

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
        "fixed inset-0 z-1000 backdrop-blur-xs items-center justify-center",
      )}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl w-full bg-background p-6 rounded-lg shadow-lg h-96 border border-border flex flex-col gap-4"
      >
        <Heading size="h5">
          {type === "edit" ? "Edit Post" : "Create a New Post"}
        </Heading>
        <Heading size="p" className="text-muted-foreground">
          {type === "edit"
            ? "Update your post with new content or images."
            : "Share your thoughts, code snippets, or anything you want with the community!"}
        </Heading>
        <textarea
          {...register("description", { required: "Description is required" })}
          placeholder="What's on your mind?"
          className="w-full h-32 p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
        {errors.description && (
          <p className="text-sm text-red-500 -mt-2">
            {errors.description.message}
          </p>
        )}
        <input
          type="file"
          accept="image/*"
          {...register("image")}
          className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/80 cursor-pointer"
        />
        <div className="flex justify-end gap-2 mt-auto">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="px-4 py-2 rounded-md border border-border text-muted-foreground hover:bg-secondary"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/80"
          >
            {type === "edit" ? "Update Post" : "Create Post"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostModal;
