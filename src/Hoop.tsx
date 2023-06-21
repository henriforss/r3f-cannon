//@ts-nocheck
import { useCylinder } from "@react-three/cannon";
import { DoubleSide } from "three";

const Hoop = () => {
  const [ref, api] = useCylinder(() => ({
    position: [-8.5, 3, 0],
    args: [1, 0.8, 1, 20],
    mass: 0,
    side: DoubleSide,
  }));

  console.log(ref);
  console.log(api);

  return (
    <mesh ref={ref} position={[-8.5, 3, 0]} castShadow>
      <cylinderGeometry args={[1, 0.8, 1, 20, 1, true]} />
      <meshStandardMaterial color={"yellow"} side={DoubleSide} />
    </mesh>
  );
};

export default Hoop;
