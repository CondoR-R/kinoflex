"use client";

import { PropsWithChildren } from "react";
import { LazyMotion, domAnimation } from "motion/react";

// для более быстрой сборки приложения

const Providers = ({ children }: PropsWithChildren<unknown>) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default Providers;
