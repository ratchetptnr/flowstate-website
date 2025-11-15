export function FlowstateBlob() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1200 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="flowstateGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2CAAC9" />
          <stop offset="25%" stopColor="#2CAAC9" />
          <stop offset="50%" stopColor="#FFA726" />
          <stop offset="75%" stopColor="#FFA726" />
          <stop offset="100%" stopColor="#78909C" />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
        </filter>
      </defs>

      {/* Perfect rhythm wavy blob - more regular */}
      <path
        d="M 50 175 Q 150 100, 250 175 T 450 175 T 650 175 T 850 175 T 1050 175 T 1150 175"
        fill="url(#flowstateGradient)"
        filter="url(#blur)"
        style={{
          transform: 'scaleY(1.8)',
          transformOrigin: 'center'
        }}
      />
    </svg>
  );
}
