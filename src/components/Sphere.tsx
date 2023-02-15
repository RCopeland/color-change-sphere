import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Sphere = ({
  bounce,
  position,
  color,
  size
}: {
  bounce?: boolean;
  position: number[];
  color: string;
  size: number;
}) => {
  const ref = useRef<any>(null);
  let flag = false;
  useFrame(() => {
    if (!ref.current) return;
    if (bounce) {
      ref.current.position.y += flag ? 1 : -1;
    }
    flag = !flag;
  });
  return (
    <mesh ref={ref} position={position} castShadow>
      <sphereGeometry args={[size, 100, 100]} />
      <meshLambertMaterial color={color} />
    </mesh>
  );
};
