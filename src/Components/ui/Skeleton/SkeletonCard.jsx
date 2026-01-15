// /components/Skeleton/SkeletonCard.js
import React from "react";
import Skeleton from "./Skeleton";

export default function SkeletonCard({
  width = "250px",
  padding = "16px",
  borderRadius = "8px",
  border = "1px solid #ddd",
  imageHeight = "150px",
  className = "",
  style = {},
}) {
  return (
    <div
      style={{
        width,
        padding,
        borderRadius,
        border,
        ...style,
      }}
      className={className}
    >
      {/* Image placeholder */}
      <Skeleton width="100%" height={imageHeight} borderRadius={borderRadius} />

      {/* Text placeholders */}
      <div style={{ marginTop: "12px" }}>
        <Skeleton width="80%" height="20px" />
        <Skeleton width="60%" height="20px" style={{ marginTop: "8px" }} />
      </div>
    </div>
  );
}
