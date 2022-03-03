import React from "react";
import Widget from "../widget/widget";
import queries from "../../data/queried";

export default function Queried() {
  return (
    <Widget
      header="recently queried"
      data={queries}
    />
  );
}
