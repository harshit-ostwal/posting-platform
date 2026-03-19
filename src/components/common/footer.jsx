import React from "react";
import { Heading } from "../ui/headings";
import { Copyright } from "lucide-react";

function Footer() {
  return (
    <Heading
      size="p"
      className={
        "inline-flex mx-auto justify-end items-center text-wrap gap-2 text-center text-muted-foreground py-10"
      }
    >
      <Copyright size={18} /> {new Date().getFullYear()} Posting Platform. All
      rights reserved.
    </Heading>
  );
}

export default Footer;
