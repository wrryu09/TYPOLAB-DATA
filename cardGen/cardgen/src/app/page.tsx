import React from "react";
import CardList from "@/components/CardList";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div style={{ color: "white" }}>Font Card Generator</div>
      <CardList />
    </div>
  );
};

export default page;
