import React from "react";

const DoubleClickMessage = () => {
  const [clickCount, setClickCount] = React.useState(0);
  return (
    <div>
      <button
        onDoubleClick={() => {
          setClickCount(clickCount + 1);
          setTimeout(() => setClickCount(0), 2000);
        }}
      >
        Button
      </button>
      {clickCount > 0 && <p>Button double-clicked {clickCount} times</p>}
    </div>
  );
};

export default DoubleClickMessage;
