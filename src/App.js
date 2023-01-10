import { Canvas } from '@react-three/fiber'
import { RoundedBox, Environment, OrbitControls } from '@react-three/drei'
import { Effects } from './Effects'

export const App = () => (
  <Canvas
    shadows
    gl={{
      logarithmicDepthBuffer: true,
      antialias: false,
      stencil: false,
      depth: false
    }}
    camera={{ position: [250, 225, 250], fov: 15 }}>
    <Environment background={true} blur={0.4} files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_country_hall_1k.hdr" />

    <Plane color="black" rotation-x={-Math.PI / 2} position-z={3} scale={[4, 20, 0.2]} />
    <Plane color="#f4ae00" rotation-x={-Math.PI / 2} position-y={1} scale={[4.2, 1, 4]} />
    <Plane color="#436fbd" rotation-x={-Math.PI / 2} position={[-1.7, 1, 6]} scale={[1.5, 4, 3]} />
    <Plane color="#d7dfff" rotation-x={-Math.PI / 2} position={[0, 4, 3]} scale={[2, 0.03, 4]} />
    <OrbitControls makeDefault />
    <Effects />
  </Canvas>
)

const Plane = ({ color, ...props }) => (
  <RoundedBox receiveShadow castShadow smoothness={10} radius={0.015} {...props}>
    <meshStandardMaterial color={color} envMapIntensity={0.5} roughness={0} metalness={0} />
  </RoundedBox>
)
