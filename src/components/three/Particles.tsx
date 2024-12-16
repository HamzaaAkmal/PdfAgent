import { useMemo } from 'react';
import { BufferAttribute } from 'three';
import { Points } from '@react-three/drei';

export default function Particles() {
  const count = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  const positionAttribute = useMemo(() => (
    new BufferAttribute(positions, 3)
  ), [positions]);

  return (
    <Points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" {...positionAttribute} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#8b5cf6"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </Points>
  );
}