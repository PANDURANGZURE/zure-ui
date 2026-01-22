'use client';

import { useState } from "react";
import { Switch } from "./ui/Switch";

export default function SwitchD() {
  const [state, setState] = useState({});

  const toggle = (key) =>
    setState((s) => ({ ...s, [key]: !s[key] }));

  return (
    <div style={{ display: "grid", gap: 20 }}>
      {["sm", "md", "lg"].map((size) => (
        <div key={size}>
          <h4>{size.toUpperCase()}</h4>

          <Switch
            size={size}
            variant="solid"
            label="Solid"
            checked={state[`${size}-solid`] || false}
            onChange={() => toggle(`${size}-solid`)}
          />

          <Switch
            size={size}
            variant="outline"
            label="Outline"
            color="#6366f1"
            checked={state[`${size}-outline`] || false}
            onChange={() => toggle(`${size}-outline`)}
          />
        </div>
      ))}
    </div>
  );
}
