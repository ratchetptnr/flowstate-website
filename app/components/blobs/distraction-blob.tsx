'use client';

interface DistractionBlobProps {
  imageSrc?: string;
}

export function DistractionBlob({ imageSrc = '/gradient.png' }: DistractionBlobProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 1199 426"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Use dis.svg paths as clip path mask */}
          <clipPath id="distractionMask">
            <path d="M1005.72 58.2568C1036.29 33.5315 1078.5 24.551 1118.47 38.1426C1180.44 59.2083 1213.59 126.516 1192.53 188.479L1150.04 313.454C1128.97 375.417 1061.66 408.57 999.701 387.505C984.883 382.467 971.714 374.783 960.538 365.161L939.975 425.647L730.986 354.597C700.234 388.737 650.996 403.232 604.737 387.505C542.774 366.439 509.62 299.132 530.686 237.169L573.174 112.193C594.24 50.2307 661.547 17.077 723.51 38.1426C759.031 50.2188 785.083 77.493 796.881 110.244L834.362 0L1005.72 58.2568Z" />
            <path d="M253.011 55.1545C273.844 27.3624 310.918 14.7683 345.587 26.5549L413.755 49.7306C456.893 64.3966 479.975 111.256 465.31 154.395L399.646 347.538C384.98 390.677 338.12 413.758 294.981 399.092L226.813 375.917C222.417 374.423 218.229 372.593 214.269 370.468C192.099 397.747 154.504 409.782 119.274 397.805L58.6806 377.204C13.4507 361.827 -10.7499 312.696 4.62691 267.466L67.7148 81.8967C83.0918 36.6664 132.224 12.466 177.454 27.8429L238.048 48.4426C243.332 50.2391 248.33 52.4964 253.011 55.1545Z" />
          </clipPath>

          {/* Gradient image pattern */}
          <pattern
            id="distractionGradient"
            x="0"
            y="0"
            width="100%"
            height="100%"
            patternUnits="objectBoundingBox"
          >
            <image
              href={imageSrc}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>

        {/* Apply gradient image with dis.svg as mask - static, no animation */}
        <rect
          x="0"
          y="0"
          width="1199"
          height="426"
          fill="url(#distractionGradient)"
          clipPath="url(#distractionMask)"
        />
      </svg>
    </div>
  );
}
