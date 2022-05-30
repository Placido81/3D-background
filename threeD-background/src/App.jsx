import * as THREE from "three"
import { useFrame, useThree } from "@react-three/fiber "


{Array.from({ length: 100 }, (_, i) => (
  <MyMesh key={i} index={i} z={(i / 100) * 10} />
))}

export default App;

