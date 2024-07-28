// Logo.js
import React from 'react';
import '../forms/Logo.css';

const Logo = (props) => {
  return (
    <svg
      {...props}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      xmlSpace="preserve"
    >
      <circle fill="#6b3d7d" cx="32" cy="32" r="32" />
      <path
        fill="#FFFFFF"
        d="M32,6C17.64,6,6,17.64,6,32s11.64,26,26,26s26-11.64,26-26S46.36,6,32,6z M45.63,45.63L30,30v-4.37L41.37,35.63
        c2.44,2.44,6.39,2.44,8.83,0C47.08,41.02,45.63,45.63,45.63,45.63z M18.37,18.37L34,34v4.37L22.63,28.37c-2.44-2.44-6.39-2.44-8.83,0
        C16.92,22.98,18.37,18.37,18.37,18.37z"
      />
    </svg>
  );
};

export default Logo;
