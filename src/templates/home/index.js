import React from "react";

export default function HomeTemplate({ slider, leftMenu, children, rightMenu }) {
  return (
    <>
      <div className="d-flex flex-column h-100">
        {slider}
        <div className="d-flex h-100">
          {leftMenu}
          <div className="flex-grow-1">{children}</div>
          {rightMenu}
        </div>
      </div>
    </>
  );
}
