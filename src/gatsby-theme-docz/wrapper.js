import React from "react";
import NavBar from "../components/navbar";
import Layout from "../components/layout";

export default ({ children }) => (
  <div>
    {/* <NavBar /> */}
    <Layout>
      <h1>.</h1>
      {children}
    </Layout>
  </div>
);
