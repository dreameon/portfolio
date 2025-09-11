export const fadeInAnimation = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.4,
      ease: [0.42, 0.0, 0.58, 1.0] as const,
    },
  },
};

export const fadeInItemAnimation = {
  initial: {
    y: "20px",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.42, 0.0, 0.58, 1.0] as const,
    },
  },
};

export const dropDownAnimation = {
  initial: {
    height: 0,
    transition: {
      duration: 0.2,
      when: "afterChildren",
      ease: [0.58, 0.0, 0.42, 1.0] as const,
    },
  },
  animate: {
    height: "auto",
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.02,
      ease: [0.42, 0.0, 0.58, 1.0] as const,
    },
  },
};

export const dropDownItemAnimation = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: [0.42, 0.0, 0.58, 1.0] as const,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.24,
      ease: [0.42, 0.0, 0.58, 1.0] as const,
    },
  },
};

export const bannerAnimation = {
  initial: {
    y: "-20px",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.42, 0.0, 0.58, 1.0] as const,
    },
  },
};
