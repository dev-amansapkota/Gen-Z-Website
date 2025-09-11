// "use client";

// import { useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import type { Engine } from "@tsparticles/engine";
// import { loadSlim } from "@tsparticles/slim";

// export default function ParticlesBackground() {
//   const [init, setInit] = useState(false);

//   // Run engine init once per app lifetime (not per component)
//   useEffect(() => {
//     initParticlesEngine(async (engine: Engine) => {
//       // Load slim bundle once here
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   // Don't render until init is done to avoid hydration issues in Next.js
//   if (!init) {
//     return null;
//   }

//   return (
//     <Particles
//       id="tsparticles"
//       options={{
//         fullScreen: { enable: true, zIndex: 0 },
//         background: {
//           color: { value: "#000000" },
//         },
//         fpsLimit: 60,
//         interactivity: {
//           events: { onHover: { enable: true, mode: "repulse" } },
//           modes: { repulse: { distance: 100, duration: 0.4 } },
//         },
//         particles: {
//           number: { value: 50, density: { enable: true, area: 800 } },
//           color: { value: "#ffffff" },
//           shape: { type: "circle" },
//           opacity: { value: 0.5 },
//           size: { value: { min: 1, max: 5 } },
//           links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4 },
//           move: { enable: true, speed: 2, outModes: { default: "out" } },
//         },
//       }}
//     />
//   );
// }