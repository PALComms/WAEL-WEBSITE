import { useRef, useEffect, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export const useMotionAnimation = (options = {}) => {
  const ref = useRef(null);

  // ✅ Fixed once operator (no always-true issue)
  const isInView = useInView(ref, {
    once: options.once ?? true,
    margin: options.margin || "-100px",
    amount: options.amount || 0.3,
  });

  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect mobile safely
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🧩 Base Animations
  const baseVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const slideDown = {
    hidden: { y: -60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const slideLeft = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const slideRight = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const scaleDown = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // 🧩 Staggered Animations
  const staggerContainer = (staggerChildren = 0.1) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: 0.2,
      },
    },
  });

  const staggerItem = (yOffset = 20, duration = 0.6) => ({
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  });

  // 🧩 Hover & Tap Animations
  const hoverScale = {
    scale: prefersReducedMotion ? 1 : 1.05,
    transition: { type: "spring", stiffness: 400, damping: 20 },
  };

  const hoverLift = {
    y: prefersReducedMotion ? 0 : -5,
    scale: prefersReducedMotion ? 1 : 1.02,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  const tapScale = {
    scale: prefersReducedMotion ? 1 : 0.95,
    transition: { duration: 0.15, ease: "easeOut" },
  };

  const hoverColor = (color) => ({
    color,
    transition: { duration: 0.3, ease: "easeOut" },
  });

  // 🧩 Marquee Animation
  const marqueeAnimation = (duration = 30, direction = "left") => {
    if (prefersReducedMotion) return {};

    const xValue = direction === "left" ? ["0%", "-100%"] : ["0%", "100%"];
    return {
      x: xValue,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        },
      },
    };
  };

  // 🧩 Helpers
  const conditionalAnimation = (animation, mobileDisabled = false) => {
    if (prefersReducedMotion || (mobileDisabled && isMobile)) return {};
    return animation;
  };

  const getAnimationState = (customOptions = {}) => {
    const finalOptions = { ...options, ...customOptions };
    const shouldAnimate = finalOptions.force || (isInView && !prefersReducedMotion);

    return {
      initial: "hidden",
      animate: shouldAnimate ? "visible" : "hidden",
      variants: finalOptions.variants || baseVariants,
    };
  };

  // ✅ Return everything cleanly
  return {
    ref,
    isInView,
    prefersReducedMotion,
    isMobile,
    variants: {
      base: baseVariants,
      slideUp,
      slideDown,
      slideLeft,
      slideRight,
      scaleUp,
      scaleDown,
      fadeIn,
      staggerContainer,
      staggerItem,
    },
    animations: {
      hoverScale,
      hoverLift,
      hoverColor,
      tapScale,
      marqueeAnimation,
    },
    helpers: {
      conditionalAnimation,
      getAnimationState,
    },
    animationProps: {
      slideUp: getAnimationState({ variants: slideUp }),
      slideDown: getAnimationState({ variants: slideDown }),
      slideLeft: getAnimationState({ variants: slideLeft }),
      slideRight: getAnimationState({ variants: slideRight }),
      scaleUp: getAnimationState({ variants: scaleUp }),
      scaleDown: getAnimationState({ variants: scaleDown }),
      fadeIn: getAnimationState({ variants: fadeIn }),
    },
  };
};

// ✅ Pre-Built Specialized Hooks
export const useSlideAnimation = (options = {}) => {
  const motion = useMotionAnimation(options);
  return { ...motion, animationProps: motion.animationProps.slideUp };
};

export const useFadeAnimation = (options = {}) => {
  const motion = useMotionAnimation(options);
  return { ...motion, animationProps: motion.animationProps.fadeIn };
};

export const useScaleAnimation = (options = {}) => {
  const motion = useMotionAnimation(options);
  return { ...motion, animationProps: motion.animationProps.scaleUp };
};
