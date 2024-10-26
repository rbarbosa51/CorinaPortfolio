import { useState, useEffect, memo } from "react";

const Carousel = ({
  children,
  autoSlide = false,
  autoSlideInterval = 5000,
}) => {
  const [current, setCurrent] = useState(0);
  const prevSlide = () =>
    setCurrent((current) =>
      current === 0 ? children.length - 1 : current - 1,
    );
  const nextSlide = () =>
    setCurrent((current) =>
      current === children.length - 1 ? 0 : current + 1,
    );
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="relative overflow-hidden rounded border border-white">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {" "}
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="rounded-full bg-white/20 p-1 shadow-sm shadow-black/80 hover:bg-white/60"
        >
          <span className="material-symbols-outlined flex items-center justify-center text-4xl font-bold text-rose-500/80">
            arrow_back
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="rounded-full bg-white/20 p-1 shadow-sm shadow-black/80 hover:bg-white/60"
        >
          <span className="material-symbols-outlined flex items-center justify-center text-4xl font-bold text-rose-500/80">
            arrow_forward
          </span>
        </button>
      </div>
      <div className="absolute bottom-2 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {children.map((_, i) => (
            <div key={i}
              className={`h-3 w-3 rounded-full transition-all ${current === i ? "bg-rose-500/80 p-2" : "bg-white"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default memo(Carousel);
