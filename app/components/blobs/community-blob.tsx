export function CommunityBlob() {
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
        <radialGradient id="cluster1Gradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#2CAAC9" />
          <stop offset="60%" stopColor="#FFA726" />
          <stop offset="100%" stopColor="#78909C" />
        </radialGradient>
        <radialGradient id="cluster2Gradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFA726" />
          <stop offset="50%" stopColor="#2CAAC9" />
          <stop offset="100%" stopColor="#78909C" />
        </radialGradient>
        <radialGradient id="cluster3Gradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFA726" />
          <stop offset="40%" stopColor="#78909C" />
          <stop offset="100%" stopColor="#2CAAC9" />
        </radialGradient>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
        </filter>
      </defs>

      {/* Left cluster blob */}
      <ellipse
        cx="250"
        cy="200"
        rx="180"
        ry="200"
        fill="url(#cluster1Gradient)"
        filter="url(#blur)"
      />

      {/* Middle cluster blob */}
      <ellipse
        cx="600"
        cy="200"
        rx="200"
        ry="220"
        fill="url(#cluster2Gradient)"
        filter="url(#blur)"
      />

      {/* Right cluster blob */}
      <ellipse
        cx="950"
        cy="200"
        rx="190"
        ry="210"
        fill="url(#cluster3Gradient)"
        filter="url(#blur)"
      />
    </svg>
  );
}
