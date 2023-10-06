import * as THREE from "three";
import { useState, useRef } from "react";
import { ThreeElements, useFrame, useThree } from "@react-three/fiber";

const rotationSpeed: number = 1/2;

export default function TestBox(props: ThreeElements['mesh']) {
	const [isHovered, setIsHovered] = useState(false)
	const [isActive, setIsActive] = useState(false)

	const { viewport } = useThree();

	const meshRef: React.MutableRefObject<THREE.Mesh> = useRef(null!)

	useFrame((_, delta) => (meshRef.current.rotation.x += (rotationSpeed * delta)))

	return (
		<mesh
			{...props}
			ref={meshRef}
			scale={isActive ? (viewport.width * 1.5, viewport.height * 1.5, 1.5) : (viewport.width, viewport.height, 1)}
			onClick={() => setIsActive(!isActive)}
			onPointerOver={() => setIsHovered(true)}
			onPointerOut={() => setIsHovered(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={isHovered ? 'hotpink' : 'orange'} />
		</mesh>
	);
}
