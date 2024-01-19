import React from "react";

const TimeSlotSVG = ({ className = "" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 209.57 209.52"
  >
    <defs>
      <style>
        {
          ".cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}"
        }
      </style>
      <linearGradient
        id="linear-gradient"
        x1="104.78"
        y1="-159.52"
        x2="104.78"
        y2="475.29"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#01a0fb" />
        <stop offset="1" stop-color="#2a7fb1" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1="119.83"
        y1="-159.52"
        x2="119.83"
        y2="475.29"
        xlinkHref="#linear-gradient"
      />
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          class="cls-1"
          d="M209.57,104.64c.05,57.65-47,104.79-104.71,104.88S.05,162.46,0,104.81,47,0,104.7,0A104.93,104.93,0,0,1,209.57,104.64Zm-29.94.12a74.85,74.85,0,0,0-149.69-.26c-.09,41.32,33.65,75.14,74.9,75.09A75.09,75.09,0,0,0,179.63,104.76Z"
        />
        <path class="cls-2" d="M149.6,89.72v29.73H90.06V60.06h29.53V89.72Z" />
      </g>
    </g>
  </svg>
);

export default TimeSlotSVG;
