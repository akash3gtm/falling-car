import { useBox, useCylinder } from "@react-three/cannon";
import { Box, Cylinder } from "@react-three/drei";

const debug = false;

function ColliderBox({ position, scale, rotation = 0 }) {
  const pos = [position[0], 0, position[1]];
  const scaleNew = [scale[0], 1, scale[1]];
  const rotationNew = [0, rotation * Math.PI, 0];
  const [ref] = useBox(() => ({
    args: scaleNew,
    position: pos,
    type: "Static",
    rotation: rotationNew,
  }));

  return (
    debug && (
      <Box ref={ref} args={scaleNew}>
        <meshStandardMaterial />
      </Box>
    )
  );
}
function ColliderCylinder({ position, radius, height = 1 }) {
  const pos = [position[0], 0, position[1]];
  const args = [radius, radius, height, 32];
  const [ref] = useCylinder(() => ({
    args,
    position: pos,
    type: "Static",
  }));

  return (
    debug && (
      <Cylinder ref={ref} args={args}>
        <meshStandardMaterial />
      </Cylinder>
    )
  );
}

export function Collisions() {
  return (
    <>
      <ColliderBox position={[0, 1.5]} scale={[1, 2.5]} rotation={0} />
      <ColliderBox
        position={[-0.21875, 4.125]}
        scale={[0.59375, 1.21875]}
        rotation={-0.09375}
      />
      <ColliderBox
        position={[-0.78125, 0.21875]}
        scale={[1, 2]}
        rotation={0.25}
      />
      <ColliderBox
        position={[-2.9, -0.28125]}
        scale={[2.2, 0.71875]}
        rotation={0.02}
      />
      <ColliderBox
        position={[-1.5, -0.4]}
        scale={[2.2, 0.71875]}
        rotation={0.02}
      />
      <ColliderBox
        position={[-1.1875, 5.125]}
        scale={[0.59375, 1.6875]}
        rotation={-0.33}
      />
      <ColliderBox
        position={[-2.3125, 5.46875]}
        scale={[1, 0.625]}
        rotation={0}
      />
      <ColliderBox
        position={[-8.6875, 0.90625]}
        scale={[0.71875, 1.40625]}
        rotation={-0.09375}
      />
      <ColliderBox
        position={[-7.96875, -0.0625]}
        scale={[0.71875, 1.40625]}
        rotation={-0.3125}
      />
      <ColliderBox
        position={[-6.78125, -0.46875]}
        scale={[0.65625, 1.40625]}
        rotation={-0.5}
      />
      <ColliderBox
        position={[-9.46875, 4.0625]}
        scale={[0.5625, 2]}
        rotation={0}
      />
      <ColliderBox
        position={[-9.7, 4.0625]}
        scale={[0.5625, 1]}
        rotation={0.5}
      />
      <ColliderBox
        position={[-6.125, 5.78125]}
        scale={[1.625, 0.625]}
        rotation={0}
      />
      <ColliderBox
        position={[-7.84375, 6.0625]}
        scale={[2.125, 0.6875]}
        rotation={0}
      />

      <ColliderBox
        position={[-7.75, 4.96875]}
        scale={[0.8125, 0.1875]}
        rotation={-0.15625}
      />
      <ColliderBox
        position={[-8.0625, 4.75]}
        scale={[0.8125, 0.1875]}
        rotation={-0.25}
      />
      <ColliderBox
        position={[-8.40625, 4.28125]}
        scale={[0.8125, 0.1875]}
        rotation={-0.34375}
      />

      <ColliderCylinder position={[-3.13, 2.4]} radius={0.97} />
      <ColliderCylinder position={[-3.13, 2.6]} radius={0.97} />
      <ColliderCylinder position={[-5.85, 2.4]} radius={0.97} />
      <ColliderCylinder position={[-5.85, 2.6]} radius={0.97} />

      <ColliderCylinder position={[-3.5, 5.4]} radius={0.22} />
      <ColliderCylinder position={[1.5, 2.25]} radius={0.22} />
      <ColliderCylinder position={[-3.24, -1.76]} radius={0.22} />
      <ColliderCylinder position={[-4.9, -2]} radius={0.22} />
    </>
  );
}
