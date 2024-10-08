import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ErrorPage404() {
  const spinnerRef = useRef(null);

  useEffect(() => {
    const updateAngle = (e) => {
      if (!spinnerRef.current) return;
      const box = spinnerRef.current;
      const boxRect = box.getBoundingClientRect();
      const boxCenter = [
        boxRect.left + boxRect.width / 2,
        boxRect.top + boxRect.height / 2,
      ];
      const angle =
        Math.atan2(e.pageX - boxCenter[0], -(e.pageY - boxCenter[1])) *
        (180 / Math.PI);
      box.style.transform = `rotate(${angle}deg)`;
    };

    document.addEventListener('mousemove', updateAngle);
    return () => {
      document.removeEventListener('mousemove', updateAngle);
    };
  }, []);

  return (
    <>
    <main className='homeFlex diff'>
      <div className="message">
        <h1>You are lost.</h1>
        <Link to="/" className="button btn-effect">
          <span>Go Home</span>
          <span>
            <i className="icon icon-arrow-right"></i>
          </span>
        </Link>
      </div>
      <div className="compass-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 288 288"
          ref={spinnerRef}
        >
          <title>compass_vector</title>
          <g id="Base">
            <line
              x1="51.25"
              y1="42.75"
              x2="243"
              y2="242"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: 10,
                strokeWidth: '0.5px',
                strokeDasharray: '12.002400398254395',
              }}
            />
            <line
              x1="43.75"
              y1="239.75"
              x2="243.5"
              y2="47.5"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: 10,
                strokeWidth: '0.5px',
                strokeDasharray: '12.002400398254395',
              }}
            />
            <line
              x1="142.33"
              y1="211.33"
              x2="144.92"
              y2="75.92"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: 10,
                strokeWidth: '0.5px',
                strokeDasharray: '12.002400398254395',
              }}
            />
            <line
              x1="209.12"
              y1="144.88"
              x2="78.13"
              y2="142.37"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: 10,
                strokeWidth: '0.5px',
                strokeDasharray: '12.002400398254395',
              }}
            />
            <path
              d="M432,153a135,135,0,1,1-95.46,39.54A134.11,134.11,0,0,1,432,153m0-9A144,144,0,1,0,576,288,144,144,0,0,0,432,144Z"
              transform="translate(-288 -144)"
            />
            <path
              d="M432,168.5A119.5,119.5,0,1,1,312.5,288,119.64,119.64,0,0,1,432,168.5m0-1.5A121,121,0,1,0,553,288,121.14,121.14,0,0,0,432,167Z"
              transform="translate(-288 -144)"
            />
            <polygon points="8.58 137.48 23.74 144.02 8.58 150.56 8.58 137.48" />
            <polygon points="137.77 280.33 144.31 265.17 150.85 280.33 137.77 280.33" />
            <polygon points="150.85 7.71 144.31 22.87 137.77 7.71 150.85 7.71" />
            <polygon points="279.62 150.56 264.46 144.02 279.62 137.48 279.62 150.56" />
            <path
              d="M323.51,278.81a.68.68,0,0,1,.74-.9h3.24a.81.81,0,0,1,.9.71L329.94,290c.06.28.28.28.33,0l1.83-11.36a.82.82,0,0,1,.9-.71h2.34a.83.83,0,0,1,.9.71L338.06,290c.06.28.27.28.33,0l1.55-11.36a.82.82,0,0,1,.9-.71h3.24a.68.68,0,0,1,.74.9l-3.35,17.47a.83.83,0,0,1-.9.71h-3.84a.85.85,0,0,1-.9-.71l-1.5-6.7c-.05-.28-.27-.28-.33,0l-1.5,6.7a.83.83,0,0,1-.89.71h-3.85a.82.82,0,0,1-.89-.71Z"
              transform="translate(-288 -144)"
            />
            <path
              d="M429.57,181.91a1,1,0,0,1,1,.63l3.7,9.07c.11.25.33.19.33-.08v-8.8a.74.74,0,0,1,.82-.82h3.05a.72.72,0,0,1,.81.82v17.44a.73.73,0,0,1-.81.82h-4a1,1,0,0,1-.95-.63l-3.71-9.07c-.11-.25-.32-.19-.32.08v8.8a.74.74,0,0,1-.82.82h-3.05a.75.75,0,0,1-.82-.82V182.73a.74.74,0,0,1,.82-.82Z"
              transform="translate(-288 -144)"
            />
            <path
              d="M435.66,381.67c-.54.11-.81-.13-.9-.68a2.21,2.21,0,0,0-2.37-1.82c-1.06,0-1.71.62-1.6,1.25.38,2.12,9,2.07,9,8.33,0,.82-.93,5.64-7.39,5.64-5.72,0-6.94-3.76-7.08-5.88a.8.8,0,0,1,.71-.9l3.08-.68c.54-.11.84.14.9.71a2.23,2.23,0,0,0,2.39,2.07c1.34,0,2.32-.79,2.16-1.53-.52-2.31-8.72-1.8-8.72-8.06,0-.82.46-5.64,6.56-5.64,5.62,0,6.92,3.65,7.09,5.61a.81.81,0,0,1-.71.9Z"
              transform="translate(-288 -144)"
            />
            <path
              d="M534.18,277.91a.73.73,0,0,1,.82.82v3a.73.73,0,0,1-.82.82h-6.59a.73.73,0,0,0-.82.82v.87a.75.75,0,0,0,.82.82h4.22a.72.72,0,0,1,.82.82V289a.73.73,0,0,1-.82.81h-4.22a.74.74,0,0,0-.82.82v.87a.75.75,0,0,0,.82.82h6.59a.72.72,0,0,1,.82.82v3.05a.73.73,0,0,1-.82.82H522.74a.75.75,0,0,1-.82-.82V278.73a.74.74,0,0,1,.82-.82Z"
              transform="translate(-288 -144)"
            />
            <circle
              cx="144"
              cy="144"
              r="74.5"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: 10,
              }}
            />
          </g>
          <g id="Spinner">
            <g>
              <g>
                <polygon points="164.15 144.12 144.31 190.1 124.47 144.12 164.15 144.12" />
                <g>
                  <polygon
                    points="125.23 143.49 144.31 99.26 163.39 143.49 125.23 143.49"
                    style={{ fill: '#fff' }}
                  />
                  <path
                    d="M432.31,244.52,450.63,287H414l18.32-42.47m0-2.52-19.84,46h39.68l-19.84-46Z"
                    transform="translate(-288 -144)"
                  />
                </g>
              </g>
              <g>
                <circle
                  cx="144"
                  cy="144"
                  r="8"
                  style={{ fill: '#fff', stroke: '#000', strokeMiterlimit: 10 }}
                />
                <circle cx="144" cy="144" r="5.33" />
              </g>
            </g>
          </g>
        </svg>
      </div>
      </main>
    </>
  );
}

export default ErrorPage404;
