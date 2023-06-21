//@ts-nocheck

import { useBox } from "@react-three/cannon";

const Backboard = () => {
  const [ref, api] = useBox(() => ({
    rotation: [0, Math.PI / 2, 0],
    position: [-10, 4, 0],
    args: [4, 2, 0.1],
    mass: 0,
  }));
  return (
    <mesh
      ref={ref}
      position={[-10, 4, 0]}
      rotation={[0, Math.PI / 2, 0]}
      castShadow
    >
      <boxGeometry args={[4, 2, 0.1]} />
      <meshStandardMaterial color={"teal"} />
    </mesh>
  );
};

export default Backboard;
