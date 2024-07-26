import React, { ReactNode } from "react";
import "./main.css"

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main>
      <div className="page">{children}</div>
    </main>
  );
};

export default Main;
