import CanvasItem from "./CanvasItem";

function Canvas({ items, onDrop }) {
  const handleDragOver = (e) => {
    // By default, the browser does NOT allow dropping onto elements
    // preventDefault() tells the browser: "yes, this is a valid drop target"
    // Without this, the onDrop event will never fire
    e.preventDefault();
  };

  const handleDrop = (e) => {
    // Read the data we stored during onDragStart in Sidebar
    const type = e.dataTransfer.getData("componentType");
    // Pass it up to App where state lives
    onDrop(type);
  };

  return (
    <div
      className="canvas"
      onDragOver={handleDragOver} // must have this or drop won't work
      onDrop={handleDrop} // fires when user releases drag over canvas
    >
      {items.length === 0 && (
        <p className="canvas-empty">Drop components here</p>
      )}

      {/* Render each dropped item */}
      {items.map((item) => (
        <CanvasItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Canvas;
