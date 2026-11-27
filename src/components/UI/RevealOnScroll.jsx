import useInView from '../../hooks/useInView';

export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  threshold = 0.01,
  rootMargin = '0px',
  durationClass = 'duration-700',
  hiddenClass = 'opacity-0 translate-y-6',
}) {
  const [ref, isInView] = useInView({ threshold, rootMargin });

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all ${durationClass} ease-out transform ${
        isInView ? 'opacity-100 translate-y-0' : hiddenClass
      } ${className}`}
    >
      {children}
    </div>
  );
}
