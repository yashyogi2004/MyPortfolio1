import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, Float } from '@react-three/drei';

const FloatingGeometry = () => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 32, 32]} position={[-3, 0, 0]}>
          <meshStandardMaterial color="#3b82f6" wireframe />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <Box args={[1.5, 1.5, 1.5]} position={[3, 1, 0]}>
          <meshStandardMaterial color="#8b5cf6" wireframe />
        </Box>
      </Float>
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1}>
        <Torus args={[1, 0.4, 16, 32]} position={[0, -2, 0]}>
          <meshStandardMaterial color="#06b6d4" wireframe />
        </Torus>
      </Float>
    </group>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
};

export default Scene3D;