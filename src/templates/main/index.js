import React from "react";

import Header from "../../organisms/header";

export default function MainTemplate({ children }) {
  return (
    <>
      <Header />
      <main className="container mt-5 main">{children}</main>
    </>
  );
}
