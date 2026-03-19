import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/headings";
import { ImageComp } from "@/components/ui/image";
import { Image, Smile } from "lucide-react";
import React from "react";

function CreatePostBtn({ setShowModal }) {
  return (
    <div
      onClick={() => setShowModal(true)}
      className="flex flex-col sm:flex-row gap-6 w-full sm:items-center justify-between select-none border border-border duration-300 p-5 rounded-xl cursor-pointer"
    >
      <Heading size="p">What's on your mind?</Heading>

      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Image />
          </Button>
          <Button variant="outline" size="icon">
            <Smile />
          </Button>
        </div>
        <Button size="sm">Post</Button>
      </div>
    </div>
  );
}

export default CreatePostBtn;
