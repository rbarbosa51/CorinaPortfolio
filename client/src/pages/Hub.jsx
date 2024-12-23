import { Canvas } from "@react-three/fiber";
import { Scene } from "../components";
import { useState, useEffect, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { storeCameraState, cameraPosition } from "../store";
import {SceneLoading} from './'

export default function Hub() {
  const audioRef = useRef(new Audio("/music/ambient1.mp3"));
  const dialogRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [_, setCameraState] = useAtom(storeCameraState);

  useEffect(() => {
    if (!isPlaying) return;
    audioRef.current.play();
    return () => audioRef.current.pause();
  }, [isPlaying]);

  const variants = {
    open: {
      clipPath: `circle(2500px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        mass: 75,
      },
    },
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <div className="relative h-screen w-full bg-black">
      <Canvas shadows camera={{ position: [0, 3, 5], fov: 35 }}>
        <Suspense fallback={<SceneLoading />}>
          <Scene />
        </Suspense>
      </Canvas>
      <div className="absolute left-1/2 top-1/2 z-50 hidden w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#60a6fb] p-4 text-white portrait:block pointer-events-none">
        <h2 className="text-center text-4xl">Warning</h2>
        <p className="p-4 text-center text-2xl">
          Please view in landscape mode
        </p>
      </div>
      <button
        className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer rounded-2xl border-black bg-white bg-opacity-90 px-4 py-2 text-center hover:bg-slate-300"
        onClick={() => {
          setCameraState((prev) =>
            prev === Object.keys(cameraPosition).length - 1 ? 0 : prev + 1,
          );
        }}
      >
        Next
      </button>
      {/* Navbar */}
      <motion.nav
        className="absolute bottom-0 left-0 top-0 flex w-80 flex-col items-center border-r border-black/50 bg-white bg-opacity-90"
        initial={"closed"}
        variants={variants}
        animate={menuOpen ? "open" : "closed"}
      >
        <img
          className="absolute left-[30px] top-[30px] scale-150 cursor-pointer select-none"
          src="/images/menu.svg"
          alt=""
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {/* Music Button */}
        <div
          className="absolute top-[20%] flex flex-col items-center justify-center rounded-2xl p-4 pb-2 hover:bg-slate-300/50"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <div
            className={` ${isPlaying ? "bg-pause" : "bg-volume"} cursor-pointer rounded-lg border border-slate-600 bg-cover bg-center p-8`}
          ></div>
          <div>{isPlaying ? "Stop" : "Ambient"}</div>
        </div>
        {/* Share Button */}
        <div
          className="absolute top-[50%] flex flex-col items-center justify-center rounded-2xl p-4 pb-2 hover:bg-slate-300/50"
          onClick={() => dialogRef.current.showModal()}
        >
          <div
            className={`cursor-pointer rounded-lg border border-slate-600 bg-share bg-cover bg-center p-8`}
          ></div>
          <div>Share</div>
        </div>
      </motion.nav>
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box">
          <h3 className="mb-4 text-center text-lg font-bold">
            Share on Social Media
          </h3>
          <div className="flex justify-evenly">
            {/* Linkedin */}
            <div
              className="flex cursor-pointer flex-col items-center justify-center"
              onClick={() =>
                window.open(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.origin}`,
                  "_blank",
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                viewBox="0 0 512 512"
                fill="#ffffff"
              >
                <rect width="512" height="512" rx="15%" fill="#0077b5" />
                <circle cx="142" cy="138" r="37" />
                <path
                  stroke="#ffffff"
                  strokeWidth="66"
                  d="M244 194v198M142 194v198"
                />
                <path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32" />
              </svg>
              <div>LinkedIn</div>
            </div>
            {/* Facebook */}
            <div
              className="flex cursor-pointer flex-col items-center justify-center"
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}`,
                  "_blank",
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="h-12 w-12"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
              <div>Facebook</div>
            </div>
            {/* Twitter */}
            <div
              className="flex cursor-pointer flex-col items-center justify-center"
              onClick={() =>
                window.open(
                  `https://twitter.com/intent/tweet?url=${window.location.origin}`,
                  "_blank",
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="h-12 w-12"
              >
                <path
                  fill="#212121"
                  fillRule="evenodd"
                  d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#fff"
                  d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
                ></path>
                <polygon
                  fill="#fff"
                  points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
                ></polygon>
                <polygon
                  fill="#fff"
                  points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
                ></polygon>
              </svg>
              <div>Twitter/X</div>
            </div>
            {/* WhatsApp */}
            <div
              className="flex cursor-pointer flex-col items-center justify-center"
              onClick={() =>
                window.open(
                  `https://www.addtoany.com/add_to/whatsapp?linkurl=${window.location.origin}`,
                  "_blank",
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="h-12 w-12"
              >
                <path
                  fill="#fff"
                  d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                ></path>
                <path
                  fill="#fff"
                  d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                ></path>
                <path
                  fill="#cfd8dc"
                  d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                ></path>
                <path
                  fill="#40c351"
                  d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                ></path>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div>WhatsApp</div>
            </div>
            {/* Email */}
            <div
              className="flex flex-col items-center justify-center"
              onClick={() =>
                window.open(
                  `mailto:?&subject=Developer%20Profile&cc=&bcc=&body=${window.location.origin}`,
                  "_blank",
                )
              }
            >
              <svg
                className="h-12 w-12 fill-slate-500/80"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
              <div>Email</div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

// backdrop-blur-sm backdrop-filter bg-opacity-0
