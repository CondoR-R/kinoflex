import React, { PropsWithChildren } from "react";

import Header from "./header/Header";

const MainWrapper: React.FC = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainWrapper;
