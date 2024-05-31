import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import { Collisions } from "./Collisions";

export function NewTrack() {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/small.glb");
  const { scene, animations } = gltf;
  const mixer = useRef();

  useEffect(() => {
    scene.scale.set(0.008, 0.008, 0.008);
  }, []);

  useEffect(() => {
    if (scene) {
      scene.traverse((object) => {
        if (
          object.name === "Null_2__Copy_" ||
          object.name === "Null__Copy__2"
        ) {
          object.visible = false;
        }
      });
    }
  }, [scene]);

  useEffect(() => {
    mixer.current = new THREE.AnimationMixer(scene);
    animations.forEach((clip) => {
      mixer.current.clipAction(clip).play();
    });
  }, [animations, scene]);

  useFrame((_state, delta) => mixer.current?.update(delta));

  return (
    <>
      <primitive
        object={scene}
        position={[-3.7, -0.207, 2.5]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Collisions />
    </>
  );
}
