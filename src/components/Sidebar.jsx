const PALETTE_ITEMS = ["Text", "Button", "Image"];

function Sidebar() {
  const handleDragStart = (e, type) => {
    // dataTransfer is the HTML5 DnD API's built-in way to pass data
    // between the drag source and the drop target
    // 'setData' stores a key-value pair — we'll read it in Canvas with 'getData'
    e.dataTransfer.setData("componentType", type);
  };

  return (
    <div className="sidebar">
      <h3>Components</h3>
      {PALETTE_ITEMS.map((type) => (
        <div
          key={type}
          className="palette-item"
          draggable // tells the browser this element can be dragged
          onDragStart={(e) => handleDragStart(e, type)} // fires when drag begins
        >
          {type}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
