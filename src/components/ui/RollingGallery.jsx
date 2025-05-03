"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";

const RollingGallery = ({
  autoplay = false,
  pauseOnHover = false,
  apiEndpoint = "",
}) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(apiEndpoint);

        // Use response.data directly as provided in your version
        setImages(response.data || []);
      } catch (error) {
        console.error("Error fetching images:", error);
        setImages([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (apiEndpoint) {
      fetchImages();
    } else {
      // No API endpoint provided, use empty array
      setImages([]);
      setIsLoading(false);
    }
  }, [apiEndpoint]);

  // 3D geometry calculations
  const faceCount = images.length > 0 ? images.length : 1;
  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceWidth = isScreenSizeSm
    ? Math.min(180, (cylinderWidth / Math.max(faceCount, 1)) * 1.8)
    : (cylinderWidth / Math.max(faceCount, 1)) * 1.5;
  const radius = isScreenSizeSm
    ? cylinderWidth / (1.7 * Math.PI)
    : cylinderWidth / (1.25 * Math.PI);

  // Motion values
  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
  );

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
    return () => controls.stop();
  }, [autoplay, isMounted]);

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) startInfiniteSpin(finalAngle);
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) controls.stop();
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) startInfiniteSpin(rotation.get());
  };

  if (!isMounted) return null;

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 h-full w-[48px] z-10 bg-gradient-to-l from-transparent to-[#060606]" />
      <div className="absolute top-0 right-0 h-full w-[48px] z-10 bg-gradient-to-r from-transparent to-[#060606]" />

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 z-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}

      {/* Main gallery container */}
      <div className="flex h-full items-center justify-center [perspective:1000px]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[4%] [backface-visibility:hidden]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  (360 / faceCount) * i
                }deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={url}
                alt={`Gallery item ${i + 1}`}
                className="pointer-events-none h-auto w-full max-w-[220px] rounded-[15px] border-2 border-white object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                style={{
                  width: isScreenSizeSm
                    ? `${faceWidth * 0.8 * 2.5}px`
                    : `${faceWidth * 2.5}px`,
                  height: isScreenSizeSm
                    ? `${faceWidth * 0.8 * 1}px`
                    : `${faceWidth * 0.56}px`,
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
