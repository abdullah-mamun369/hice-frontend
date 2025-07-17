import React from "react";
const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="min-h-screen">{children}</div>
    </div>
  );
};

export default CommonLayout;
