import React from 'react';

export const KrspLogo: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  return (
    <div className={`krsp-brand flex items-center justify-center ${className}`}>
      <svg className="krsp-logo w-full h-full object-contain block" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points="256,20 460,138 460,374 256,492 52,374 52,138"
          fill="#ef2b32"
        />

        <text
          x="142"
          y="355"
          fontFamily="Arial Black, Arial, sans-serif"
          fontSize="300"
          fontWeight="900"
          fill="white"
        >
          R
        </text>

        <clipPath id="rClip">
          <text
            x="142"
            y="355"
            fontFamily="Arial Black, Arial, sans-serif"
            fontSize="300"
            fontWeight="900"
          >
            R
          </text>
        </clipPath>

        <g clipPath="url(#rClip)">
          <line x1="230" y1="195" x2="350" y2="130" stroke="#ef2b32" strokeWidth="16"/>
          <line x1="230" y1="225" x2="360" y2="155" stroke="#ef2b32" strokeWidth="16"/>
          <line x1="225" y1="255" x2="380" y2="180" stroke="#ef2b32" strokeWidth="16"/>
          <line x1="220" y1="285" x2="420" y2="395" stroke="#ef2b32" strokeWidth="16"/>
          <line x1="215" y1="315" x2="420" y2="430" stroke="#ef2b32" strokeWidth="16"/>
          <line x1="210" y1="345" x2="420" y2="465" stroke="#ef2b32" strokeWidth="16"/>
        </g>
      </svg>
    </div>
  );
};
