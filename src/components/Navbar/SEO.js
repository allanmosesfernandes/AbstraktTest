import React from "react";
import { Helmet } from "react-helmet";

function SEO() {
  return (
    <Helmet titleTemplate="Abstrakt Test">
      <html lang="en" />
      <title>Abstrakt Test</title>
      {/*  */}
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Helmet>
  );
}

export default SEO;
