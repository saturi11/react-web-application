import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import "./Index.css";

function Jordan() {
  const { scene } = useGLTF("./jordan.gltf");
  const shoeRef = useRef();
  useFrame(() => {
    shoeRef.current.rotation.y += 0.01;
  });

  return <primitive ref={shoeRef} object={scene} scale={0.5} />;
}
function ProductView() {
  return (
    <Canvas
      className="tenis"
      camera={{ position: [10, 10, 1] }}
      style={{
        height: window.innerHeight - 151,
        width: window.innerWidth - 350,
      }}
    >
      <OrbitControls />

      <ambientLight intensity={0.4} />
      <spotLight position={[10, 15, 10]} angle={1} />

      <Jordan />
    </Canvas>
  );
}

export default ProductView;
