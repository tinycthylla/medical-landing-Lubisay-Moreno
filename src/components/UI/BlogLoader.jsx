import { useId } from 'react';

const HEART_PATH =
  'm282.86,33.62C264.39,8.77,232.04.78,204.79,15.91c-19.69,10.89-33.59,28.13-44.09,46.89-4.68-5.48-10-10.46-16.05-14.68-92.82-61.98-222.67,110.21-20.89,230.73,0,0,2.7-4.02,2.7-4.02-25.37-19.01-49.16-41.2-66.44-67.66-16.37-25.03-26.72-55.84-20.44-85.16,12.96-59.82,83.78-83.57,106.73-15.35,0,0,14.33,40.45,14.33,40.45,15.61-30.83,29.95-78.59,62.38-94.02,16.76-7.58,25.19,10.83,27.86,25.64,2.56,13.87,2,29.93-.55,46.07-11.96,71.19-54.63,132.95-95.12,191.77,0,0,3.34,3.51,3.34,3.51,49.9-31.42,92.33-75.05,119.83-127.78,24.4-47.57,38.62-111.32,4.5-158.69Z';

const GUIDE_PATH =
  'm126.46,274.83C68.43,241.01-18.88,121.09,68.47,60.92c57.78-29.82,72.24,24.23,91.91,50.56,8.92-36.8,56.69-103.49,99.8-71.58,11.42,8.46,18.73,21.32,20.91,35.36,11.37,73.22-65.96,199.66-124.21,243.09';

export default function BlogLoader({ text = 'Cargando artículos...' }) {
  const maskId = useId();

  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center gap-4"
    >
      <svg
        viewBox="0 0 313.72 343.6"
        className="w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-80 lg:h-80"
        aria-hidden="true"
      >
        <defs>
          <mask
            id={maskId}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="313.72"
            height="343.6"
          >
            <path
              d={GUIDE_PATH}
              pathLength="1"
              fill="none"
              stroke="#ffffff"
              strokeWidth="72"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="heart-guide-path"
            />
          </mask>
        </defs>

        {/* Silueta base suave */}
        <path
          d={HEART_PATH}
          fill="currentColor"
          className="text-brand-pink/20"
        />

        {/* Corazón relleno que se va destapando */}
        <path
          d={HEART_PATH}
          fill="currentColor"
          className="text-brand-pink"
          mask={`url(#${maskId})`}
        />
      </svg>

      {text && (
        <p className="text-sm text-brand-purple font-medium">
          {text}
        </p>
      )}
    </div>
  );
}