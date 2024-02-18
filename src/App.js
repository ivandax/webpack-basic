import React from "react";

export function App() {
  return (
    <div>
      <span>Hello world!</span>
      <span>{new Date().toISOString()}</span>
    </div>
  );
}
