import { OrbitControls } from '@react-three/drei';
import Particles from './Particles';

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <Particles />
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        enablePan={false}
      />
    </>
  );
}