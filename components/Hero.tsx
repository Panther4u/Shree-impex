// import { FaLocationArrow } from "react-icons/fa6";

// import MagicButton from "./MagicButton";
// import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";

// const Hero = () => {
//   return (
//     <div className="pb-20 pt-36" id="about">
//       {/**
//        *  UI: Spotlights
//        *  Link: https://ui.aceternity.com/components/spotlight
//        */}
//       <div>
//         <Spotlight
//           className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
//           fill="white"
//         />
//         <Spotlight
//           className="h-[50vh] w-[50vw] top-10 left-full"
//           fill="white"
//         />
//         <Spotlight className="left-80 top-28 h-[50vh] w-[50vw]" fill="white" />
//       </div>

//       {/**
//        *  UI: grid
//        *  change bg color to bg-black-100 and reduce grid color from
//        *  0.2 to 0.03
//        */}
//       <div
//         className="h-full w-full dark:bg-white-100 bg-white dark:bg-grid-white/[0.03] bg-grid-yellow-100/[0.2]
//        absolute top-0 left-0 flex items-center justify-center"
//       >
//         {/* Radial gradient for the container to give a faded look */}
//         <div
//           // chnage the bg to bg-black-100, so it matches the bg color and will blend in
//           className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
//          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
//         />
//       </div>

//       <div className="flex justify-center relative my-20 z-10">
//         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
//             Premium Home Textile Solutions
//           </p>

//           {/**
//            *  Link: https://ui.aceternity.com/components/text-generate-effect
//            *
//            *  change md:text-6xl, add more responsive code
//            */}
//           <TextGenerateEffect
//             words="Shree Amuthajothi Impex"
//             className="text-center text-[30px] md:text-5xl lg:text-6xl"
//           />

//           <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-1xl text-gray">
//             Thriving in this industry for over{" "}
//             <span className="text-purple font-semibold">30 years</span>, delivering excellence and trust.
//           </p>

//           <a href="#about">
//             <MagicButton
//               title="Show my work"
//               icon={<FaLocationArrow />}
//               position="right"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import { FaLocationArrow } from "react-icons/fa6";
// import MagicButton from "./MagicButton";
// import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";

// const Hero = () => {
//   return (
//     <div className="relative pb-20 pt-36 overflow-hidden" id="about">
//       {/* Background Image */}
//       <img
//         src="/bg.png"
//         alt="bgimg"
//         className="absolute inset-0 w-full h-full object-cover -z-10"
//       />

//       {/* Spotlights */}
//       <div>
//         <Spotlight
//           className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
//           fill="white"
//         />
//         <Spotlight
//           className="h-[50vh] w-[50vw] top-10 left-full"
//           fill="white"
//         />
//         <Spotlight className="left-80 top-28 h-[50vh] w-[50vw]" fill="white" />
//       </div>

//       {/* Grid Overlay */}
//       <div className="h-full w-full absolute top-0 left-0 flex items-center justify-center">
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center" />
//       </div>

//       {/* Content */}
//       <div className="flex justify-center relative my-20 z-10">
//         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
//             Premium Home Textile Solutions
//           </p>

//           <TextGenerateEffect
//             words="Shree Amuthajothi Impex" // Fixed the syntax error here
//             className="text-center text-[30px] md:text-5xl lg:text-6xl text-white"
//           />

//           <p className="text-white text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-1xl text-gray">
//             Thriving in this industry for over{" "}
//             <span className="text-purple font-semibold">30 years</span>, delivering excellence and trust.
//           </p>

//           <a href="#about">
//             <MagicButton
//               title="Show my work"
//               icon={<FaLocationArrow />}
//               position="right"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div
      className="relative pb-20 pt-36 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("/Company.png")' }} // Background Image applied here
      id="about"
    >
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-cover bg-center blur-[10px] z-0" style={{ backgroundImage: 'url("/Company.png")' }} />

      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[50vh] w-[50vw] top-10 left-full"
          fill="white"
        />
        <Spotlight className="left-80 top-28 h-[50vh] w-[50vw]" fill="white" />
      </div>

      {/* Grid Overlay */}
      <div className="h-full w-full absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center" />
      </div>

      {/* Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Premium Home Textile Solutions
          </p>

          <TextGenerateEffect
            words="Shree Amuthajothi Impex"
            className="text-center text-[30px] md:text-5xl lg:text-6xl text-white"
          />

          <p className="text-white text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-1xl text-gray">
            Thriving in this industry for over{" "}
            <span className="text-purple font-semibold">30 years</span>, delivering excellence and trust.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
