import React from "react";
import ContentFooter from "../ContentFooter.js";
import List from "./List/index.js";

function Content() {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <List />
      </section>
      <ContentFooter />
    </>
  );
}

export default Content;
