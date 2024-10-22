import { useState, useEffect, memo } from "react"

const Carousel = ({children, autoSlide = false, autoSlideInterval = 5000}) => {
    const [current, setCurrent] = useState(0)
    const prevSlide = () => setCurrent(current => current === 0 ? children.length - 1 : current - 1)
    const nextSlide = () => setCurrent(current => current === children.length - 1 ? 0 : current + 1)
    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(nextSlide, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])
    return (
        <div className="overflow-hidden relative rounded border border-white">
            <div className="flex transition-transform ease-out duration-500" 
            style={{transform: `translateX(-${current * 100}%)`}}> {children}</div>
            <div className="absolute inset-0 flex justify-between items-center p-4">
                <button onClick={prevSlide} className="p-1 rounded-full shadow-sm shadow-black/80 bg-white/20 hover:bg-white/60"><span className="material-symbols-outlined text-4xl text-rose-500/80 font-bold flex justify-center items-center">arrow_back</span></button>
                <button onClick={nextSlide} className="p-1 rounded-full shadow-sm shadow-black/80 bg-white/20 hover:bg-white/60"><span className="material-symbols-outlined text-4xl text-rose-500/80 font-bold flex justify-center items-center">arrow_forward</span></button>
            </div>
            <div className="absolute bottom-2 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {children.map((_, i) => (
                        <div className={`transition-all w-3 h-3 rounded-full ${current === i ? 'p-2 bg-rose-500/80' : 'bg-white'}`}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default memo(Carousel)