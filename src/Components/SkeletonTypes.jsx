import React from "react";
import {
  Skeleton,
  SkeletonCard,
  SkeletonText,
  SkeletonTable,
} from "@/Components/ui/Skeleton";

export default function SkeletonTypes() {
  return (
    <div className="flex justify-center text-black gap-8 items-start flex-wrap">
      
      {/* Left column */}
      <div  className="flex flex-col w-[200px] gap-4">
        <h1 className="text-sm font-semibold">Paragraph</h1>
        <SkeletonText  lines={3} />
        <h1 className="text-sm font-semibold">Table</h1>
        <SkeletonTable rows={7} cols={3} />
      </div>

      {/* Right column */}
      <div className="flex flex-col w-[200px] gap-4">
        <h1 className="text-sm font-semibold">Text</h1>
        <Skeleton width="200px" height="20px" />
        <h1 className="text-sm font-semibold">Card</h1>
        <SkeletonCard />
        
      </div>

    </div>
  );
}
