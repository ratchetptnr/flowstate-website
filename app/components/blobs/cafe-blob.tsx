export function CafeBlob() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="cafeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2CAAC9" />
          <stop offset="100%" stopColor="#2699B3" />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
        </filter>
      </defs>

      {/* Solid settled blob at bottom - stable like stones */}
      <path
        d="M 50 150 Q 200 120, 350 150 T 650 150 T 950 150 L 1150 150 L 1150 300 L 50 300 Z"
        fill="url(#cafeGradient)"
        filter="url(#blur)"
      />
    </svg>
  );
}
