export function HeroBlob() {
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
        <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2CAAC9" />
          <stop offset="30%" stopColor="#2CAAC9" />
          <stop offset="50%" stopColor="#FFA726" />
          <stop offset="70%" stopColor="#FFA726" />
          <stop offset="100%" stopColor="#78909C" />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
        </filter>
      </defs>

      {/* Main continuous wavy blob */}
      <path
        d="M 50 200 Q 150 100, 250 200 T 450 200 T 650 200 T 850 200 T 1050 200 T 1150 200"
        fill="url(#heroGradient)"
        filter="url(#blur)"
        style={{
          transform: 'scaleY(1.5)',
          transformOrigin: 'center'
        }}
      />
    </svg>
  );
}
