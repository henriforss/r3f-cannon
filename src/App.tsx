import { Canvas } from "@react-three/fiber";
import Ball from "./Ball";
import Floor from "./Floor";
import { Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import Backboard from "./Backboard";
import Hoop from "./Hoop";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [10, 1, 0] }}>
        <directionalLight position={[2, 10, 2]} castShadow />

        <Physics>
          <Ball />
          <Backboard />
          <Hoop />
          <Floor />
        </Physics>

        {/* <gridHelper /> */}
        <OrbitControls target={[-10, 4, 0]} enableDamping={false} />
      </Canvas>
    </>
  );
}

export default App;
