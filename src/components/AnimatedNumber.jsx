import { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';

export default function AnimatedNumber({
  end,
  duration = 1500,
  prefix = '',
  suffix = '',
  decimals = 0,
}) {
  const [value, setValue] = useState(0);
  const [ref, hasStarted] = useInView({ threshold: 0.2 });

  // Ejecuta el conteo suave (ease-out: arranca rápido y frena al final)
  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * end);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {decimals > 0 ? value.toFixed(decimals) : Math.round(value)}
      {suffix}
    </span>
  );
}