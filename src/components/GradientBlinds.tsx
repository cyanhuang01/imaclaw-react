import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';
import './GradientBlinds.css';

const hexToRGB = (hex: string): number[] => {
  const c = hex.replace('#', '').padEnd(6, '0');
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  return [r, g, b];
};

interface GradientBlindsProps {
  className?: string;
  dpr?: number;
  paused?: boolean;
  gradientColors?: string[];
  angle?: number;
  noise?: number;
  blindCount?: number;
}

const GradientBlinds: React.FC<GradientBlindsProps> = ({
  className = '',
  dpr,
  paused = false,
  gradientColors = ['#FF9FFC', '#5227FF'],
  angle = 0,
  noise = 0.3,
  blindCount = 16,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const programRef = useRef<any>(null);
  const meshRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      dpr: dpr ?? (typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1),
      alpha: true,
      antialias: true
    });
    rendererRef.current = renderer;
    const gl = renderer.gl;
    const canvas = gl.canvas as HTMLCanvasElement;

    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    container.appendChild(canvas);

    const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision mediump float;
      uniform vec3 iResolution;
      uniform float iTime;
      uniform vec3 uColor0;
      uniform vec3 uColor1;
      uniform float uBlindCount;
      uniform float uNoise;
      varying vec2 vUv;

      float rand(vec2 co){
        return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453);
      }

      void main() {
        vec2 uv = vUv;
        float t = uv.x;
        vec3 base = mix(uColor0, uColor1, t);
        float stripe = fract(uv.x * uBlindCount);
        vec3 ran = vec3(stripe);
        vec3 col = base - ran * 0.5;
        col += (rand(gl_FragCoord.xy + iTime) - 0.5) * uNoise;
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const color0 = hexToRGB(gradientColors[0] || '#FF9FFC');
    const color1 = hexToRGB(gradientColors[1] || '#5227FF');

    const uniforms = {
      iResolution: { value: [gl.drawingBufferWidth, gl.drawingBufferHeight, 1] },
      iTime: { value: 0 },
      uColor0: { value: color0 },
      uColor1: { value: color1 },
      uBlindCount: { value: Math.max(1, blindCount) },
      uNoise: { value: noise },
    };

    const program = new Program(gl, { vertex: vertexShader, fragment: fragmentShader, uniforms });
    programRef.current = program;

    const geometry = new Triangle(gl);
    const mesh = new Mesh(gl, { geometry, program });
    meshRef.current = mesh;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      uniforms.iResolution.value = [gl.drawingBufferWidth, gl.drawingBufferHeight, 1];
    };

    resize();
    window.addEventListener('resize', resize);

    const loop = (t: number) => {
      rafRef.current = requestAnimationFrame(loop);
      uniforms.iTime.value = t * 0.001;
      if (!paused && meshRef.current) {
        renderer.render({ scene: meshRef.current });
      }
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      if (canvas.parentElement === container) {
        container.removeChild(canvas);
      }
    };
  }, [dpr, paused, gradientColors, angle, noise, blindCount]);

  return <div ref={containerRef} className={`gradient-blinds-container ${className}`} style={{ width: '100%', height: '100%' }} />;
};

export default GradientBlinds;
