import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Physics } from "@react-three/cannon";
// import { useState } from "react";
// import { Box } from "@react-three/drei";
// import Grid from "./sample/Grid";
// import Controls from "./sample/Controls";

// const Cube = ({ position, rotation, scale = [1, 1, 1], handleClick }) => (
//   <Box
//     args={[1, 1, 1]}
//     position={position}
//     rotation={rotation}
//     scale={scale}
//     onClick={handleClick}
//   >
//     <meshStandardMaterial attach="material" color="white" />
//   </Box>
// );

export default function App() {
  // const [xPosition, setXPosition] = useState(0);
  // const [yPosition, setYPosition] = useState(0);
  // const [zPosition, setZPosition] = useState(0);

  // const [xRotation, setXRotation] = useState(0);
  // const [yRotation, setYRotation] = useState(0);
  // const [zRotation, setZRotation] = useState(0);

  // const [xScale, setXScale] = useState(1);
  // const [yScale, setYScale] = useState(1);
  // const [zScale, setZScale] = useState(1);
  return (
    <>
      <Canvas>
        {/* <Grid size={10} /> */}

        {/* <Cube
          rotation={[
            xRotation * Math.PI,
            yRotation * Math.PI,
            zRotation * Math.PI,
          ]}
          position={[xPosition, yPosition, zPosition]}
          scale={[xScale, yScale, zScale]}
        /> */}
        <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
          <Scene />
        </Physics>
      </Canvas>
      <div className="controls">
        <p>press w a s d to move</p>
        <p>press k to swap camera</p>
        <p>press r to reset</p>
        <p>press arrows for flips</p>
      </div>
      {/* <Controls
        controls={{
          xPosition,
          yPosition,
          zPosition,
          xRotation,
          yRotation,
          zRotation,
          xScale,
          yScale,
          zScale,
          setXPosition,
          setYPosition,
          setZPosition,
          setXRotation,
          setYRotation,
          setZRotation,
          setXScale,
          setYScale,
          setZScale,
        }}
      /> */}
    </>
  );
}
