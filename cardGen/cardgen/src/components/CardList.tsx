"use client";

import React, { useEffect, useState } from "react";
import styles from "./CardList.module.css";
import { getDataFromDB } from "@/utils/getData";
import Card from "./Card";
type Props = {};

const CardList = (props: Props) => {
  const [krFontList, setKrFontList] = useState<
    {
      name: string;
      variants: string;
    }[]
  >([
    {
      name: "Bagel Fat One",
      variants: "regular",
    },
  ]);
  useEffect(() => {
    getDataFromDB().then((res) => {
      console.log(res);
      setKrFontList(res);
    });
  }, []);
  return (
    <div className={styles.cardSlot}>
      {krFontList.map((ele, idx) => {
        return <Card key={ele.name + ele.variants} ele={ele} idx={idx} />;
      })}
    </div>
  );
};

export default CardList;
