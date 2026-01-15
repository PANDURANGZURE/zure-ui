'use client'
import React from "react";
import Skeleton from "./Skeleton";

export default function SkeletonCard() {
  return (
    <div style={{ width: "250px", padding: "16px", borderRadius: "8px", border: "1px solid #ddd" }}>
      <Skeleton width="100%" height="150px" borderRadius="8px" />
      <div style={{ marginTop: "12px" }}>
        <Skeleton width="80%" height="20px" />
        <Skeleton width="60%" height="20px" style={{ marginTop: "8px" }} />
      </div>
    </div>
  );
}
