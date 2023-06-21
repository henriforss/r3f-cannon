import { usePlane } from "@react-three/cannon";

const Floor = () => {
  const [ref, api] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    mass: 0,
  }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[40, 20]} />
      <meshStandardMaterial color={"lime"} />
    </mesh>
  );
};

export default Floor;
