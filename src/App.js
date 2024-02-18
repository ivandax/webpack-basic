import React from "react";
import "./App.scss";

export function App() {
  return (
    <div className="root">
      <h3>Hello world!!!</h3>
      <span>{new Date().toISOString()}</span>
    </div>
  );
}
