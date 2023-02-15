import React, { useState } from "react";
import { ColorBox } from "./components/ColorBox";
import { Canvas } from "@react-three/fiber";
import { Container } from "./components/Container";
import { Sphere } from "./components/Sphere";
import "./styles.scss";

export default function App() {
  const [color, setColor] = useState<string>("hotpink");
  const [homeColor, setHomeColor] = useState<string>("hotpink");
  return (
    <div
      className="site-container"
      style={{
        backgroundColor: homeColor,
        transition: "background-color .3s ease"
      }}
    >
      <div className="grid-container">
        <div className="grid-container__header" />
        <div className="grid-container__heading" />
        <div className="grid-container__color-box">
          <ColorBox setColor={setColor} setHomeColor={setHomeColor} />
        </div>
        <div className="grid-container__footer" />
      </div>
      <div className="three-container">
        <Canvas shadows>
          <ambientLight color={homeColor} />
          <directionalLight color={color} />
          <Container>
            <Sphere size={2} position={[0, 0, 0]} color={homeColor} />
          </Container>
        </Canvas>
      </div>
    </div>
  );
}
