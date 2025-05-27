import React from "react";

import style from "./GripIcon.module.scss";

const GripIcon: React.FC = () => {
  return (
    <svg
      className={style.grip}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle className={style.tl} cx="6" cy="6" r="2" fill="currentColor" />
      <circle className={style.bl} cx="6" cy="18" r="2" fill="currentColor" />
      <circle className={style.tr} cx="18" cy="6" r="2" fill="currentColor" />
      <circle className={style.br} cx="18" cy="18" r="2" fill="currentColor" />
    </svg>
  );
};

export default GripIcon;
