import { ColorProps } from "../../types/types";

function Watch({ color }: ColorProps) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill={color}>
      <path d="M8.75 25.25a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H8.75zm8.413-12.404l-5.108 3.077A.696.696 0 0111 15.327V9.172a.696.696 0 011.055-.596l5.108 3.078a.696.696 0 010 1.192zm4.587 7.404A2.25 2.25 0 0024 18V6.5a2.25 2.25 0 00-2.25-2.25H6.25A2.25 2.25 0 004 6.5V18a2.25 2.25 0 002.25 2.25h15.5zm0 1.5H6.25A3.75 3.75 0 012.5 18V6.5a3.75 3.75 0 013.75-3.75h15.5A3.75 3.75 0 0125.5 6.5V18a3.75 3.75 0 01-3.75 3.75z"></path>
    </svg>
  );
}

export default Watch;
