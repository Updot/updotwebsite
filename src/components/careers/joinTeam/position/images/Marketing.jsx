import React, { useEffect, useRef } from "react";

const Marketing = () => {
  const r1 = useRef(null);
  const r2 = useRef(null);
  const r3 = useRef(null);
  const r4 = useRef(null);
  const r5 = useRef(null);
  useEffect(() => {
    r1.current.style.transition = `all .5s ease-in-out`;
    r2.current.style.transition = `all .5s ease-in-out`;
    r3.current.style.transition = `all .5s ease-in-out`;
    r4.current.style.transition = `all .5s ease-in-out`;
    r5.current.style.transition = `all .5s ease-in-out`;
    const interval = setInterval(() => {
      const y1 = Math.random() * 100;
      const y2 = Math.random() * 100;
      const y3 = Math.random() * 100;
      const y4 = Math.random() * 100;
      const y5 = Math.random() * 100;
      r1.current.style.height = `${y1}px`;
      r2.current.style.height = `${y2}px`;
      r3.current.style.height = `${y3}px`;
      r4.current.style.height = `${y4}px`;
      r5.current.style.height = `${y5}px`;
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <svg
        style={{ height: "100%", width: "100%" }}
        viewBox="0 0 348 346"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path d="M179.001 253H170.001V296H179.001V253Z" fill="white" />
          <path
            d="M0.000976562 257V225.934H15.048V40.476H0.000976562V9.413H165.537V0H183.406V9.413H348.001V40.476H332.951V225.934H348.001V257H0.000976562Z"
            fill="white"
          />
          <path
            d="M226.979 335.639C226.975 333.078 227.924 330.607 229.641 328.707L174.707 260.867L180.064 256.53L235.83 325.391C237.921 325.083 240.056 325.422 241.949 326.363C243.842 327.303 245.402 328.8 246.419 330.653C247.437 332.505 247.863 334.624 247.642 336.726C247.42 338.828 246.561 340.812 245.18 342.412C243.798 344.011 241.961 345.15 239.913 345.676C237.866 346.201 235.707 346.087 233.726 345.35C231.745 344.613 230.037 343.288 228.831 341.552C227.625 339.817 226.979 337.754 226.979 335.64V335.639ZM101.344 335.639C101.345 334.123 101.679 332.625 102.321 331.252C102.964 329.879 103.9 328.663 105.063 327.691C106.226 326.718 107.588 326.013 109.053 325.624C110.519 325.235 112.052 325.172 113.544 325.439L169.344 256.53L174.704 260.867L119.594 328.93C120.675 330.201 121.434 331.714 121.805 333.341C122.176 334.968 122.148 336.661 121.724 338.275C121.301 339.889 120.493 341.376 119.371 342.611C118.249 343.846 116.845 344.792 115.279 345.368C113.712 345.944 112.03 346.132 110.375 345.918C108.72 345.704 107.142 345.094 105.773 344.139C104.405 343.183 103.288 341.912 102.517 340.432C101.745 338.952 101.343 337.308 101.344 335.639V335.639Z"
            fill="white"
          />
          <rect
            ref={r1}
            x="97"
            y="205"
            width="29"
            height="52"
            transform="rotate(-180 97 205)"
            fill="black"
          />
          <rect
            ref={r2}
            x="143"
            y="205"
            width="29"
            height="76"
            transform="rotate(-180 143 205)"
            fill="black"
          />
          <rect
            ref={r3}
            x="189"
            y="205"
            width="29"
            height="107"
            transform="rotate(-180 189 205)"
            fill="black"
          />
          <rect
            ref={r4}
            x="235"
            y="205"
            width="29"
            height="90"
            transform="rotate(-180 235 205)"
            fill="black"
          />
          <rect
            ref={r5}
            x="282"
            y="205"
            width="30"
            height="126"
            transform="rotate(-180 282 205)"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="348" height="346" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Marketing;
