import React from "react";

export const ColorBox = ({
  setColor,
  setHomeColor
}: {
  setColor: (color: string) => void;
  setHomeColor: (color: string) => void;
}) => {
  return (
    <div className="color-box">
      <ul className="color-box__color-select">
        <li
          onClick={() => {
            setColor("lightcyan");
            setHomeColor("lightpink");
          }}
        ></li>
        <li
          onClick={() => {
            setColor("lightpink");
            setHomeColor("lightgoldenrodyellow");
          }}
        ></li>
        <li
          onClick={() => {
            setColor("lightgoldenrodyellow");
            setHomeColor("lightcyan");
          }}
        ></li>
      </ul>
      <div className="color-box__three-container"></div>
    </div>
  );
};
