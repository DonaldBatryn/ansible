"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  console.log({ current });
  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        width={1000}
        height={1000}
        alt={"Featured image"}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => {
          return (
            <div
              key={image}
              onClick={() => {
                setCurrent(index);
              }}
              className={cn(
                "border mr-2 cursor-pointer hover:border-orange-600",
                current === index && "border-orange-500"
              )}
            >
              <Image
                key={image}
                src={image}
                width={100}
                height={100}
                alt={`Product image number ${index + 1}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
