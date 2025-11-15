export function DistractionBlob() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="blob1Gradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#2CAAC9" />
          <stop offset="50%" stopColor="#FFA726" />
          <stop offset="100%" stopColor="#78909C" />
        </radialGradient>
        <radialGradient id="blob2Gradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFA726" />
          <stop offset="50%" stopColor="#2CAAC9" />
          <stop offset="100%" stopColor="#78909C" />
        </radialGradient>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
        </filter>
      </defs>

      {/* Left irregular blob */}
      <ellipse
        cx="300"
        cy="200"
        rx="200"
        ry="180"
        fill="url(#blob1Gradient)"
        filter="url(#blur)"
        style={{ transform: 'rotate(-15deg)', transformOrigin: '300px 200px' }}
      />

      {/* Right irregular blob - overlapping */}
      <ellipse
        cx="800"
        cy="220"
        rx="220"
        ry="200"
        fill="url(#blob2Gradient)"
        filter="url(#blur)"
        style={{ transform: 'rotate(20deg)', transformOrigin: '800px 220px' }}
      />
    </svg>
  );
}
