import React from 'react';

export default function Grapes(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <g fill="#8cc63e">
        <path d="m38.8 22.1c5.8-4.7-.8-18.4-.8-18.4s-.6 2.6-2 5.8c-5.2-4.9-13.4-7.5-13.4-7.5s4.4 6.7 5.5 14.9c-3.5 0-6.2-.9-6.2-.9s9.2 12.4 16.9 6.1" />
        <path d="m48.3 40.6c-5.5 5.1-3 14.6-3 14.6s1-2.2 2.8-5.1c3 2.8 8.9 3.1 8.9 3.1s-2.1-4.4-1.3-10.8c2.7-.7 4.6-.6 4.6-.6s-4.7-8-12-1.2" />
      </g>
      <g fill="#843dc9">
        <ellipse cx="44.7" cy={23} rx="6.6" ry="6.9" />
        <ellipse cx="25.3" cy={26} rx="6.1" ry="6.4" />
        <ellipse cx="30.9" cy="55.6" rx="6.1" ry="6.4" />
        <ellipse cx="42.8" cy="48.5" rx="4.7" ry="4.9" />
      </g>
      <ellipse cx="35.4" cy="27.8" rx={8} ry="8.4" fill="#ab7dcc" />
      <g fill="#6f43a3">
        <ellipse cx="29.4" cy="36.3" rx={7} ry="7.4" />
        <ellipse cx="43.4" cy="37.9" rx={7} ry="7.4" />
      </g>
      <ellipse cx="19.2" cy="39.8" rx="8.9" ry="9.3" fill="#843dc9" />
      <ellipse cx={22} cy="51.7" rx="6.1" ry="6.4" fill="#6f43a3" />
      <path d="m15.1 49.8c6.8-4.5 33.7-16.5 38.7-34.7" fill="none" stroke="#9fc427" strokeWidth={2} strokeMiterlimit={10} />
      <g fill="#ab7dcc">
        <ellipse cx={32} cy="44.7" rx="8.3" ry="8.7" />
        <path d="m18.3 52.2c0 4.7-3.6 8.5-8.1 8.5-4.5 0-8.1-3.8-8.1-8.5 0-4.7 3.6-8.5 8.1-8.5 4.4 0 8.1 3.8 8.1 8.5" />
        <ellipse cx="53.3" cy="32.1" rx="8.7" ry="9.1" />
      </g>
    </svg>
  );
}