import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import "./App.css";

function App() {
  // canvasItems holds all components the user has dropped onto the canvas
  // It's an array of objects, each representing one placed component
  // We lift state here (App) because both Sidebar and Canvas need to read/write it
  const [canvasItems, setCanvasItems] = useState([]);

  // Called when user drops a sidebar item onto the canvas
  // 'type' is what kind of component it is (e.g. "Text", "Button")
  // Generates 200 random items at once to simulate a heavy canvas
  // This is intentionally unoptimized — we want to feel the slowdown
  const handleStressTest = () => {
    const types = ["Text", "Button", "Image"];
    const items = Array.from({ length: 1000 }, (_, i) => ({
      id: Date.now() + i, // offset by i so each id stays unique
      type: types[i % types.length], // cycles through types: Text, Button, Image, Text...
    }));
    setCanvasItems(items);
  };
  // Called when user drops a sidebar item onto the canvas
  // 'type' is what kind of component it is (e.g. "Text", "Button")
  const handleDrop = (type) => {
    const newItem = {
      id: Date.now(), // unique id using timestamp — simple, good enough for now
      type, // what kind of component: 'Text' | 'Button' | 'Image'
    };
    // always create a new array instead of mutating state directly
    // React won't detect changes if you mutate the existing array
    setCanvasItems((prev) => [...prev, newItem]);
  };

  return (
    <div className="app-layout">
      {/* Sidebar: shows draggable palette items */}
      <Sidebar />

      {/* Toolbar: sits above canvas, holds stress test button */}
      <div className="editor-area">
        <div className="toolbar">
          <button onClick={handleStressTest}>Stress Test (200 items)</button>
          {/* Shows live count so we can see what's on canvas */}
          <span>{canvasItems.length} items on canvas</span>
        </div>
        <Canvas items={canvasItems} onDrop={handleDrop} />
      </div>
    </div>
  );
}

export default App;
