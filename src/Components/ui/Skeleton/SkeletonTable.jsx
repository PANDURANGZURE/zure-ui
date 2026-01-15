// /components/Skeleton/SkeletonTable.js
import React from "react";
import Skeleton from "./Skeleton";

export default function SkeletonTable({ rows = 5, cols = 3 }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} style={{ display: "flex", gap: "8px" }}>
          {Array.from({ length: cols }).map((_, j) => (
            <Skeleton key={j} height="20px" width="100%" />
          ))}
        </div>
      ))}
    </div>
  );
}
