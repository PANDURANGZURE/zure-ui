"use client";

import { useState } from "react";
import { Select } from "@/Components/ui/Select/Select";

export default function SelectDemo() {
  const [country, setCountry] = useState("");

  return (
    <>
      <p className="text-black">Selected: {country}</p>

      <Select
      className="text-black"
        label="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        options={[
          { label: "India", value: "in" },
          { label: "USA", value: "us" },
        ]}
        placeholder="Select country"
        variant="default"
        size="md"
        color="#000000ff"
      />
    </>
  );
}
