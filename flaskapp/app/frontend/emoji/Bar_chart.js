import React from 'react';

export default function Bar_chart(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <g fill="#333">
        <path d="m0 0h4v64h-4z" />
        <path d="m0 60h64v4h-64z" />
      </g>
      <path fill="#fb4f00" d="m38.7 60h12v-53.3l-12 13.3z" />
      <path fill="#5c750a" d="m21.3 60h12v-40l-12 13.3z" />
      <path fill="#106995" d="m4 60h12v-26.7l-12 13.4z" />
      <path fill="#9aca0a" d="m33.3 20h13.3v40h-13.3z" />
      <path fill="#21adf1" d="m16 33.3h13.3v26.7h-13.3z" />
      <path fill="#fc9100" d="m50.7 6.7h13.3v53.3h-13.3z" />
    </svg>
  );
}