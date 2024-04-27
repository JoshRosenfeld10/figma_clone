import CursorSVG from "@/public/assets/CursorSVG";
import React from "react";

interface Props {
  colour: string;
  x: number;
  y: number;
  message: string;
}

function Cursor({ colour, x, y, message }: Props) {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0"
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      <CursorSVG color={colour} />
      {/* MESSAGE */}
    </div>
  );
}

export default Cursor;
