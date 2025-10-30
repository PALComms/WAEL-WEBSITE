// components/carousel.js
"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

export function Carousel({
  items = [],
  autoPlay = false,
  autoPlayInterval = 5000,
  showControls = true,
  showDots = true,
  showProgress = true,
  loop = true,
  pauseOnHover = true,
  visibleItems = 1, // Can be number or object: { base: 1, md: 2, lg: 3 }
  transitionSpeed = 0.5,
  className = "",
}) {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [progress, setProgress] = useState(0);
  const [currentVisibleItems, setCurrentVisibleItems] = useState(1);

  // Handle responsive visible items
  useEffect(() => {
    if (typeof window === "undefined") return; // ⛔ skip on server

    const handleResize = () => {
      if (typeof visibleItems === "object") {
        const width = window.innerWidth;
        if (width >= 1024 && visibleItems.lg) {
          setCurrentVisibleItems(visibleItems.lg);
        } else if (width >= 768 && visibleItems.md) {
          setCurrentVisibleItems(visibleItems.md);
        } else {
          setCurrentVisibleItems(visibleItems.base || 1);
        }
      } else {
        setCurrentVisibleItems(visibleItems);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visibleItems]);

  // Calculate how many slides we have based on visible items
  const totalSlides = Math.max(
    1,
    Math.ceil(items.length / currentVisibleItems)
  );
  const isMultiItem = currentVisibleItems > 1;

  const next = useCallback(() => {
    setCurrentIndex(([current, _]) => {
      const nextIndex = current + 1;
      if (nextIndex >= totalSlides) {
        return loop ? [0, 1] : [current, 0];
      }
      return [nextIndex, 1];
    });
    setProgress(0);
  }, [totalSlides, loop]);

  const prev = useCallback(() => {
    setCurrentIndex(([current, _]) => {
      const prevIndex = current - 1;
      if (prevIndex < 0) {
        return loop ? [totalSlides - 1, -1] : [current, 0];
      }
      return [prevIndex, -1];
    });
    setProgress(0);
  }, [totalSlides, loop]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(([current]) => [index, index > current ? 1 : -1]);
    setProgress(0);
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying || !autoPlay || items.length <= currentVisibleItems) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next();
          return 0;
        }
        return prev + 100 / (autoPlayInterval / 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [
    isPlaying,
    autoPlay,
    autoPlayInterval,
    next,
    items.length,
    currentVisibleItems,
  ]);

  // Get the current batch of items to display
  const getCurrentItems = () => {
    const startIndex = currentIndex * currentVisibleItems;
    const endIndex = startIndex + currentVisibleItems;
    const currentItems = items.slice(startIndex, endIndex);

    // If we don't have enough items to fill the current visible items,
    // and loop is enabled, take from the beginning
    if (loop && currentItems.length < currentVisibleItems) {
      const remainingItems = currentVisibleItems - currentItems.length;
      return [...currentItems, ...items.slice(0, remainingItems)];
    }

    return currentItems;
  };

  const currentItems = getCurrentItems();

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const itemContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return window.Math.abs(offset) * velocity;
  };

  // Don't render carousel if no items
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">No items to display</div>
    );
  }

  // Get grid class based on current visible items
  const getGridClass = () => {
    switch (currentVisibleItems) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 sm:grid-cols-2";
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
      default:
        return "grid-cols-1";
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && autoPlay && setIsPlaying(false)}
      onMouseLeave={() => pauseOnHover && autoPlay && setIsPlaying(true)}
    >
      {/* Carousel Container */}
      <div className="relative w-full min-h-[300px] sm:min-h-[400px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: "tween",
                duration: transitionSpeed,
                ease: "easeInOut",
              },
              opacity: { duration: transitionSpeed * 0.8 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                next();
              } else if (swipe > swipeConfidenceThreshold) {
                prev();
              }
            }}
            className="w-full h-full"
          >
            {isMultiItem ? (
              // Multi-item layout
              <motion.div
                variants={itemContainerVariants}
                initial="hidden"
                animate="visible"
                className={`grid ${getGridClass()} gap-4 sm:gap-6 w-1/2 h-full`}
              >
                {currentItems.map((item, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    variants={itemVariants}
                    className="w-full h-full min-h-[350px]"
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // Single item layout
              <div className="w-full h-full flex items-center justify-center">
                {currentItems[0]}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      {showProgress && autoPlay && totalSlides > 1 && (
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 flex gap-1 z-10">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div key={index} className="h-1 bg-white/30 rounded-full flex-1">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: index === currentIndex ? `${progress}%` : "0%",
                }}
                transition={{ duration: 0.1 }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Play/Pause Button */}
      {autoPlay && totalSlides > 1 && (
        <button
          onClick={togglePlay}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 sm:p-2 transition-all duration-200 z-10"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause size={14} className="sm:w-4 sm:h-4" />
          ) : (
            <Play size={14} className="sm:w-4 sm:h-4" />
          )}
        </button>
      )}

      {/* Navigation Controls */}
      {showControls && totalSlides > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-1 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={16} className="sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-1 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={16} className="sm:w-6 sm:h-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && totalSlides > 1 && (
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-10">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Mobile swipe hint */}
      {totalSlides > 1 && (
        <div className="sm:hidden absolute bottom-1 left-1/2 -translate-x-1/2 text-gray-500 text-xs z-10 bg-white/80 px-2 py-1 rounded-full">
          Swipe to navigate
        </div>
      )}
    </div>
  );
}
