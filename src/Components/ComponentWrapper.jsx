import React from "react";

export const ComponentWrapper = ({ children, style }) => {
  return (
    <div
      style={{
        padding: "2rem",
        margin: "1.5rem 0",
        borderRadius: "12px",
        border: "1px solid #eaeaea",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        flexWrap: "wrap",
        minHeight: "150px",
        ...style,
      }}
    >
      {children}
    </div>
  );
};