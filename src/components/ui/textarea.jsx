import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, placeholder, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      rows={5}
      className={cn(
        "flex resize-none max-h-96 w-full bg-transparent transition-colors outline-none placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 text-lg",
        className,
      )}
      placeholder={placeholder}
      {...props}
    />
  );
}

export { Textarea };
