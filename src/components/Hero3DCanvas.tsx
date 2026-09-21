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

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 45;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all rotating objects
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // 1. Particle Constellation (representing data nodes in ETL pipelines)
    const particleCount = 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Blue, Cyan, Indigo and Emerald enterprise color palette
    const isLightMode = document.documentElement.classList.contains('light');
    const colorPalette = isLightMode
      ? [
          new THREE.Color('#0284c7'), // Deep Sky
          new THREE.Color('#4f46e5'), // Indigo
          new THREE.Color('#2563eb'), // Blue
          new THREE.Color('#059669'), // Emerald
          new THREE.Color('#7c3aed'), // Purple
        ]
      : [
          new THREE.Color('#38bdf8'), // Cyan / Sky
          new THREE.Color('#818cf8'), // Indigo
          new THREE.Color('#60a5fa'), // Blue
          new THREE.Color('#34d399'), // Emerald (data flow)
          new THREE.Color('#c084fc'), // Purple
        ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 80;
      positions[i3 + 1] = (Math.random() - 0.5) * 60;
      positions[i3 + 2] = (Math.random() - 0.5) * 35;

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      transparent: true,
      opacity: isLightMode ? 0.45 : 0.75,
      blending: isLightMode ? THREE.NormalBlending : THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    networkGroup.add(particles);

    // 2. Subtle Interconnecting Data Stream Pipeline Lines (DAG Architecture)
    const lineIndices: number[] = [];
    const maxDistance = 18;
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < maxDistance) {
          lineIndices.push(i, j);
        }
      }
    }

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    linesGeometry.setIndex(lineIndices);

    const linesMaterial = new THREE.LineBasicMaterial({
      color: isLightMode ? 0x6366f1 : 0x818cf8,
      transparent: true,
      opacity: isLightMode ? 0.12 : 0.22,
      blending: isLightMode ? THREE.NormalBlending : THREE.AdditiveBlending,
    });

    const lineMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    networkGroup.add(lineMesh);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isLightMode ? 0.9 : 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x6366f1, isLightMode ? 1.2 : 2, 100);
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x38bdf8, isLightMode ? 1.2 : 2, 100);
    pointLight2.position.set(-20, -20, 10);
    scene.add(pointLight2);

    // Mouse Tracking for Interactive 3D Parallax
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

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      networkGroup.rotation.y = elapsedTime * 0.04 + targetX * 0.25;
      networkGroup.rotation.x = Math.sin(elapsedTime * 0.03) * 0.05 + targetY * 0.2;

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
      geometry.dispose();
      particleMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      renderer.dispose();
    };
  }, [interactive]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-60"
      aria-hidden="true"
    />
  );
};
