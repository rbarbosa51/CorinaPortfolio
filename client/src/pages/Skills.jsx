import { memo } from "react";
import { skillsData } from "../lib/skillsData";
import {Carousel,SkillCard,RippleBtn} from '../components'
import { Link } from "react-router-dom";

const Skills = () => {
  
  return (
    <div className={`h-screen relative bg-flowerPattern2 bg-cover`}>
      
        <Link to={'/hub'} className="absolute pl-4 pt-2">
          <RippleBtn className={'cursor-pointer font-thin rounded-xl border border-rose-500 bg-opacity-0 px-4 py-2 text-center text-xl text-rose-500 backdrop-blur-sm backdrop-filter'}
          rippleColor={'bg-rose-500'}
          >Go Back</RippleBtn>
        </Link>
      <h1 className="text-center text-glow-red pt-2 pb-4 text-rose-500 text-6xl font-waterBrush flex justify-center tracking-widest ">How <span className="mx-6">You</span> benefit</h1>
      
      <div className="w-[50vw] mx-auto">
        <Carousel autoSlide={true} autoSlideInterval={10000}>
          {skillsData.map((s,index) => (
            <SkillCard id={index} className={''} key={index}
            url={s.url} title={s.title} message={s.message}
            />
          ))}
        </Carousel>
      </div>
      
    </div>
  );
};
export default memo(Skills);
