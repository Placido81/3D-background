import { useFrame, useThree } from "@react-three/fiber "
import * as THREE from "three"

const MyMesh = ({ index, z }) => {
    const [data] = useState({
        x: THREE.MathUtils.randFloatSpread(2),
        y: THREE.MathUtils.randFloatSpread(height) * 2,
        z: -z,
        rotationX: Math.random() * Math.PI,
        rotationZ: Math.random() * Math.PI,
        spinSpeed: THREE.MathUtils.randFloat(8, 12),
      });
    
      useFrame((state, dt) => {
        if (dt < 0.1)
          ref.current.position.set(
            index === 0 ? 0 : data.x * width,
            (data.y += dt * 0.75),
            -z + Math.sin((data.z -= 0.01))
          );
    
        ref.current.rotation.set(
          (data.rotationX += dt / data.spin),
          /*Feel free to experiment with different values to create an interesting pattern*/
          Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
          (data.rotationZ += dt / data.spin)
        );
    
        if (data.y > height * (index === 0 ? 4 : 1) + 5)
          data.y = -(height * (index === 0 ? 4 : 1) + 5);
      });
    
    return (
      <mesh ref={ref} scale={0.5}>
        <boxGeometry />
        <meshStandardMaterial
          color={colors[Math.floor(Math.random() * colors.length - 1)]}
        />
      </mesh>
    );
  
  }
  