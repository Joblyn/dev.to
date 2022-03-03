import React from "react";
import Widget from "../widget/widget";
import trending from "../../data/trending";

export default function Trending() {
  return (
    <Widget
      header="trending guides/resources"
      data={trending}
    />
  );
}
