import React from "react";
import Skeleton from "./Skeleton";

export default function SkeletonTable({
  rows = 5,
  cols = 3,
  width = "100%",              // width of each cell
  rowHeight = "20px",          // height of each row
  gap = "8px",                 // gap between rows and columns
  className = "",              // extra classes for table wrapper
  style = {},                  // inline styles
}) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap, ...style }}
      className={className}
    >
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} style={{ display: "flex", gap }}>
          {Array.from({ length: cols }).map((_, j) => (
            <Skeleton key={j} height={rowHeight} width={width} />
          ))}
        </div>
      ))}
    </div>
  );
}
