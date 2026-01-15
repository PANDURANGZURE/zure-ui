'use client'
import React from "react";

export default function Skeleton({ width = "100%", height = "20px", borderRadius = "4px" }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: "#e0e0e0",
        overflow: "hidden",
        position: "relative",
      }}
      className="skeleton"
    >
      <div className="shimmer" />
      <style jsx>{`
        .skeleton {
          position: relative;
          background-color: #e0e0e0;
        }
        .shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          height: 100%;
          width: 100%;
          background: linear-gradient(
            to right,
            rgba(224, 224, 224, 0) 0%,
            rgba(245, 245, 245, 0.5) 50%,
            rgba(224, 224, 224, 0) 100%
          );
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
}
