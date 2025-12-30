import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowBigDown, ArrowDown } from "lucide-react";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
      duration: 2,
    }).to(".vi-mask-group", {
      scale: 15,
      duration: 2,
      delay: -1.8,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;
    
    gsap.to('.main', {
      scale: 1, 
      rotate: 0,
      duration: 2,
      delay: '-1',
      ease: 'expo.inOut'
    })

    gsap.to('.sky', {
      scale: 1.1,
      rotate: 0,
      duration: 2, 
      delay: '-0.8',
      ease: 'expo.inOut'
    })

    gsap.to('.bg', {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: '-0.8',
      ease: 'ease.inOut'
    })

    gsap.to('.character', {
      scale: 0.9,
      x: "-50%",
      bottom: "-45%",
      rotate: 0,
      duration: 2,
      delay: '-0.8',
      ease: 'expo.inOut'
    })

    gsap.to('.text', {
      scale: 1.4, 
      rotate: 0,
      duration: 2,
      delay: '-0.8',
      ease: 'expo.inOut'
    })

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.3}%`,
      });
      gsap.to(".sky", {
        x: xMove * 0.5,
      });
      gsap.to(".bg", {
        x: xMove * 2.5,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg fixed top-0 left-0 z-2 w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full h-full rotate-10 scale-[1.7]">
          <div className="landing w-full h-screen overflow-hidden relative">
            <div className="navbar w-full py-10 px-10 absolute top-0 left-0 z-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-2">
                  <div className="line w-18 h-2 bg-white"></div>
                  <div className="line w-9 h-2 bg-white"></div>
                  <div className="line w-4 h-2 bg-white"></div>
                </div>
                <h3 className="text-3xl text-white -mt-3 leading-none">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className="imagesdiv w-full h-screen relative">
              <img
                className="w-full sky scale-[1.5] rotate-[-20deg]  h-full object-cover absolute top-0 left-0"
                src="./sky.png"
                alt=""
              />
              <img
                className="w-full bg scale-[1.8] -rotate-3 h-full object-cover absolute top-0 left-0"
                src="./bg.png"
                alt=""
              />
              <div className="text absolute flex flex-col gap-3 top-20 left-1/2 text-white text-8xl -translate-x-1/2 rotate-[-10deg] scale-[2]">
                <h1 className="leading-none -ml-5">grand</h1>
                <h1 className="leading-none ml-25">theft</h1>
                <h1 className="leading-none -ml-5">auto</h1>
              </div>
              <img
                className="absolute character -bottom-[45%] left-1/2 -translate-x-1/2 scale-[2.2] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar w-full p-10 text-white absolute bottom-0 left-0 bg-linear-to-t from-black to-transparent">
              <div className="flex items-center gap-4">
                <ArrowDown size={28} />
                <h1 className="text-xl font-[sans-serif]">Scroll Down</h1>
              </div>
              <img
                className="absolute h-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen bg-black pt-25 p-15">
            <div className="container flex text-white w-full h-[80%] pl-25">
              <div className="limg w-1/2 h-full relative">
                <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./imag.png" alt="" />
              </div>
              <div className="rtext flex flex-col w-1/4">
                <h1 className="text-5xl">Stay Grounded,</h1>
                <h1 className="text-5xl">run wild</h1>
                <p className="mt-10 font-[sans-serif] tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquam distinctio tempora sapiente dolorem corporis quod quidem, voluptatem, consequatur dolore exercitationem perspiciatis.</p>
                <p className="mt-8 font-[sans-serif] tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe eaque corporis, hic laborum molestiae quia laboriosam soluta voluptatibus qui suscipit quae harum iusto nam quis nihil doloribus aliquid velit possimus exercitationem ratione illum. Repellat consequatur voluptatibus natus repellendus perferendis. Quis quo quibusdam veritatis doloribus.</p>
                <button className="text-3xl mt-12 bg-yellow-400 text-black py-4">Download Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
