import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  interactive?: boolean;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ interactive = true }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    // Initial camera position for opening fly-in effect
    camera.position.set(0, 0, 68);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Master 3D Group
    const masterGroup = new THREE.Group();
    masterGroup.position.set(12, 2, 0); // Position slightly towards the right to complement left text
    scene.add(masterGroup);

    const isLightMode = document.documentElement.classList.contains('light');

    // 1. Central Geodesic Data Sphere (Icosahedron wireframe)
    const coreGeometry = new THREE.IcosahedronGeometry(11, 2);
    const coreWireframeMat = new THREE.MeshBasicMaterial({
      color: isLightMode ? 0x4f46e5 : 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: isLightMode ? 0.25 : 0.45,
      blending: isLightMode ? THREE.NormalBlending : THREE.AdditiveBlending,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreWireframeMat);
    masterGroup.add(coreMesh);

    // Inner Glowing Core Sphere
    const innerSphereGeo = new THREE.SphereGeometry(6, 24, 24);
    const innerSphereMat = new THREE.MeshBasicMaterial({
      color: isLightMode ? 0x0284c7 : 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: isLightMode ? 0.2 : 0.35,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    masterGroup.add(innerSphere);

    // 2. Vertex Glow Points on Core
    const vertexPointsGeo = new THREE.BufferGeometry();
    const corePositions = coreGeometry.attributes.position.array;
    vertexPointsGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(corePositions), 3));

    const vertexPointsMat = new THREE.PointsMaterial({
      color: isLightMode ? 0x0284c7 : 0x38bdf8,
      size: 1.8,
      transparent: true,
      opacity: isLightMode ? 0.6 : 0.85,
      blending: isLightMode ? THREE.NormalBlending : THREE.AdditiveBlending,
    });
    const vertexPoints = new THREE.Points(vertexPointsGeo, vertexPointsMat);
    masterGroup.add(vertexPoints);

    // 3. Orbital Gyro Rings
    const ring1Geo = new THREE.TorusGeometry(17, 0.12, 16, 120);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: isLightMode ? 0x2563eb : 0x38bdf8,
      transparent: true,
      opacity: isLightMode ? 0.3 : 0.5,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    masterGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(22, 0.09, 16, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: isLightMode ? 0x7c3aed : 0x818cf8,
      transparent: true,
      opacity: isLightMode ? 0.25 : 0.45,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 5;
    masterGroup.add(ring2);

    // 4. Ambient Data Stream Particles & Constellation
    const particleCount = 200;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorTokens = isLightMode
      ? [new THREE.Color('#0284c7'), new THREE.Color('#4f46e5'), new THREE.Color('#059669')]
      : [new THREE.Color('#38bdf8'), new THREE.Color('#818cf8'), new THREE.Color('#34d399'), new THREE.Color('#c084fc')];

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      particlePositions[idx] = (Math.random() - 0.5) * 110;
      particlePositions[idx + 1] = (Math.random() - 0.5) * 80;
      particlePositions[idx + 2] = (Math.random() - 0.5) * 50;

      const col = colorTokens[Math.floor(Math.random() * colorTokens.length)];
      particleColors[idx] = col.r;
      particleColors[idx + 1] = col.g;
      particleColors[idx + 2] = col.b;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: isLightMode ? 0.55 : 0.8,
      blending: isLightMode ? THREE.NormalBlending : THREE.AdditiveBlending,
    });
    const particleCloud = new THREE.Points(particlesGeo, particlesMat);
    masterGroup.add(particleCloud);

    // 5. Constellation Lines
    const lineIndices: number[] = [];
    const maxDist = 16;
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = particlePositions[i * 3] - particlePositions[j * 3];
        const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
        const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < maxDist) {
          lineIndices.push(i, j);
        }
      }
    }

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    linesGeo.setIndex(lineIndices);

    const linesMat = new THREE.LineBasicMaterial({
      color: isLightMode ? 0x6366f1 : 0x818cf8,
      transparent: true,
      opacity: isLightMode ? 0.12 : 0.22,
      blending: isLightMode ? THREE.NormalBlending : THREE.AdditiveBlending,
    });
    const constellation = new THREE.LineSegments(linesGeo, linesMat);
    masterGroup.add(constellation);

    // 6. Floating Data Nodes (Small Polyhedra orbiting)
    const floatingNodes: THREE.Mesh[] = [];
    const nodeGeometry = new THREE.TetrahedronGeometry(1.2, 0);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });

    for (let i = 0; i < 6; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      const angle = (i / 6) * Math.PI * 2;
      const radius = 26 + (i % 2) * 5;
      node.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 16,
        Math.sin(angle) * radius
      );
      masterGroup.add(node);
      floatingNodes.push(node);
    }

    // 7. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x06b6d4, 2.5, 80);
    pointLight.position.set(15, 10, 20);
    scene.add(pointLight);

    // Mouse Tracking with smooth damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      // Adjust masterGroup offset based on viewport width
      if (width < 1024) {
        masterGroup.position.set(0, 0, 0);
      } else {
        masterGroup.position.set(12, 2, 0);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    handleResize();

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth camera opening fly-in effect from z=68 to z=40
      camera.position.z += (40 - camera.position.z) * 0.035;

      // Mouse Parallax interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Core rotations
      coreMesh.rotation.y = elapsed * 0.12;
      coreMesh.rotation.x = elapsed * 0.08;

      innerSphere.rotation.y = -elapsed * 0.15;
      innerSphere.rotation.z = elapsed * 0.09;

      vertexPoints.rotation.y = elapsed * 0.12;
      vertexPoints.rotation.x = elapsed * 0.08;

      // Orbital Rings rotations
      ring1.rotation.z = elapsed * 0.2;
      ring1.rotation.y = elapsed * 0.15;

      ring2.rotation.x = -elapsed * 0.18;
      ring2.rotation.z = elapsed * 0.12;

      // Master Group orientation reaction to cursor
      masterGroup.rotation.y = targetX * 0.35 + Math.sin(elapsed * 0.2) * 0.05;
      masterGroup.rotation.x = -targetY * 0.25 + Math.cos(elapsed * 0.15) * 0.04;

      // Orbiting small data nodes
      floatingNodes.forEach((node, i) => {
        const speed = 0.3 + i * 0.05;
        const angle = elapsed * speed + (i / floatingNodes.length) * Math.PI * 2;
        const radius = 25 + (i % 2) * 4;
        node.position.x = Math.cos(angle) * radius;
        node.position.z = Math.sin(angle) * radius;
        node.position.y = Math.sin(elapsed * 1.2 + i) * 6;
        node.rotation.x += 0.02;
        node.rotation.y += 0.03;
      });

      // Point light tracks mouse slightly
      pointLight.position.x = 15 + targetX * 15;
      pointLight.position.y = 10 + targetY * 15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coreGeometry.dispose();
      coreWireframeMat.dispose();
      innerSphereGeo.dispose();
      innerSphereMat.dispose();
      vertexPointsGeo.dispose();
      vertexPointsMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      linesGeo.dispose();
      linesMat.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      renderer.dispose();
    };
  }, [interactive]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
