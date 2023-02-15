import React, { useRef, ReactNode } from "react";
import { useFrame } from "@react-three/fiber";

export const Container = ({ children }: { children: ReactNode }) => {
  const ref = useRef<any>(null);
  useFrame(() => {
    if (!ref) return;
    ref.current.rotation.z += 0.03;
  });
  return <group ref={ref}>{children}</group>;
};
