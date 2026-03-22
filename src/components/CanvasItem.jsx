// Renders the correct UI for each dropped item based on its 'type'

import { memo } from "react";

// memo() wraps the component and does a shallow comparison of props before re-rendering
// If props haven't changed since last render → React skips the render entirely
// This is the single most impactful fix for list performance
const CanvasItem = memo(function ({ item }) {
  // Decide what to render based on component type
  const renderContent = () => {
    switch (item.type) {
      case "Text":
        return <p>Text Block</p>;
      case "Button":
        return <button>Click me</button>;
      case "Image":
        return <div className="image-placeholder">[ Image ]</div>;
      default:
        return <div>Unknown</div>;
    }
  };

  return (
    <div className="canvas-item">
      {/* Small label so we can tell items apart visually */}
      <span className="item-label">{item.type}</span>
      {renderContent()}
    </div>
  );
});

export default CanvasItem;
