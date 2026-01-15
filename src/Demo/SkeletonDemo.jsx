"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Skeleton,
  SkeletonCard,
  SkeletonText,
  SkeletonTable,
} from "@/Components/ui/Skeleton";

import {RotateCw} from "lucide-react"

export default function SkeletonTypes() {
  const [loading, setLoading] = useState(true);

  // Auto load after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className="flex flex-col items-center gap-6">

      {/* Refresh Button */}
      <div className="flex justify-end text-black w-full"><button
        onClick={() => setLoading(true)}
        className="px-2 py-2 text-sm border rounded-full hover:bg-gray-100"
      >
        <RotateCw />
      </button></div>

      {/* Content */}
      <div className="flex justify-center text-black gap-8 items-start flex-wrap">

        {/* Left column */}
        <div className="flex flex-col w-[220px] gap-4">
          <h1 className="text-sm font-semibold">Paragraph</h1>

          {loading ? (
            <SkeletonText lines={2} />
          ) : (
            <p className="text-sm text-gray-700">
              This is a paragraph that appears after loading is complete.
            </p>
          )}

          <h1 className="text-sm font-semibold">Table</h1>

          {loading ? (
            <SkeletonTable rows={7} cols={3} />
          ) : (
            <table className="w-full text-sm border">
              <thead>
                <tr className="border-b">
                  <th className="p-1 text-left">Name</th>
                  <th className="p-1 text-left">Role</th>
                  <th className="p-1 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-1">Saurav</td>
                  <td className="p-1">Developer</td>
                  <td className="p-1">Active</td>
                </tr>
                <tr className="border-b">
                  <td className="p-1">Saurav</td>
                  <td className="p-1">Developer</td>
                  <td className="p-1">Active</td>
                </tr>
                <tr className="border-b">
                  <td className="p-1">Saurav</td>
                  <td className="p-1">Developer</td>
                  <td className="p-1">Active</td>
                </tr>
                <tr className="border-b">
                  <td className="p-1">Saurav</td>
                  <td className="p-1">Developer</td>
                  <td className="p-1">Active</td>
                </tr>
                <tr className="border-b">
                  <td className="p-1">Saurav</td>
                  <td className="p-1">Developer</td>
                  <td className="p-1">Active</td>
                </tr>
                <tr className="border-b">
                  <td className="p-1">Saurav</td>
                  <td className="p-1">Developer</td>
                  <td className="p-1">Active</td>
                </tr>
                <tr className="border-b">
                  <td className="p-1">Saurav</td>
                  <td className="p-1">Developer</td>
                  <td className="p-1">Active</td>
                </tr>
                <tr className="border-b">
                  <td className="p-1">Saurav</td>
                  <td className="p-1">Developer</td>
                  <td className="p-1">Active</td>
                </tr>
                <tr className="border-b">
                  <td className="p-1">Saurav</td>
                  <td className="p-1">Developer</td>
                  <td className="p-1">Active</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        {/* Right column */}
        <div className="flex flex-col w-[220px] gap-4">
          <h1 className="text-sm font-semibold">Text</h1>

          {loading ? (
            <Skeleton width="200px" height="20px" />
          ) : (
            <span className="text-sm text-gray-800">
              Loaded Text Content
            </span>
          )}

          <h1 className="text-sm font-semibold">Card</h1>

          {loading ? (
            <SkeletonCard />
          ) : (
            <div className="w-[280px] p-4 border rounded-xl">
              <img
                src="/1.png"
                alt="demo"
                className="rounded-lg mb-3"
              />
              <h3 className="text-sm font-semibold">Demo Card</h3>
              <p className="text-xs text-gray-600">
                This card replaces the skeleton after loading.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
