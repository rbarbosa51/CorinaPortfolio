import { memo } from "react";
import { skillsData } from "../lib/skillsData";
import { Carousel, SkillCard, RippleBtn } from "../components";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className={`relative h-screen bg-flowerPattern2 bg-cover`}>
      <Link to={"/hub"} className="absolute pl-4 pt-2">
        <RippleBtn
          className={
            "cursor-pointer rounded-xl border border-rose-500 bg-opacity-0 px-4 py-2 text-center text-xl font-thin text-rose-500 backdrop-blur-sm backdrop-filter"
          }
          rippleColor={"bg-rose-500"}
        >
          Go Back
        </RippleBtn>
      </Link>
      <h1 className="text-glow-red flex justify-center pb-4 pt-2 text-center font-waterBrush text-6xl tracking-widest text-rose-500">
        How <span className="mx-6">You</span> benefit
      </h1>

      <div className="mx-auto w-[50vw]">
        <Carousel autoSlide={true} autoSlideInterval={10000}>
          {skillsData.map((s, index) => (
            <SkillCard
              id={index}
              className={""}
              key={index}
              url={s.url}
              title={s.title}
              message={s.message}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default memo(Skills);
