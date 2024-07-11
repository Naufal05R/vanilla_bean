import { cn } from "@/lib/utils";
import React from "react";

const Layer = ({ className, ...props }: { className?: string, onClick: () => void }) => {
  return (
    <div
      className={cn(
        "fixed right-0 top-0 z-40 h-screen w-full bg-black opacity-50",
        className,
      )}
      {...props}
    />
  );
};

export default Layer;
