'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface ResponsiveBlobProps {
  imageSrc?: string;
}

export function ResponsiveBlob({ imageSrc = '/gradient.png' }: ResponsiveBlobProps) {
  const [blobDimensions, setBlobDimensions] = useState({
    waveCount: 1,
    scale: 1,
    totalWidth: 280,
    height: 363
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateBlobDimensions = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      // Single wave base dimensions (from wave.svg)
      const baseWaveWidth = 280; // Approximate visual width of one wave
      const baseWaveHeight = 363;

      // Calculate how many waves we need to fill the width
      // But prefer scaling first, then adding waves

      let waves = 1;
      let scale = 1;

      // Try to fill space by both adding waves and scaling up
      // Scale aggressively to fill both width and height
      if (containerWidth <= 400) {
        waves = 1;
        scale = Math.min(containerWidth / baseWaveWidth, containerHeight / baseWaveHeight) * 1.8;
      } else if (containerWidth <= 600) {
        waves = 2;
        scale = Math.min(containerWidth / (baseWaveWidth * 1.5), containerHeight / baseWaveHeight) * 2.0;
      } else if (containerWidth <= 900) {
        waves = 3;
        scale = Math.min(containerWidth / (baseWaveWidth * 2), containerHeight / baseWaveHeight) * 2.2;
      } else if (containerWidth <= 1200) {
        waves = 4;
        scale = Math.min(containerWidth / (baseWaveWidth * 2.5), containerHeight / baseWaveHeight) * 2.4;
      } else if (containerWidth <= 1600) {
        waves = 5;
        scale = Math.min(containerWidth / (baseWaveWidth * 3), containerHeight / baseWaveHeight) * 2.6;
      } else {
        waves = 6;
        scale = Math.min(containerWidth / (baseWaveWidth * 3.5), containerHeight / baseWaveHeight) * 2.8;
      }

      // Wave spacing (overlap for union effect)
      const waveSpacing = 170 * scale;
      const totalWidth = waves * waveSpacing + 110 * scale;
      const height = baseWaveHeight * scale;

      setBlobDimensions({ waveCount: waves, scale, totalWidth, height });
    };

    // Initial calculation
    updateBlobDimensions();

    // Create resize observer
    const resizeObserver = new ResizeObserver(updateBlobDimensions);

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const { waveCount, scale, totalWidth, height } = blobDimensions;

  const waveSpacing = 170 * scale;

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center">
      <motion.svg
        viewBox={`0 0 ${totalWidth} ${height}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <defs>
          {/* Create a clip path that unions all waves */}
          <clipPath id="waveUnion">
            {Array.from({ length: waveCount }).map((_, index) => {
              const xOffset = index * waveSpacing;
              return (
                <rect
                  key={index}
                  x={(xOffset + 86.9692 * scale)}
                  y={-31.804 * scale}
                  width={237 * scale}
                  height={369 * scale}
                  rx={118.5 * scale}
                  transform={`rotate(18.7766 ${xOffset + 86.9692 * scale} ${-31.804 * scale})`}
                />
              );
            })}
          </clipPath>

          {/* Pattern with gradient image */}
          <pattern
            id="gradientPattern"
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

        {/* Apply gradient image to the unified clipped area */}
        <rect
          x="0"
          y="0"
          width={totalWidth}
          height={height}
          fill="url(#gradientPattern)"
          clipPath="url(#waveUnion)"
        />
      </motion.svg>
    </div>
  );
}
