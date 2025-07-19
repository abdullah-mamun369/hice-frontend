"use client";

import { useEffect, useState } from "react";

const DragPointer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => setVisible(true), 4000);

    const interval = setInterval(() => {
      setVisible((v) => !v);
    }, 6000);

    return () => {
      clearTimeout(showTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="absolute top-1/2 left-1/2 animate-drag z-50 pointer-events-none"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-10 h-10 text-amber-400 opacity-80 drop-shadow-md"
      >
        <path d="M8 2a1 1 0 0 1 1 1v6.586l2.293-2.293a1 1 0 0 1 1.414 1.414L10.414 11H17a1 1 0 0 1 0 2h-5.586l2.293 2.293a1 1 0 0 1-1.414 1.414L9 14.414V21a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1z" />
      </svg>
    </div>
  );
};

export default DragPointer;
