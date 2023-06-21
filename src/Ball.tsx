//@ts-nocheck
import { useSphere } from "@react-three/cannon";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Vector3 } from "three";

const Ball = () => {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    args: [0.3],
  }));

  const { camera } = useThree();
  const shootVelocity = 14;

  const handleClick = () => {
    const direction = camera.getWorldDirection(new Vector3());
    api.position.set(camera.position.x, camera.position.y, camera.position.z);
    api.velocity.set(
      direction.x * shootVelocity,
      (direction.y + 0.4) * shootVelocity,
      direction.z * shootVelocity
    );
  };

  useEffect(() => {
    document.addEventListener("pointerdown", handleClick);
    return () => document.addEventListener("pointerdown", handleClick);
  });

  return (
    <mesh ref={ref} castShadow>
      <sphereGeometry args={[0.3, 32, 16]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

export default Ball;
