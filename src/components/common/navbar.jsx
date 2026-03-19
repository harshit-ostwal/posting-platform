import React from "react";
import { Bell, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Heading } from "../ui/headings";

function Navbar() {
  return (
    <nav className="flex items-center justify-between h-20 sm:px-5 mb-10 border-b shadow-sm">
      <Heading size="h4">Reactors</Heading>

      <div className="flex items-center gap-6">
        <Button
          size="icon-lg"
          variant={"none"}
          className={"hover:text-primary"}
        >
          <Bell />
        </Button>
        <Button
          size="icon-lg"
          variant={"none"}
          className={"hover:text-primary"}
        >
          <Search />
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
