import React, { useEffect, useRef } from 'react';

const AbstractBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 600; // Density of lines
    const flowFieldResolution = 20;
    let cols = 0;
    let rows = 0;
    let time = 0;

    class Particle {
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      history: {x: number, y: number}[];
      maxLength: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.speedX = 0;
        this.speedY = 0;
        this.history = [];
        this.maxLength = Math.random() * 20 + 10;
        // Subtle colors: mostly grays, occasional red hint
        this.color = Math.random() > 0.98 
          ? `rgba(220, 20, 20, ${Math.random() * 0.5})` 
          : `rgba(255, 255, 255, ${Math.random() * 0.05})`;
      }

      update(field: number[][]) {
        const xIndex = Math.floor(this.x / flowFieldResolution);
        const yIndex = Math.floor(this.y / flowFieldResolution);
        
        if (xIndex >= 0 && xIndex < cols && yIndex >= 0 && yIndex < rows) {
            const angle = field[xIndex][yIndex];
            this.speedX = Math.cos(angle);
            this.speedY = Math.sin(angle);
        }

        this.x += this.speedX * 0.5;
        this.y += this.speedY * 0.5;

        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > this.maxLength) {
          this.history.shift();
        }

        // Reset if out of bounds
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
           this.reset();
        }
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.history = [];
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        if (this.history.length > 0) {
            context.moveTo(this.history[0].x, this.history[0].y);
            for (let i = 1; i < this.history.length; i++) {
                context.lineTo(this.history[i].x, this.history[i].y);
            }
        }
        context.strokeStyle = this.color;
        context.lineWidth = 1;
        context.stroke();
      }
    }

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      cols = Math.floor(width / flowFieldResolution) + 1;
      rows = Math.floor(height / flowFieldResolution) + 1;

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      
      // Create flow field based on Simplex/Perlin-ish math (using sine waves for simplicity)
      const field: number[][] = [];
      time += 0.002;

      for (let x = 0; x < cols; x++) {
        field[x] = [];
        for (let y = 0; y < rows; y++) {
          // The "Flow" logic
          const angle = (Math.cos(x * 0.05 + time) + Math.sin(y * 0.05 + time)) * Math.PI;
          field[x][y] = angle;
        }
      }

      // Fade effect for trails
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)'; 
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.update(field);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', init);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none" 
      />
      {/* Heavy Grain Overlay for that "Film" look */}
      <div 
        className="fixed inset-0 z-[1] pointer-events-none opacity-[0.08] mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />
      {/* Radial Vignette */}
      <div className="fixed inset-0 pointer-events-none z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
    </>
  );
};

export default AbstractBackground;