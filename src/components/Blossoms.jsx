import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Blossoms(props) {
  const { nodes, materials } = useGLTF('/assets/cherry_blossoms.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[33.173, 144.278, -91.5]} rotation={[3.128, -0.091, 2.031]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03001_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03001_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03001_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group
        position={[119.233, -21.216, 100.684]}
        rotation={[-1.361, -0.174, 2.171]}
        scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03002_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03002_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03002_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[10.274, 160.016, 76.683]} rotation={[-0.015, -0.083, -1.405]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03003_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03003_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03003_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-10.875, -130.208, 8.901]} rotation={[1.532, -0.493, 0.188]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03004_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03004_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03004_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[88.868, 94.907, 108.063]} rotation={[-1.63, 1.196, -1.246]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03005_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03005_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03005_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group
        position={[-113.808, 118.791, 15.582]}
        rotation={[0.156, -0.613, -0.109]}
        scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03006_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03006_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03006_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[145.729, -20.512, -8.788]} rotation={[1.934, 0.873, 1.1]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03007_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03007_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03007_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group
        position={[-106.201, 118.311, -29.398]}
        rotation={[0.785, -1.267, 1.815]}
        scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03008_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03008_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03008_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-9.875, 38.506, -140.805]} rotation={[-1.198, 0.636, -0.049]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03009_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03009_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03009_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group
        position={[-130.521, -18.854, 45.604]}
        rotation={[-2.355, -0.265, 1.899]}
        scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03010_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03010_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03010_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[61.477, 134.726, -66.365]} rotation={[1.996, -1.109, -2.744]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03011_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03011_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03011_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[140.228, 8.629, 46.743]} rotation={[-0.961, -1.054, 2.303]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03012_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03012_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03012_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[60.021, -86.353, 74.021]} rotation={[0.627, -0.489, 1.204]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03013_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03013_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03013_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group
        position={[-61.206, -100.691, 23.704]}
        rotation={[1.067, -0.487, -2.716]}
        scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03014_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03014_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03014_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-6.31, -63.95, -103.091]} rotation={[-1.409, -1.091, -1.172]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03015_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03015_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03015_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[12.775, 161.219, 15.757]} rotation={[0.206, 0.599, -1.838]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03016_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03016_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03016_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-37.419, 143.58, -45.072]} rotation={[1.884, 0.46, 1.665]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03017_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03017_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03017_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[80.496, 127.865, -36.025]} rotation={[-1.811, -0.189, 0.027]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03018_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03018_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03018_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-100.56, 85.587, -51.764]} rotation={[-0.532, 0.391, 2.2]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03019_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03019_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03019_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group
        position={[-61.201, 126.813, -49.227]}
        rotation={[-2.214, -0.148, 2.804]}
        scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03020_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03020_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03020_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[128.121, 62.065, 17.707]} rotation={[2.558, -0.908, 0.458]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03021_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03021_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03021_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[118.107, 36.256, -57.057]} rotation={[2.381, 0.337, 0.559]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03022_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03022_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03022_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[40.669, 146.359, 0.825]} rotation={[-0.736, 0.616, -3.094]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03023_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03023_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03023_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[14.023, -37.468, 116.871]} rotation={[-0.661, 0.317, -1.516]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03024_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03024_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03024_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-93.785, 34.957, 83.576]} rotation={[2.671, -0.883, -0.099]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03025_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03025_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03025_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-93.468, 83.07, -48.145]} rotation={[-1.198, -0.221, 0.332]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03026_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03026_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03026_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-52.988, -11.509, 108.439]} rotation={[0.262, 0.89, 2.794]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03027_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03027_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03027_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[37.911, -94.215, -5.959]} rotation={[-1.814, -0.598, -1.162]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03028_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03028_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03028_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[71.232, 116.586, 40.512]} rotation={[0.634, 0.761, -2.895]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03029_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03029_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03029_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-90.099, 79.277, -46.172]} rotation={[-3.14, -0.702, 2.366]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03030_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03030_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03030_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[103.115, -32.736, -25.025]} rotation={[-0.49, 1.031, -2.169]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03031_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03031_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03031_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[37.164, -9.891, -103.182]} rotation={[-1.065, -1.12, -0.185]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03032_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03032_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03032_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[82.221, 97.064, -36.728]} rotation={[2.348, -0.158, 0.116]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03033_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03033_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03033_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-60.613, 77.555, 83.241]} rotation={[2.641, -0.213, 1.253]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03034_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03034_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03034_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-21.535, 94.879, 88.175]} rotation={[0.705, -0.325, 0.791]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03035_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03035_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03035_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[87.12, 94.002, 30.512]} rotation={[0.932, -0.445, -3.1]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03036_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03036_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03036_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-5.412, 74.544, -92.62]} rotation={[-1.595, 1.028, -1.449]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03037_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03037_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03037_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[104.122, -7.626, 36.026]} rotation={[-0.269, 0.642, -0.636]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03038_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03038_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03038_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[54.773, 34.683, -89.359]} rotation={[1.782, 0.426, 0.176]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03039_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03039_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03039_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[76.852, 73.874, 64.344]} rotation={[0.228, -0.086, 0.742]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03040_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03040_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03040_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-7.182, 127.792, 1.378]} rotation={[0.012, 0.199, -0.512]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03041_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03041_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03041_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-47.697, 89.044, -58.724]} rotation={[2.386, 0.022, -3.081]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03042_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03042_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03042_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-72.572, 87.627, -19.086]} rotation={[-2.566, 0.328, -2.846]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03043_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03043_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03043_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-38.537, 113.655, 26.656]} rotation={[-0.798, -0.51, 2.789]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03044_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03044_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03044_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-45.344, 100.897, 44.023]} rotation={[0.513, -0.804, 2.015]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03045_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03045_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03045_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-58.941, 13.787, 81.272]} rotation={[2.827, -0.467, -1.241]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03046_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03046_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03046_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[24.997, 109.056, -35.909]} rotation={[2.572, -1.034, -0.412]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03047_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03047_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03047_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[13.23, -5.303, -87.348]} rotation={[0.475, 0.079, -0.151]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03048_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03048_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03048_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[31.285, -50.072, 57.319]} rotation={[1.49, -0.936, -0.292]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03049_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03049_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03049_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[62.331, 14.982, 77.66]} rotation={[1.898, -0.365, 1.575]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03050_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03050_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03050_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-34.152, -19.128, -67.716]} rotation={[2.353, 0.489, -0.84]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03051_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03051_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03051_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-76.847, 66.513, -3.025]} rotation={[0.962, -0.348, 0.24]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03052_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03052_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03052_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[78.809, -2.351, -36.039]} rotation={[1.639, -0.697, 2.923]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03053_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03053_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03053_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-72.028, 48.424, 44.222]} rotation={[1.526, 0.688, 2.826]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03054_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03054_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03054_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[63.339, 63.502, -43.695]} rotation={[0.336, -0.821, -0.072]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03055_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03055_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03055_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[0.957, 106.217, 28.81]} rotation={[-1.416, -0.769, -0.798]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03056_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03056_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03056_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-46.713, -29.246, -37.633]} rotation={[2.603, 1.003, -1.414]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03057_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03057_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03057_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-27.047, -50.38, 29.905]} rotation={[-2.513, -0.051, -3.021]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03058_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03058_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03058_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-3.83, -14.827, -67.021]} rotation={[2.568, -0.541, -2.883]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03059_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03059_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03059_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-33.519, -0.773, 72.568]} rotation={[2.462, -0.676, -0.095]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03060_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03060_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03060_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-1.892, 83.81, 54.971]} rotation={[-3.042, 0.044, -0.075]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03061_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03061_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03061_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[57.924, -12.818, -38.966]} rotation={[0.138, 0.904, -0.109]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03062_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03062_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03062_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[40.065, 31.625, -61.842]} rotation={[-2.377, -1.038, 0.844]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03063_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03063_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03063_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[9.796, -12.198, -62.164]} rotation={[1.033, 1.039, -0.066]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03064_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03064_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03064_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[36.483, 2.179, -57.776]} rotation={[-1.534, -0.906, -3.107]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03065_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03065_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03065_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[14.118, 87.622, -29.046]} rotation={[-0.973, 0.061, 2.83]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03066_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03066_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03066_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[55.534, 2.14, 48.071]} rotation={[-0.531, 0.589, -1.097]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03067_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03067_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03067_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-40.405, 17.276, -50.41]} rotation={[-0.563, 0.689, -0.288]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03068_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03068_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03068_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[69.028, 17.494, -14.329]} rotation={[-1.715, 0.424, 0.352]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03069_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03069_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03069_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-37.282, 66.549, -28.57]} rotation={[-3.101, 0.738, -2.683]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03070_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03070_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03070_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[59.207, 42.53, 33.951]} rotation={[-2.267, 0.541, 2.297]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03071_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03071_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03071_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-3.209, 3.757, 66.64]} rotation={[-1.515, -0.427, 1.968]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03072_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03072_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03072_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-10.51, 78.744, -22.472]} rotation={[1.601, -1.096, -2.167]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03073_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03073_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03073_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-25.093, 30.314, -50.898]} rotation={[2.361, 0.365, -1.551]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03074_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03074_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03074_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[11.293, 77.158, 31.397]} rotation={[-1.034, -0.104, 1.33]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03075_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03075_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03075_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[58.618, 6.062, -12.484]} rotation={[1.441, 1.344, 0.436]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03076_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03076_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03076_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-41.483, -3.784, 29.004]} rotation={[-1.544, -0.931, -1.197]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03077_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03077_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03077_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-35.9, 59.297, -17.128]} rotation={[1.298, -0.022, 3.037]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03078_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03078_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03078_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-16.886, -12.24, 41.75]} rotation={[1.022, -0.809, -0.756]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03079_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03079_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03079_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-9.293, 58.818, 44.614]} rotation={[-1.577, 0.093, 2.303]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03080_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03080_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03080_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-19.577, 8.878, -40.566]} rotation={[-2.37, -0.86, -1.337]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03081_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03081_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03081_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[18.323, 28.61, -45.371]} rotation={[-1.841, -0.982, 2.385]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03082_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03082_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03082_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-27.82, 28.392, 43.349]} rotation={[2.357, -0.41, 0.316]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03083_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03083_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03083_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[9.479, 72.803, 4.13]} rotation={[-1.58, -1.283, -0.319]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03084_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03084_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03084_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[30.425, 59.622, 19.479]} rotation={[0.231, -0.013, -1.098]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03085_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03085_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03085_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[45.26, 28.785, -16.698]} rotation={[2.769, -0.306, 3.117]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03086_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03086_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03086_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-5.513, -19.401, 15.084]} rotation={[0.553, 0.546, -2.62]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03087_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03087_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03087_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[28.704, -10.961, 17.77]} rotation={[-2.131, 0.426, 0.672]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03088_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03088_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03088_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[14.952, 35.735, -34.207]} rotation={[-2.868, 1.248, 2.285]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03089_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03089_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03089_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[18.208, -13.946, 16.976]} rotation={[2.152, 0.711, 0.415]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03090_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03090_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03090_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-20.163, 34.186, -25.344]} rotation={[2.129, -1.351, 0.48]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03091_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03091_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03091_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-6.926, 28.02, -33.025]} rotation={[0.042, 0.137, 1.514]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03092_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03092_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03092_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[14.761, 13.408, -29.329]} rotation={[2.225, 1.132, -0.234]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03093_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03093_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03093_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-11.776, -8.951, 12.962]} rotation={[-2.295, 0.388, -3.019]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03094_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03094_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03094_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-11.683, 33.47, 33.778]} rotation={[-2.065, -0.435, 1.026]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03095_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03095_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03095_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-11.852, -7.041, 2.786]} rotation={[-1.162, 0.017, 1.227]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03096_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03096_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03096_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[5.876, 13.465, 34.763]} rotation={[1.546, 0.877, -3.134]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03097_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03097_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03097_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[33.839, 21.098, -3.654]} rotation={[0.865, 0.125, 1.958]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03098_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03098_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03098_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[5.485, 27.037, 33.524]} rotation={[-3.054, 0.142, -0.088]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03099_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03099_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03099_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[0.742, 37.066, -20.655]} rotation={[-0.705, 0.98, -0.021]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03100_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03100_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03100_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-6.452, 6.58, -13.523]} rotation={[1.089, 0.521, -2.51]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03101_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03101_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03101_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[6.757, 20.097, -21.265]} rotation={[1.984, -0.571, -2.782]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03102_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03102_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03102_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-3.083, 46.156, 0.766]} rotation={[0.985, 1.052, -3.02]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03103_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03103_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03103_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-19.106, 17.291, 1.451]} rotation={[2.119, 0.341, -3.043]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03104_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03104_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03104_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[16.378, 7.328, -1.561]} rotation={[1.342, -1.076, 1.146]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03105_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03105_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03105_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[1.624, 3.248, -1.362]} rotation={[1.654, -0.609, -2.823]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03106_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03106_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03106_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-1.527, 41.399, 6.22]} rotation={[-0.093, -1.143, 2.331]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03107_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03107_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03107_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-0.511, 6.769, 11.573]} rotation={[2.571, 0.865, -2.133]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03108_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03108_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03108_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[8.132, 15.115, -8.579]} rotation={[1.434, -1.074, 2.099]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03109_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03109_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03109_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[18.751, 25.727, 0.907]} rotation={[1.229, 0.2, 3.083]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03110_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03110_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03110_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[11.381, 13.375, 9.492]} rotation={[2.358, -1.213, 0.326]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03111_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03111_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03111_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[10.27, 15.079, 12.342]} rotation={[3.126, -0.855, 2.847]} scale={7.815}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03112_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03112_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03112_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <group position={[-14.274, 89.013, 17.388]} rotation={[2.323, -0.972, -2.25]} scale={15.629}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03_petal03_0'].geometry}
          material={materials.petal03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03_petal02_0'].geometry}
          material={materials.petal02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['03_petal01_0'].geometry}
          material={materials.petal01}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04001_petal02_0'].geometry}
        material={materials.petal02}
        position={[148.81, 70.155, 49.538]}
        rotation={[-0.805, 0.866, -0.283]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01001_petal03_0'].geometry}
        material={materials.petal03}
        position={[67.694, 145.956, 82.403]}
        rotation={[1.556, 0.818, -0.024]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01002_petal03_0'].geometry}
        material={materials.petal03}
        position={[-9.578, 97.155, -134.922]}
        rotation={[-1.854, -0.435, -1.309]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02001_petal01_0'].geometry}
        material={materials.petal01}
        position={[-17.593, 162.975, -66.344]}
        rotation={[1.153, -0.469, -1.079]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02002_petal01_0'].geometry}
        material={materials.petal01}
        position={[-103.893, 123.21, 62.312]}
        rotation={[-0.565, -0.66, 0.427]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04002_petal02_0'].geometry}
        material={materials.petal02}
        position={[-43.218, 161.335, 61.811]}
        rotation={[-2.437, 1.043, -1.131]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01003_petal03_0'].geometry}
        material={materials.petal03}
        position={[-5.782, 143.414, -94.818]}
        rotation={[0.532, 0.464, -0.573]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01004_petal03_0'].geometry}
        material={materials.petal03}
        position={[134.51, 97.267, 45.115]}
        rotation={[1.74, -0.663, 2.442]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02003_petal01_0'].geometry}
        material={materials.petal01}
        position={[-94.817, 38.659, -114.711]}
        rotation={[1.35, 0.159, 2.463]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02004_petal01_0'].geometry}
        material={materials.petal01}
        position={[-11.681, 67.515, 152.374]}
        rotation={[2.278, -1.196, -1.934]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04003_petal02_0'].geometry}
        material={materials.petal02}
        position={[-71.396, -74.567, -87.506]}
        rotation={[-2.216, -0.179, 1.629]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01005_petal03_0'].geometry}
        material={materials.petal03}
        position={[-12.353, 9.193, 156.602]}
        rotation={[-0.443, 1.394, 2.528]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01006_petal03_0'].geometry}
        material={materials.petal03}
        position={[100.557, -94.753, -5.206]}
        rotation={[-2.58, -0.661, -2.308]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02005_petal01_0'].geometry}
        material={materials.petal01}
        position={[-92.59, -94.991, -5.282]}
        rotation={[1.406, -1.208, -1.352]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02006_petal01_0'].geometry}
        material={materials.petal01}
        position={[19.323, 9.302, -146.332]}
        rotation={[2.827, 1.396, -2.404]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04004_petal02_0'].geometry}
        material={materials.petal02}
        position={[-68.268, 9.411, 136.982]}
        rotation={[1.754, 0.023, -2.748]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01007_petal03_0'].geometry}
        material={materials.petal03}
        position={[-124.045, -20.149, -63.228]}
        rotation={[0.29, -1.456, -2.2]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01008_petal03_0'].geometry}
        material={materials.petal03}
        position={[-41.457, -109.627, 58.973]}
        rotation={[0.319, 0.976, 0.702]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02007_petal01_0'].geometry}
        material={materials.petal01}
        position={[115, 67.566, -85.79]}
        rotation={[-2.284, -0.653, 0.349]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02008_petal01_0'].geometry}
        material={materials.petal01}
        position={[-139.148, -19.825, 18.977]}
        rotation={[-0.167, -0.363, 0.578]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04005_petal02_0'].geometry}
        material={materials.petal02}
        position={[-90.687, -91.297, -4.469]}
        rotation={[-3.104, -0.469, -2.813]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01009_petal03_0'].geometry}
        material={materials.petal03}
        position={[-90.549, 8.192, 118.174]}
        rotation={[2.558, -1.343, 0.567]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01010_petal03_0'].geometry}
        material={materials.petal03}
        position={[-57.037, -90.285, 77.392]}
        rotation={[1.699, 1.167, 1.013]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02009_petal01_0'].geometry}
        material={materials.petal01}
        position={[112.958, -19.178, 93.936]}
        rotation={[-1.524, -1.065, -0.863]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02010_petal01_0'].geometry}
        material={materials.petal01}
        position={[-9.618, -19.865, -135.475]}
        rotation={[2.623, -0.06, -1.248]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04006_petal02_0'].geometry}
        material={materials.petal02}
        position={[-125.141, 91.371, 16.632]}
        rotation={[-1.906, 1.111, 2.714]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01011_petal03_0'].geometry}
        material={materials.petal03}
        position={[18.032, 66.272, -133.868]}
        rotation={[2.591, 1.527, -0.653]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01012_petal03_0'].geometry}
        material={materials.petal03}
        position={[41.093, -44.799, 127.288]}
        rotation={[-2.96, -0.042, 0.2]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02011_petal01_0'].geometry}
        material={materials.petal01}
        position={[90.931, -19.217, 112.065]}
        rotation={[2.627, -1, 2.505]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02012_petal01_0'].geometry}
        material={materials.petal01}
        position={[15.242, 92.009, 131.256]}
        rotation={[1.516, 0.87, -2.811]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04007_petal02_0'].geometry}
        material={materials.petal02}
        position={[-4.82, 134.587, -85.627]}
        rotation={[0.876, 0.976, -0.053]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01013_petal03_0'].geometry}
        material={materials.petal03}
        position={[101.408, -43.747, 84.49]}
        rotation={[-1.326, 0.32, -1.713]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01014_petal03_0'].geometry}
        material={materials.petal03}
        position={[109.847, 113.125, -27.089]}
        rotation={[-0.784, 0.207, -1.105]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02013_petal01_0'].geometry}
        material={materials.petal01}
        position={[55.822, 114.062, -91.834]}
        rotation={[-0.206, 0.128, 0.316]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02014_petal01_0'].geometry}
        material={materials.petal01}
        position={[83.224, 90.175, 101.186]}
        rotation={[-2.81, -0.008, 1.009]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04008_petal02_0'].geometry}
        material={materials.petal02}
        position={[-38.926, -100.687, -46.893]}
        rotation={[-0.563, 0.49, -0.241]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01015_petal03_0'].geometry}
        material={materials.petal03}
        position={[-15.574, 146.806, -59.675]}
        rotation={[0.217, -0.222, 2.534]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01016_petal03_0'].geometry}
        material={materials.petal03}
        position={[-92.229, 89.905, 82.179]}
        rotation={[-0.453, -1.141, 1.648]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02015_petal01_0'].geometry}
        material={materials.petal01}
        position={[-74.41, 89.123, 100.052]}
        rotation={[0.112, 0.338, 0.095]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02016_petal01_0'].geometry}
        material={materials.petal01}
        position={[131.164, 62.985, 43.986]}
        rotation={[-2.949, 1.019, -0.35]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04009_petal02_0'].geometry}
        material={materials.petal02}
        position={[-10.622, 36.158, 141.456]}
        rotation={[-2.164, 1.386, 0.777]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01017_petal03_0'].geometry}
        material={materials.petal03}
        position={[130.285, -15.715, -32.933]}
        rotation={[0.722, -0.269, 2.215]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01018_petal03_0'].geometry}
        material={materials.petal03}
        position={[-9.292, -113.495, 8.421]}
        rotation={[2.75, -1.032, -1.34]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02017_petal01_0'].geometry}
        material={materials.petal01}
        position={[108.52, 9.284, 91.6]}
        rotation={[2.094, 0.437, -1.693]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02018_petal01_0'].geometry}
        material={materials.petal01}
        position={[42.428, 154.413, 0.946]}
        rotation={[1.647, -0.975, 0.513]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04010_petal02_0'].geometry}
        material={materials.petal02}
        position={[137.835, 37.414, -7.741]}
        rotation={[0.013, 0.847, -0.58]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01019_petal03_0'].geometry}
        material={materials.petal03}
        position={[-8.977, 157.876, -2.055]}
        rotation={[-1.089, 0.255, 2.887]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01020_petal03_0'].geometry}
        material={materials.petal03}
        position={[-62.099, -81.17, -49.795]}
        rotation={[1.497, 1.313, 1.068]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02019_petal01_0'].geometry}
        material={materials.petal01}
        position={[116.852, -14.745, 66.161]}
        rotation={[2.979, -0.853, -2.155]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02020_petal01_0'].geometry}
        material={materials.petal01}
        position={[78.963, -80.067, 44.635]}
        rotation={[2.269, -0.447, 3.069]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04011_petal02_0'].geometry}
        material={materials.petal02}
        position={[-20.824, -79.204, 85.687]}
        rotation={[-0.885, -1.11, -2.509]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01021_petal03_0'].geometry}
        material={materials.petal03}
        position={[119.766, -39.572, -6.29]}
        rotation={[-2.818, 0.252, -0.165]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01022_petal03_0'].geometry}
        material={materials.petal03}
        position={[14.312, 150.129, 40.763]}
        rotation={[-1.399, 0.223, 0.168]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02021_petal01_0'].geometry}
        material={materials.petal01}
        position={[82.228, 106.92, -60.348]}
        rotation={[0.864, 0.013, -0.303]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02022_petal01_0'].geometry}
        material={materials.petal01}
        position={[-112.352, 84.535, 15.373]}
        rotation={[0.056, -0.972, -1.013]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04012_petal02_0'].geometry}
        material={materials.petal02}
        position={[28.248, 147.903, -25.145]}
        rotation={[-1.182, -0.801, -0.085]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01023_petal03_0'].geometry}
        material={materials.petal03}
        position={[-110.904, 36.868, 64.73]}
        rotation={[0.773, -0.324, -1.168]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01024_petal03_0'].geometry}
        material={materials.petal03}
        position={[39.87, 60.975, 123.179]}
        rotation={[0.864, -0.51, -0.378]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02023_petal01_0'].geometry}
        material={materials.petal01}
        position={[12.817, -58.986, 103.793]}
        rotation={[-0.162, 0.075, 2.197]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02024_petal01_0'].geometry}
        material={materials.petal01}
        position={[55.452, -75.6, 68.837]}
        rotation={[-2.105, 0.837, 2.368]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04013_petal02_0'].geometry}
        material={materials.petal02}
        position={[80.839, 122.493, -18.322]}
        rotation={[0.284, -1.393, -1.164]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01025_petal03_0'].geometry}
        material={materials.petal03}
        position={[41.579, -74.884, -67.074]}
        rotation={[-0.42, -0.376, 1.285]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01026_petal03_0'].geometry}
        material={materials.petal03}
        position={[81.305, 59.426, -89.134]}
        rotation={[1.638, 0.086, -1.21]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02025_petal01_0'].geometry}
        material={materials.petal01}
        position={[-1.91, -87.868, -55.798]}
        rotation={[0.707, -1.326, -0.676]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02026_petal01_0'].geometry}
        material={materials.petal01}
        position={[-9.159, 148.962, 8.483]}
        rotation={[-1.571, -0.395, 1.68]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04014_petal02_0'].geometry}
        material={materials.petal02}
        position={[-53.249, -12.706, -100.939]}
        rotation={[-0.548, 1.038, 2.251]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01027_petal03_0'].geometry}
        material={materials.petal03}
        position={[34.957, -96.241, 21.544]}
        rotation={[-1.932, -1.137, 0.016]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01028_petal03_0'].geometry}
        material={materials.petal03}
        position={[62.652, 36.321, -104.1]}
        rotation={[-2.608, 1.301, 2.438]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02027_petal01_0'].geometry}
        material={materials.petal01}
        position={[-81.205, 101.962, -40.409]}
        rotation={[2.054, 0.954, -0.337]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02028_petal01_0'].geometry}
        material={materials.petal01}
        position={[14.491, -13.069, 122.235]}
        rotation={[-2.02, 0.002, -3.013]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04015_petal02_0'].geometry}
        material={materials.petal02}
        position={[30.73, -94.099, -17.54]}
        rotation={[-0.614, -0.259, -2.312]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01029_petal03_0'].geometry}
        material={materials.petal03}
        position={[-41.37, -83.922, -32.916]}
        rotation={[2.586, 0.165, 2.373]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01030_petal03_0'].geometry}
        material={materials.petal03}
        position={[-23.593, -53.622, 94.984]}
        rotation={[-0.693, 0.668, 1.669]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02029_petal01_0'].geometry}
        material={materials.petal01}
        position={[-28.36, 139.335, 21.356]}
        rotation={[-1.666, 0.261, 2.849]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02030_petal01_0'].geometry}
        material={materials.petal01}
        position={[15.681, -97.058, 0.737]}
        rotation={[-0.583, -0.664, -2.477]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04016_petal02_0'].geometry}
        material={materials.petal02}
        position={[13.924, -10.538, 119.141]}
        rotation={[-0.886, -1.331, 1.607]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01031_petal03_0'].geometry}
        material={materials.petal03}
        position={[-55.01, 115.722, 52.917]}
        rotation={[0.674, -1.095, -0.571]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01032_petal03_0'].geometry}
        material={materials.petal03}
        position={[-87.658, 11.032, -71.129]}
        rotation={[0.154, -0.66, -0.244]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02031_petal01_0'].geometry}
        material={materials.petal01}
        position={[26.262, -90.089, -22.579]}
        rotation={[-0.406, -0.661, 2.895]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02032_petal01_0'].geometry}
        material={materials.petal01}
        position={[-46.047, -32.179, -87.52]}
        rotation={[0.793, 0.411, -0.176]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04017_petal02_0'].geometry}
        material={materials.petal02}
        position={[58.263, 12.04, -98.551]}
        rotation={[-0.651, 1.342, 0.676]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01033_petal03_0'].geometry}
        material={materials.petal03}
        position={[6.703, 135.051, 39.172]}
        rotation={[1.832, 1.373, 1.408]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01034_petal03_0'].geometry}
        material={materials.petal03}
        position={[-49.766, -78.99, -12.106]}
        rotation={[-2.855, -1.154, -2.213]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02033_petal01_0'].geometry}
        material={materials.petal01}
        position={[-111.504, 12.149, 16.267]}
        rotation={[0.981, -0.005, -2.242]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02034_petal01_0'].geometry}
        material={materials.petal01}
        position={[114.089, 33.973, -28.246]}
        rotation={[1.557, -0.111, -2.14]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04018_petal02_0'].geometry}
        material={materials.petal02}
        position={[-101.902, 55.866, 35.875]}
        rotation={[1.184, -0.498, 2.19]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01035_petal03_0'].geometry}
        material={materials.petal03}
        position={[-6.709, 13.016, -108.807]}
        rotation={[2.636, 0.564, -0.093]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01036_petal03_0'].geometry}
        material={materials.petal03}
        position={[81.14, -30.076, -59.513]}
        rotation={[-0.68, 0.057, 0.081]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02035_petal01_0'].geometry}
        material={materials.petal01}
        position={[72.207, 94.71, -51.057]}
        rotation={[1.259, 0.311, -0.59]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02036_petal01_0'].geometry}
        material={materials.petal01}
        position={[56.134, 123.519, -0.232]}
        rotation={[-2.233, 0.095, -0.147]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04019_petal02_0'].geometry}
        material={materials.petal02}
        position={[70.79, 56.564, 87.868]}
        rotation={[2.426, 1.052, -2.842]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01037_petal03_0'].geometry}
        material={materials.petal03}
        position={[86.01, -8.823, -63.543]}
        rotation={[-0.389, 1.196, 2.916]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01038_petal03_0'].geometry}
        material={materials.petal03}
        position={[-102.35, 33.537, -28.249]}
        rotation={[-1.655, -0.922, -2.153]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02037_petal01_0'].geometry}
        material={materials.petal01}
        position={[-77.986, 94.231, -20.839]}
        rotation={[-0.952, -0.304, -3.052]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02038_petal01_0'].geometry}
        material={materials.petal01}
        position={[-7.18, -8.5, -100.772]}
        rotation={[-0.186, 1.377, 1.561]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04020_petal02_0'].geometry}
        material={materials.petal02}
        position={[84.645, 92.754, 28.9]}
        rotation={[2.454, -0.569, 0.212]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01039_petal03_0'].geometry}
        material={materials.petal03}
        position={[8.297, 119.187, 56.567]}
        rotation={[0.005, -0.952, 0.584]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01040_petal03_0'].geometry}
        material={materials.petal03}
        position={[-48.218, 34.792, 99.502]}
        rotation={[2.824, -0.648, 0.117]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02039_petal01_0'].geometry}
        material={materials.petal01}
        position={[-49.522, -45.123, 69.675]}
        rotation={[0.485, -0.377, 0.275]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02040_petal01_0'].geometry}
        material={materials.petal01}
        position={[94.555, 53.925, 53.978]}
        rotation={[-2.297, 0.091, -0.256]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04021_petal02_0'].geometry}
        material={materials.petal02}
        position={[42.259, 90.46, 78.193]}
        rotation={[2.18, 0.541, 2.939]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01041_petal03_0'].geometry}
        material={materials.petal03}
        position={[-89.417, 34.574, -46.127]}
        rotation={[0.012, -0.18, -3.039]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01042_petal03_0'].geometry}
        material={materials.petal03}
        position={[-61.184, -7.205, -73.747]}
        rotation={[1.695, 0.358, 0.002]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02041_petal01_0'].geometry}
        material={materials.petal01}
        position={[-34.413, -44.112, -67.47]}
        rotation={[-0.999, 0.38, -0.16]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02042_petal01_0'].geometry}
        material={materials.petal01}
        position={[-59.537, 90.689, 55.494]}
        rotation={[1.952, 0.027, -0.568]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04022_petal02_0'].geometry}
        material={materials.petal02}
        position={[7.937, 115.628, 52.957]}
        rotation={[0.544, -0.296, 3.055]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01043_petal03_0'].geometry}
        material={materials.petal03}
        position={[-22.758, 72.297, 92.344]}
        rotation={[1.738, 0.723, -2.391]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01044_petal03_0'].geometry}
        material={materials.petal03}
        position={[14.294, 12.561, -97.784]}
        rotation={[2.277, -0.185, 0.437]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02043_petal01_0'].geometry}
        material={materials.petal01}
        position={[-47.292, 89.273, 65.481]}
        rotation={[-1.781, 0.476, 1.736]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02044_petal01_0'].geometry}
        material={materials.petal01}
        position={[-61.062, 13.46, 83.856]}
        rotation={[-1.185, -0.01, 3.135]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04023_petal02_0'].geometry}
        material={materials.petal02}
        position={[-44.454, 13.569, -84.458]}
        rotation={[-1.56, 0.762, -2.968]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01045_petal03_0'].geometry}
        material={materials.petal03}
        position={[81.177, -41.279, -2.571]}
        rotation={[-1.866, 0.354, -0.484]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01046_petal03_0'].geometry}
        material={materials.petal03}
        position={[-45.764, -39.869, -56.681]}
        rotation={[0.004, -0.214, -0.077]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02045_petal01_0'].geometry}
        material={materials.petal01}
        position={[-26.845, -54.152, -51.779]}
        rotation={[2.592, -0.662, -0.66]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02046_petal01_0'].geometry}
        material={materials.petal01}
        position={[52.576, 86.211, 65.203]}
        rotation={[2.975, -1.265, 2.024]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04024_petal02_0'].geometry}
        material={materials.petal02}
        position={[90.141, -23.797, 13.687]}
        rotation={[-0.091, -0.719, -1.529]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01047_petal03_0'].geometry}
        material={materials.petal03}
        position={[-19.077, -70.81, -14.414]}
        rotation={[-2.247, 0.823, 0.944]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01048_petal03_0'].geometry}
        material={materials.petal03}
        position={[-18.767, -70.653, -13.586]}
        rotation={[-2.703, 0.158, 2.598]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02047_petal01_0'].geometry}
        material={materials.petal01}
        position={[-78.967, 51.012, -40.27]}
        rotation={[1.579, 1.176, 1.615]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02048_petal01_0'].geometry}
        material={materials.petal01}
        position={[21.12, -51.412, 64.725]}
        rotation={[2.427, -1.062, 2.851]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04025_petal02_0'].geometry}
        material={materials.petal02}
        position={[-40.861, -3.742, 85.752]}
        rotation={[-2.061, -0.358, -1.65]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01049_petal03_0'].geometry}
        material={materials.petal03}
        position={[69.165, 84.255, 39.35]}
        rotation={[-1.09, 0.039, -2.339]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01050_petal03_0'].geometry}
        material={materials.petal03}
        position={[-80.152, 32.007, -40.923]}
        rotation={[-2.43, 0.234, 1.687]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02049_petal01_0'].geometry}
        material={materials.petal01}
        position={[30.941, -3.419, -82.668]}
        rotation={[0.284, 0.516, 1.714]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02050_petal01_0'].geometry}
        material={materials.petal01}
        position={[-3.949, -36.624, -68.613]}
        rotation={[-1.489, -0.04, -1.25]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04026_petal02_0'].geometry}
        material={materials.petal02}
        position={[-60.714, -35.916, -29.448]}
        rotation={[-2.934, 1.036, 0.164]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01051_petal03_0'].geometry}
        material={materials.petal03}
        position={[-20.852, -21.168, 83.011]}
        rotation={[-0.851, 0.677, 0.509]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01052_petal03_0'].geometry}
        material={materials.petal03}
        position={[31.317, 15.091, -83.837]}
        rotation={[-0.401, 1.372, 1.982]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02051_petal01_0'].geometry}
        material={materials.petal01}
        position={[-59.791, 82.13, -28.963]}
        rotation={[-1.556, 0.821, -1.573]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02052_petal01_0'].geometry}
        material={materials.petal01}
        position={[-39.192, 31.68, -76.803]}
        rotation={[-0.467, 0.2, -0.768]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04027_petal02_0'].geometry}
        material={materials.petal02}
        position={[-4.997, 65.605, 84.936]}
        rotation={[1.38, -0.302, 1.993]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01053_petal03_0'].geometry}
        material={materials.petal03}
        position={[-17.348, 81.482, 71.169]}
        rotation={[-0.122, -1.09, 1.334]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01054_petal03_0'].geometry}
        material={materials.petal03}
        position={[1.067, 109.944, 30.682]}
        rotation={[2.174, -0.97, -2.911]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02053_petal01_0'].geometry}
        material={materials.petal01}
        position={[70.844, 79.836, -15.258]}
        rotation={[1.241, -0.642, 3.057]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02054_petal01_0'].geometry}
        material={materials.petal01}
        position={[-72.067, 66.243, 26.71]}
        rotation={[-0.697, -1.423, 0.719]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04028_petal02_0'].geometry}
        material={materials.petal02}
        position={[-12.386, -44.502, -50.11]}
        rotation={[-2.873, -0.004, -0.27]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01055_petal03_0'].geometry}
        material={materials.petal03}
        position={[-19.379, -17.982, -69.883]}
        rotation={[2.7, 0.272, -3.097]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01056_petal03_0'].geometry}
        material={materials.petal03}
        position={[-9.047, 107.204, 27.614]}
        rotation={[1.31, 1.182, 1.813]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02055_petal01_0'].geometry}
        material={materials.petal01}
        position={[22.94, -53.344, 41.924]}
        rotation={[2.505, -0.956, -2.691]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02056_petal01_0'].geometry}
        material={materials.petal01}
        position={[-4.314, -17.456, -71.94]}
        rotation={[1.285, -1.004, -1.1]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04029_petal02_0'].geometry}
        material={materials.petal02}
        position={[-36.774, 99.192, 8.714]}
        rotation={[-0.992, -0.531, 2.92]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01057_petal03_0'].geometry}
        material={materials.petal03}
        position={[-4.404, -17.487, 79.376]}
        rotation={[-0.118, 0.173, 0.907]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01058_petal03_0'].geometry}
        material={materials.petal03}
        position={[58.16, -41.91, -0.161]}
        rotation={[2.694, -0.055, 0.097]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02057_petal01_0'].geometry}
        material={materials.petal01}
        position={[22.84, 77.173, 67.271]}
        rotation={[0.024, -0.629, -0.117]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02058_petal01_0'].geometry}
        material={materials.petal01}
        position={[-47.698, 76.295, 45.914]}
        rotation={[2.801, -1.274, -0.549]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04030_petal02_0'].geometry}
        material={materials.petal02}
        position={[67.859, -16.435, 39.61]}
        rotation={[-1.116, -0.794, 2.218]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01059_petal03_0'].geometry}
        material={materials.petal03}
        position={[8.141, -40.182, 57.783]}
        rotation={[1.425, 0.304, 0.018]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01060_petal03_0'].geometry}
        material={materials.petal03}
        position={[49.871, 87.216, 29.094]}
        rotation={[-0.317, -0.703, -0.994]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02059_petal01_0'].geometry}
        material={materials.petal01}
        position={[-74.499, 14.636, -19.791]}
        rotation={[2.455, -0.961, 0.113]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02060_petal01_0'].geometry}
        material={materials.petal01}
        position={[-47.475, 16.183, -59.024]}
        rotation={[1.514, 0.626, 0.772]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04031_petal02_0'].geometry}
        material={materials.petal02}
        position={[-65.24, 0.788, 40.33]}
        rotation={[0.389, -0.908, 0.459]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01061_petal03_0'].geometry}
        material={materials.petal03}
        position={[74.24, 15.644, 41.969]}
        rotation={[-2.711, 0.173, 3.07]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01062_petal03_0'].geometry}
        material={materials.petal03}
        position={[54.599, 30.478, -56.567]}
        rotation={[-0.198, -0.969, 3.071]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02061_petal01_0'].geometry}
        material={materials.petal01}
        position={[38.784, 1.111, 72.415]}
        rotation={[-2.795, 0.097, -0.126]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02062_petal01_0'].geometry}
        material={materials.petal01}
        position={[39.612, 0.561, 71.342]}
        rotation={[-0.134, -1.096, -0.246]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04032_petal02_0'].geometry}
        material={materials.petal02}
        position={[64.143, 60.203, -28.165]}
        rotation={[-2.689, 1.057, -0.437]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01063_petal03_0'].geometry}
        material={materials.petal03}
        position={[-49.39, -26.406, 32.314]}
        rotation={[2.705, -1.333, 1.754]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01064_petal03_0'].geometry}
        material={materials.petal03}
        position={[-53.473, 72.983, 21.186]}
        rotation={[0.242, -1.088, 2.263]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02063_petal01_0'].geometry}
        material={materials.petal01}
        position={[68.733, 1.208, 39.039]}
        rotation={[1.321, -1.153, -0.49]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02064_petal01_0'].geometry}
        material={materials.petal01}
        position={[-53.806, 71.337, 21.398]}
        rotation={[0.281, 0.024, 0.074]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04033_petal02_0'].geometry}
        material={materials.petal02}
        position={[-0.724, -35.387, -42.71]}
        rotation={[-1.021, -0.3, -1.449]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01065_petal03_0'].geometry}
        material={materials.petal03}
        position={[7.653, -34.136, 52.82]}
        rotation={[1.502, -0.251, -2.535]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01066_petal03_0'].geometry}
        material={materials.petal03}
        position={[24.65, 1.855, 72.993]}
        rotation={[2.866, 0.259, 1.85]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02065_petal01_0'].geometry}
        material={materials.petal01}
        position={[-18.879, 88.608, -23.306]}
        rotation={[-1.915, -0.545, 0.778]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02066_petal01_0'].geometry}
        material={materials.petal01}
        position={[66.178, -10.714, 24.458]}
        rotation={[0.512, 0.429, -0.476]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04034_petal02_0'].geometry}
        material={materials.petal02}
        position={[39.09, -22.163, 49.083]}
        rotation={[2.847, -0.216, -0.881]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01067_petal03_0'].geometry}
        material={materials.petal03}
        position={[-28.863, 44.472, 65.92]}
        rotation={[-1.412, -0.466, 0.01]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01068_petal03_0'].geometry}
        material={materials.petal03}
        position={[-56.918, -11.177, -14.359]}
        rotation={[0.324, 0.578, 1.56]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02067_petal01_0'].geometry}
        material={materials.petal01}
        position={[1.672, 94.886, -1.548]}
        rotation={[-1.997, 0.151, 0.322]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02068_petal01_0'].geometry}
        material={materials.petal01}
        position={[-15.983, 2.826, 70.114]}
        rotation={[1.252, -0.049, -0.292]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04035_petal02_0'].geometry}
        material={materials.petal02}
        position={[70.476, 43.825, 10.833]}
        rotation={[-0.899, 0.544, 2.44]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01069_petal03_0'].geometry}
        material={materials.petal03}
        position={[56.836, 15.838, 49.185]}
        rotation={[2.642, 0.445, 0]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01070_petal03_0'].geometry}
        material={materials.petal03}
        position={[-62.484, 17.385, -16.404]}
        rotation={[0.031, -0.401, -0.268]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02069_petal01_0'].geometry}
        material={materials.petal01}
        position={[-3.777, 92.137, 6.851]}
        rotation={[2.89, 0.027, 0.158]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02070_petal01_0'].geometry}
        material={materials.petal01}
        position={[21.988, 2.787, 67.576]}
        rotation={[2.749, -0.97, 1.056]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04036_petal02_0'].geometry}
        material={materials.petal02}
        position={[46.932, 75.171, 0.775]}
        rotation={[-2.319, 0.795, -0.793]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01071_petal03_0'].geometry}
        material={materials.petal03}
        position={[-29.26, -18.622, -36.571]}
        rotation={[-1.32, -0.054, -0.222]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01072_petal03_0'].geometry}
        material={materials.petal03}
        position={[53.111, 65.84, 19.334]}
        rotation={[1.656, 0.917, -0.68]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02071_petal01_0'].geometry}
        material={materials.petal01}
        position={[-52.159, 3.434, -25.909]}
        rotation={[-1.563, 0.377, -0.768]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02072_petal01_0'].geometry}
        material={materials.petal01}
        position={[-3.058, -7.034, 63.007]}
        rotation={[1.256, 1.027, -0.983]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04037_petal02_0'].geometry}
        material={materials.petal02}
        position={[8.363, 54.675, 61.409]}
        rotation={[-1.51, 0.678, 3.044]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01073_petal03_0'].geometry}
        material={materials.petal03}
        position={[47.518, -6.939, -31.92]}
        rotation={[-2.272, 0.149, -0.479]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01074_petal03_0'].geometry}
        material={materials.petal03}
        position={[-57.437, 16.384, -14.615]}
        rotation={[-0.48, -0.236, -0.051]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02073_petal01_0'].geometry}
        material={materials.petal01}
        position={[-4.972, -32.629, -25.184]}
        rotation={[2.586, 0.037, -0.022]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02074_petal01_0'].geometry}
        material={materials.petal01}
        position={[33.037, 29.702, -51.354]}
        rotation={[-0.008, -0.98, -0.197]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04038_petal02_0'].geometry}
        material={materials.petal02}
        position={[58.159, 29.593, -25.014]}
        rotation={[2.58, -1.085, 1.356]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01075_petal03_0'].geometry}
        material={materials.petal03}
        position={[16.912, -36.264, 15.75]}
        rotation={[0.856, 0.111, 1.881]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01076_petal03_0'].geometry}
        material={materials.petal03}
        position={[-44.436, -15.08, -0.9]}
        rotation={[-2.905, -0.606, -1.079]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02075_petal01_0'].geometry}
        material={materials.petal01}
        position={[45.626, -5.362, 38.711]}
        rotation={[2.016, 0.327, -1.859]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02076_petal01_0'].geometry}
        material={materials.petal01}
        position={[-12.73, 5.052, -51.235]}
        rotation={[-2.076, -0.066, 0.954]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04039_petal02_0'].geometry}
        material={materials.petal02}
        position={[-9.761, 75.785, -21.07]}
        rotation={[-2.827, -0.676, -1.544]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01077_petal03_0'].geometry}
        material={materials.petal03}
        position={[62.425, 29.986, -0.314]}
        rotation={[1.855, 1.294, -2.76]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01078_petal03_0'].geometry}
        material={materials.petal03}
        position={[-13.187, 40.589, -49.396]}
        rotation={[-1.415, -0.805, 2.15]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02077_petal01_0'].geometry}
        material={materials.petal01}
        position={[-20.106, -22.429, 32.774]}
        rotation={[-3.07, 0.588, 0.197]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02078_petal01_0'].geometry}
        material={materials.petal01}
        position={[8.141, 41.032, 59.991]}
        rotation={[0.002, 0.481, 0.233]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04040_petal02_0'].geometry}
        material={materials.petal02}
        position={[31.223, 18.586, -45.27]}
        rotation={[-0.599, -0.672, 1.013]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01079_petal03_0'].geometry}
        material={materials.petal03}
        position={[-6.708, 67.347, 39.125]}
        rotation={[1.932, -1.375, 2.948]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01080_petal03_0'].geometry}
        material={materials.petal03}
        position={[35.84, 49.305, -33.802]}
        rotation={[1.326, 0.664, 3.028]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02079_petal01_0'].geometry}
        material={materials.petal01}
        position={[27.985, 40.384, 52.121]}
        rotation={[2.794, -1.267, -0.993]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02080_petal01_0'].geometry}
        material={materials.petal01}
        position={[-49.542, 7.356, 10.152]}
        rotation={[0.576, 0.304, -1.032]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04041_petal02_0'].geometry}
        material={materials.petal02}
        position={[40.867, 58.05, 24.225]}
        rotation={[-1.406, 0.213, 2.524]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01081_petal03_0'].geometry}
        material={materials.petal03}
        position={[44.235, 38.392, -27.962]}
        rotation={[2.651, 0.875, -1.298]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01082_petal03_0'].geometry}
        material={materials.petal03}
        position={[-23.822, -17.723, 26.214]}
        rotation={[0.131, -1.461, -1.354]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02081_petal01_0'].geometry}
        material={materials.petal01}
        position={[25.356, -17.871, 30.801]}
        rotation={[-1.473, -0.411, 2.446]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02082_petal01_0'].geometry}
        material={materials.petal01}
        position={[27.886, 27.857, 51.567]}
        rotation={[2.931, 0.778, -0.495]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04042_petal02_0'].geometry}
        material={materials.petal02}
        position={[-42.384, 47.201, -0.565]}
        rotation={[0.544, -0.277, 0.918]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01083_petal03_0'].geometry}
        material={materials.petal03}
        position={[6.749, 56.693, 43.888]}
        rotation={[-0.856, -1.451, 1.566]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01084_petal03_0'].geometry}
        material={materials.petal03}
        position={[27.882, 28.501, 49.372]}
        rotation={[0.226, -0.272, -0.699]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02083_petal01_0'].geometry}
        material={materials.petal01}
        position={[53.783, 17.694, 10.201]}
        rotation={[0.694, 0.649, -2.999]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02084_petal01_0'].geometry}
        material={materials.petal01}
        position={[18.315, 38.766, -41.193]}
        rotation={[3.126, 0.848, 1.988]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04043_petal02_0'].geometry}
        material={materials.petal02}
        position={[-23.336, 62.025, -10.377]}
        rotation={[1.844, 0.295, -0.325]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01085_petal03_0'].geometry}
        material={materials.petal03}
        position={[-1.02, 0.422, -38.492]}
        rotation={[-2.061, -1.14, -1.26]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01086_petal03_0'].geometry}
        material={materials.petal03}
        position={[7.615, 27.42, 52.871]}
        rotation={[2.484, 0.917, -2.844]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02085_petal01_0'].geometry}
        material={materials.petal01}
        position={[-6.158, -13.404, 34.361]}
        rotation={[-0.302, -0.008, 3.14]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02086_petal01_0'].geometry}
        material={materials.petal01}
        position={[26.32, 18.812, 46.447]}
        rotation={[-2.559, 0.18, -1.166]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04044_petal02_0'].geometry}
        material={materials.petal02}
        position={[16.871, 9.945, 47.35]}
        rotation={[0.686, 0.417, 3.11]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01087_petal03_0'].geometry}
        material={materials.petal03}
        position={[22.214, -12.927, -17.556]}
        rotation={[-0.36, -1.262, 2.684]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01088_petal03_0'].geometry}
        material={materials.petal03}
        position={[-22.573, 45.736, 35.184]}
        rotation={[2.396, -0.296, 1.218]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02087_petal01_0'].geometry}
        material={materials.petal01}
        position={[43.661, 2, 0.311]}
        rotation={[0.05, -0.503, 1.505]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02088_petal01_0'].geometry}
        material={materials.petal01}
        position={[-31.712, 51.506, 0.552]}
        rotation={[2.056, 0.693, -1.735]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04045_petal02_0'].geometry}
        material={materials.petal02}
        position={[19.911, 61.975, 18.483]}
        rotation={[1.936, 0.254, 0.326]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01089_petal03_0'].geometry}
        material={materials.petal03}
        position={[2.472, 67.03, 1.09]}
        rotation={[-0.435, -0.057, 0.072]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01090_petal03_0'].geometry}
        material={materials.petal03}
        position={[35.406, 36.059, -22.01]}
        rotation={[2.32, -0.127, -3.038]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02089_petal01_0'].geometry}
        material={materials.petal01}
        position={[32.297, -4.449, 20.51]}
        rotation={[0.804, 0.873, 3.009]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02090_petal01_0'].geometry}
        material={materials.petal01}
        position={[18.277, 51.027, 33.549]}
        rotation={[-2.84, 0.291, -0.147]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04046_petal02_0'].geometry}
        material={materials.petal02}
        position={[-8.886, -16.188, 8]}
        rotation={[-2.882, -1.27, -0.71]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01091_petal03_0'].geometry}
        material={materials.petal03}
        position={[26.784, 42.85, 32.414]}
        rotation={[1.052, 0.506, 0.536]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01092_petal03_0'].geometry}
        material={materials.petal03}
        position={[-12.886, 54.439, -16.169]}
        rotation={[-1.571, -0.434, 0.65]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02091_petal01_0'].geometry}
        material={materials.petal01}
        position={[38.725, 43.106, 1.889]}
        rotation={[1.65, 0.954, -0.737]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02092_petal01_0'].geometry}
        material={materials.petal01}
        position={[-7.692, 19.576, 42.828]}
        rotation={[-2.701, 0.03, -1.669]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04047_petal02_0'].geometry}
        material={materials.petal02}
        position={[13.228, 5.155, -28.445]}
        rotation={[1.814, 0.639, -1.33]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01093_petal03_0'].geometry}
        material={materials.petal03}
        position={[5.8, -14.99, 0.714]}
        rotation={[-2.11, 0.989, 0.083]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01094_petal03_0'].geometry}
        material={materials.petal03}
        position={[22.267, -9.942, 3.233]}
        rotation={[-0.116, -0.286, 1.033]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02093_petal01_0'].geometry}
        material={materials.petal01}
        position={[36.538, 27.19, -13.458]}
        rotation={[0.851, -1.138, -2.589]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02094_petal01_0'].geometry}
        material={materials.petal01}
        position={[17.993, -6.016, 22.809]}
        rotation={[0.454, 1.432, -0.837]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04048_petal02_0'].geometry}
        material={materials.petal02}
        position={[-5.119, 5.65, -25.94]}
        rotation={[0.201, -0.596, 2.663]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01095_petal03_0'].geometry}
        material={materials.petal03}
        position={[0.545, 58.021, 13.783]}
        rotation={[-2.316, -0.255, 0.364]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01096_petal03_0'].geometry}
        material={materials.petal03}
        position={[-30.236, 20.013, 15.196]}
        rotation={[0.78, 0.303, -0.043]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02095_petal01_0'].geometry}
        material={materials.petal01}
        position={[-1.386, 56.866, -5.15]}
        rotation={[-1.96, 0.033, -1.235]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02096_petal01_0'].geometry}
        material={materials.petal01}
        position={[-21.495, 34.236, -17.067]}
        rotation={[1.029, 0.311, -1.403]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04049_petal02_0'].geometry}
        material={materials.petal02}
        position={[18.628, 53.484, 6.434]}
        rotation={[1.354, 0.843, 0.877]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01097_petal03_0'].geometry}
        material={materials.petal03}
        position={[6.411, 55.322, 13.709]}
        rotation={[2.655, -0.673, -2.315]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01098_petal03_0'].geometry}
        material={materials.petal03}
        position={[31.496, 38.262, 13.708]}
        rotation={[1.938, 1.258, -2.883]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02097_petal01_0'].geometry}
        material={materials.petal01}
        position={[16.314, -5.01, -5.264]}
        rotation={[0.289, 0.392, 2.556]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02098_petal01_0'].geometry}
        material={materials.petal01}
        position={[-11.261, 20.341, 33.022]}
        rotation={[1.913, 0.232, -1.922]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04050_petal02_0'].geometry}
        material={materials.petal02}
        position={[-10.202, 14.475, 31.015]}
        rotation={[-3.023, 0.155, 3.073]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01099_petal03_0'].geometry}
        material={materials.petal03}
        position={[16.619, 46.665, -10.622]}
        rotation={[-0.474, -0.452, 3.116]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01100_petal03_0'].geometry}
        material={materials.petal03}
        position={[-25.011, 27.147, -5.022]}
        rotation={[2.494, -0.403, -0.894]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02099_petal01_0'].geometry}
        material={materials.petal01}
        position={[22.574, 0.269, 2.475]}
        rotation={[-1.206, 1.401, -0.162]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02100_petal01_0'].geometry}
        material={materials.petal01}
        position={[16.203, 8.805, -17.892]}
        rotation={[-1.988, 0.35, 2.338]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04051_petal02_0'].geometry}
        material={materials.petal02}
        position={[5.192, 40.882, 26.996]}
        rotation={[-2.718, -0.555, -2.85]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01101_petal03_0'].geometry}
        material={materials.petal03}
        position={[9.703, -1.065, 17.161]}
        rotation={[-2.716, 0.723, 0.291]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01102_petal03_0'].geometry}
        material={materials.petal03}
        position={[-19.842, 10.413, 12.003]}
        rotation={[0.6, -0.984, 2.069]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02101_petal01_0'].geometry}
        material={materials.petal01}
        position={[2.573, 47.179, -8.918]}
        rotation={[2.061, -0.845, 0.018]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02102_petal01_0'].geometry}
        material={materials.petal01}
        position={[-15.747, 41.111, -1.959]}
        rotation={[-0.461, -1.519, -0.448]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04052_petal02_0'].geometry}
        material={materials.petal02}
        position={[-11.106, 40.403, -8.292]}
        rotation={[-2.002, -1.02, 1.536]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01103_petal03_0'].geometry}
        material={materials.petal03}
        position={[14.756, 16.093, -17.127]}
        rotation={[1.493, -0.136, 0.058]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01104_petal03_0'].geometry}
        material={materials.petal03}
        position={[-12.98, 6.883, -4.808]}
        rotation={[-2.334, -0.488, -0.449]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02103_petal01_0'].geometry}
        material={materials.petal01}
        position={[25.053, 16.967, -5.905]}
        rotation={[-2.658, -1.324, 2.638]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02104_petal01_0'].geometry}
        material={materials.petal01}
        position={[-6.799, 1.899, -0.75]}
        rotation={[2.633, -0.401, 2.775]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04053_petal02_0'].geometry}
        material={materials.petal02}
        position={[6.161, 21.215, 27.58]}
        rotation={[0.394, -0.643, 3.138]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01105_petal03_0'].geometry}
        material={materials.petal03}
        position={[-17.407, 29.332, -2.465]}
        rotation={[-2.771, 0.231, -1.236]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01106_petal03_0'].geometry}
        material={materials.petal03}
        position={[13.318, 3.867, 10.368]}
        rotation={[-0.989, -1.283, -2.297]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02105_petal01_0'].geometry}
        material={materials.petal01}
        position={[15.643, 33.911, -10.657]}
        rotation={[0.713, -0.286, 1.987]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02106_petal01_0'].geometry}
        material={materials.petal01}
        position={[22.374, 12.486, 3.302]}
        rotation={[-3.131, -1.038, 0.671]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04054_petal02_0'].geometry}
        material={materials.petal02}
        position={[6.191, 3.364, -0.061]}
        rotation={[0.316, 0.482, -1.673]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01107_petal03_0'].geometry}
        material={materials.petal03}
        position={[9.353, 33.641, -11.93]}
        rotation={[1.093, 1.331, -2.807]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01108_petal03_0'].geometry}
        material={materials.petal03}
        position={[13.187, 21.542, 21.878]}
        rotation={[1.468, 0.149, 2.379]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02107_petal01_0'].geometry}
        material={materials.petal01}
        position={[1.987, 7.805, 16.347]}
        rotation={[2.063, 1.078, -2.776]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02108_petal01_0'].geometry}
        material={materials.petal01}
        position={[-2.828, 26.054, 22.468]}
        rotation={[1.222, -0.053, 2.891]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04055_petal02_0'].geometry}
        material={materials.petal02}
        position={[18.94, 29.382, -2.685]}
        rotation={[-1.047, -0.399, -2.445]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01109_petal03_0'].geometry}
        material={materials.petal03}
        position={[4.908, 25.224, -12.917]}
        rotation={[-0.64, 0.738, -2.61]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01110_petal03_0'].geometry}
        material={materials.petal03}
        position={[4.51, 17.672, 20.895]}
        rotation={[-0.455, -0.161, -0.968]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02109_petal01_0'].geometry}
        material={materials.petal01}
        position={[9.321, 22.518, -11.325]}
        rotation={[1.843, 0.041, 2.39]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02110_petal01_0'].geometry}
        material={materials.petal01}
        position={[-0.971, 31.282, -9.219]}
        rotation={[-0.026, -0.256, 1.619]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04056_petal02_0'].geometry}
        material={materials.petal02}
        position={[2.431, 19.005, 19.327]}
        rotation={[0.517, -0.12, -2.478]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01111_petal03_0'].geometry}
        material={materials.petal03}
        position={[1.069, 8.719, 7.354]}
        rotation={[1.692, -0.147, -0.193]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01112_petal03_0'].geometry}
        material={materials.petal03}
        position={[-4.968, 25.617, -7.206]}
        rotation={[-1.743, 0.965, 0.885]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02111_petal01_0'].geometry}
        material={materials.petal01}
        position={[5.096, 16.723, 17.156]}
        rotation={[2.352, -0.808, -0.009]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02112_petal01_0'].geometry}
        material={materials.petal01}
        position={[1.892, 31.674, 15.668]}
        rotation={[-0.953, -1.04, 0.134]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04057_petal02_0'].geometry}
        material={materials.petal02}
        position={[2.99, 18.966, -7.467]}
        rotation={[1.422, -0.337, 3.102]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01113_petal03_0'].geometry}
        material={materials.petal03}
        position={[-3.898, 31.904, 9.832]}
        rotation={[1.608, -0.542, -2.173]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01114_petal03_0'].geometry}
        material={materials.petal03}
        position={[5.759, 11.816, 1.705]}
        rotation={[-0.07, -0.027, -1.723]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02113_petal01_0'].geometry}
        material={materials.petal01}
        position={[12.433, 30.258, 7.856]}
        rotation={[-1.549, 0.495, 0.356]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02114_petal01_0'].geometry}
        material={materials.petal01}
        position={[-0.97, 33.756, 5.566]}
        rotation={[0.248, 0.034, 1.731]}
        scale={7.815}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04_petal02_0'].geometry}
        material={materials.petal02}
        position={[-54.083, 98.832, 1.515]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={15.629}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01_petal03_0'].geometry}
        material={materials.petal03}
        position={[-40.249, 96.652, 1.133]}
        rotation={[-1.606, -0.68, -0.088]}
        scale={15.629}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02_petal01_0'].geometry}
        material={materials.petal01}
        position={[-70.816, 101.514, 1.302]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={15.629}
      />
    </group>
  )
}

useGLTF.preload('/assets/cherry_blossoms.glb')