'use client';
import bgElementFixedAtom from '@/store/bgCircleFollow.atom';
import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';

const BgCanvasBlur = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([
    {
      x: 0,
      y: 0,
      radius: 260,
      color: 'rgba(0, 89, 143, 0.80)',
      vx: 0,
      vy: 0,
      idleOffsetX: 0,
      idleOffsetY: 0,
      idleAngle: -0.1,
    },
    {
      x: 0,
      y: 0,
      radius: 360,
      color: 'rgba(0, 89, 143, 0.30)',
      vx: 0,
      vy: 0,
      idleOffsetX: -50,
      idleOffsetY: 0,
      idleAngle: -0.1,
    },
    {
      x: 0,
      y: 0,
      radius: 660,
      color: 'rgba(0, 89, 143, 0.10)',
      vx: 0,
      vy: 0,
      idleOffsetX: 0,
      idleOffsetY: 40,
      idleAngle: 0.3,
    },
  ]);
  const lastMouseMoveTime = useRef(Date.now());
  const idleTimeRef = useRef(0);

  const [positionFixedToElement] = useAtom(bgElementFixedAtom);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const circles = circlesRef.current;
    circles.forEach((circle) => {
      circle.x = window.innerWidth / 2;
      circle.y = window.innerHeight / 2;
    });

    const handleMouseMove = (event: MouseEvent) => {
      if (positionFixedToElement) {
        const element = document.querySelector(positionFixedToElement);
        const rect = element?.getBoundingClientRect();
        if (!rect) return;
        //get center of rect
        const center = {
          x: rect?.left + rect?.width / 2,
          y: rect?.top + rect?.height / 2,
        };

        if (!rect) return;
        mouseRef.current = {
          x: center.x,
          y: center.y,
        };
        lastMouseMoveTime.current = Date.now();
        idleTimeRef.current = 0;
      } else {
        mouseRef.current = { x: event.clientX, y: event.clientY };
        lastMouseMoveTime.current = Date.now();
        idleTimeRef.current = 0;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = 'blur(80px)';
      ctx.globalAlpha = 0.6;

      const currentTime = Date.now();
      const timeSinceLastMove = currentTime - lastMouseMoveTime.current;
      const mouse = mouseRef.current;

      // Incrementar tiempo de inactividad
      if (timeSinceLastMove > 1000) {
        idleTimeRef.current += 16; // Incremento por frame
      }

      circles.forEach((circle, index) => {
        const isIdle = timeSinceLastMove > 1000;

        // Movimiento base
        const dx = mouse.x - circle.x;
        const dy = mouse.y - circle.y;

        const damping = isIdle ? 0.05 : 0.1;
        const maxSpeed = 5;

        circle.vx = dx * damping;
        circle.vy = dy * damping;

        const speed = Math.sqrt(circle.vx * circle.vx + circle.vy * circle.vy);
        if (speed > maxSpeed) {
          circle.vx = (circle.vx / speed) * maxSpeed;
          circle.vy = (circle.vy / speed) * maxSpeed;
        }

        // Aplicar movimiento

        circle.x += circle.vx;
        circle.y += circle.vy;

        circle.idleAngle += 0.01 * (index + 1);
        circle.idleOffsetX = Math.sin(circle.idleAngle) * 3;
        circle.idleOffsetY = Math.cos(circle.idleAngle) * 3;
        circle.x += (circle.vx * 0.7 + circle.idleOffsetX) / 2;
        circle.y += (circle.vy * 0.7 + circle.idleOffsetY) / 2;

        // Dibujar círculo
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [positionFixedToElement]);

  return (
    <canvas
      style={{
        position: 'fixed',
        top: '-5%',
        left: '-5%',
        zIndex: -1,
        width: '105%',
        height: '105%',
        filter: 'blur(12px)',
      }}
      ref={canvasRef}
      data-name="bg-canvas-blur"
    ></canvas>
  );
};

export default BgCanvasBlur;
