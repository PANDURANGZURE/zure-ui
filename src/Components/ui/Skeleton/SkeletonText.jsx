// /components/Skeleton/SkeletonText.js
import React from "react";
import Skeleton from "./Skeleton";

export default function SkeletonText({ lines = 3, lineHeight = "20px", gap = "8px" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap }}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} height={lineHeight} />
      ))}
    </div>
  );
}
