// import React from "react";
// import { workExperience } from "@/data";
// import { Button } from "./ui/MovingBorders";

// const Experience = () => {
//   return (
//     <div id="certifications" className="py-20 w-full">
//       <h1 className="heading">
//         <span className="text-purple">Certifications</span>
//       </h1>

//       <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
//         {workExperience.map((card) => (
//           <Button
//             key={card.id}
//             //   random duration will be fun , I think , may be not
//             duration={Math.floor(Math.random() * 10000) + 10000}
//             borderRadius="1.75rem"
//             style={{
//               //   add these two
//               //   you can generate the color from here https://cssgradient.io/
//               background: "rgb(4,7,29)",
//               backgroundColor:
//                 "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//               // add this border radius to make it more rounded so that the moving border is more realistic
//               borderRadius: `calc(1.75rem* 0.96)`,
//             }}
//             // remove bg-white dark:bg-slate-900
//             className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
//           >
//             <div className="flex lg:flex-row flex-col items-center justify-center p-3 py-6 md:p-5 lg:p-10 gap-2">
//               <img
//                 src={card.thumbnail}
//                 alt={card.thumbnail}
//                 className="lg:w-32 md:w-20 w-16 rounded-full"
//               />
//               <div className="lg:ms-5 text-center lg:text-start">
//                 <h1 className="text-xl md:text-2xl font-bold">{card.title}</h1>
//                 <p className="text-white-100 mt-3 font-semibold">{card.desc}</p>
//               </div>
//             </div>
//           </Button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;
"use client";
import React from "react";
import { workExperience } from "@/data"; // assuming workExperience data is imported
import { Button } from "./ui/MovingBorders"; // assuming you have a Button component

const Experience = () => {
  return (
    <div id="certifications" className="py-20 w-full">
      <h1 className="heading text-3xl font-bold text-center">
        <span className="text-purple">Certifications</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              animation: "bgAnimation 5s ease-in-out infinite",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-white border-neutral-200" // Removed dark text and background
          >
            <div className="flex lg:flex-row flex-col items-center justify-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16 rounded-full"
              />
              <div className="lg:ms-5 text-center lg:text-start">
                <h1 className="text-xl md:text-2xl font-bold">{card.title}</h1>
                <p className="text-white mt-3 font-semibold">{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>

      {/* Add styles directly in the component using the <style> tag */}
      <style jsx global>{`
        /* Keyframes for background animation */
        @keyframes bgAnimation {
          0% {
            background: linear-gradient(90deg, rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%);
          }
          50% {
            background: linear-gradient(90deg, rgba(4, 7, 29, 0.8) 0%, rgba(12, 14, 35, 0.8) 100%);
          }
          100% {
            background: linear-gradient(90deg, rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%);
          }
        }

        /* Apply the background animation to the button */
        .moving-button {
          animation: bgAnimation 5s ease-in-out infinite;
        }

        /* Additional CSS for the button transition */
        button {
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Experience;
