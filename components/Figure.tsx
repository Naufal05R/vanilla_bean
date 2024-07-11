import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Figure = ({
  src,
  alt,
  ...props
}: {
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
  classNames?: {
    figure?: string;
    image?: string;
  };
}) => {
  const { figure, image } = props.classNames ?? {};
  return (
    <figure
      className={cn(
        "aspect-square w-full bg-stone-500 xs:aspect-[4/3] sm:aspect-video lg:aspect-square lg:w-7/12",
        figure,
      )}
    >
      <Image src={src} alt={alt} className={cn("", image)} {...props} />
    </figure>
  );
};

export default Figure;
