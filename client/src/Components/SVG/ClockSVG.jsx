import React from "react";

const ClockSVG = ({ className }) => {
  return (
    <svg
    className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 103.89 103.86"
    >
      <defs>
        <style>{".cls-1{fill:url(#linear-gradient);}"}</style>
        <linearGradient
          id="linear-gradient"
          x1="51.94"
          y1="-120.54"
          x2="51.94"
          y2="131.21"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#01a0fb" />
          <stop offset="1" stop-color="#2a7fb1" />
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            class="cls-1"
            d="M52,103.86A51.93,51.93,0,1,1,51.92,0c28.38-.16,51.88,23.26,52,51.82A52,52,0,0,1,52,103.86ZM47.25,37.77h0c0,4.61,0,9.22,0,13.83a4.76,4.76,0,0,0,1.27,3.54q7.17,7.22,14.39,14.39a4.39,4.39,0,0,0,4.61,1,4.69,4.69,0,0,0,1.82-7.93q-5.89-6-11.89-11.88a2.44,2.44,0,0,1-.8-1.93q0-12.27,0-24.55a7.17,7.17,0,0,0-.55-2.88,4.66,4.66,0,0,0-8.8,2C47.22,28.19,47.25,33,47.25,37.77Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default ClockSVG;
