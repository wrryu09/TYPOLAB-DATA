import React, { useRef, useState } from "react";
import styles from "./CardList.module.css";
import html2canvas from "html2canvas";

type Props = {
  ele: {
    name: string;
    variants: string;
  };
  idx: number;
};

const Card = (props: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);
  if (props.ele.variants === "regular") {
    props.ele.variants = "400";
  }
  const onBtnClick = (ele: { name: string; variants: string }) => {
    if (cardRef.current === null || clicked === true) {
      return;
    }
    html2canvas(cardRef.current, { scale: 1 })
      .then((canvas) => {
        document.body.appendChild(canvas);
        return canvas;
      })
      .then((canvas) => {
        const image = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.setAttribute("download", `${ele.name}_${ele.variants}_eng.png`);
        a.setAttribute("href", image);
        a.click();
        canvas.remove();
        setClicked(true);
      }),
      [cardRef];
  };
  return (
    <>
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css2?family=${props.ele.name}`}
        crossOrigin="anonymous"
      />
      <style>
        {`.krFontCss${props.idx}{
font-family: ${props.ele.name};
font-weight: ${props.ele.variants};
}`}
      </style>
      <div
        className={
          clicked
            ? `${styles.fontCard} ${styles.clicked}`
            : `${styles.fontCard} ${styles.notClicked}`
        }
        ref={cardRef}
        onMouseEnter={() => {
          onBtnClick(props.ele);
        }}
      >
        <div className={`krFontCss${props.idx}`}>
          <p className={styles.txt}>Laseg</p>
          <p className={styles.txt}>dhum</p>
          <p className={styles.txt}>Hloiv</p>
        </div>
      </div>
    </>
  );
};

export default Card;
