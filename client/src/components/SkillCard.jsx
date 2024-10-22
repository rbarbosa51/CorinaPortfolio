import { twMerge } from "tailwind-merge"
export default function SkillCard({url, title, message, className}) {
    return (
        <div className={twMerge("bg-opacity-0 basis-full py-2 px-20 md:px-10 lg:px-8 flex-shrink-0 backdrop-blur-sm backdrop-filter  flex flex-col  gap-2 text-rose-500",className )}>
          <div className="flex justify-center items-center">
                <img src={url} alt={title} className="rounded-full aspect-square w-[45%]" />
          </div>
          
          <div className="flex flex-col">
            <h2 className="text-center font-montserrat font-semibold underline underline-offset-4 uppercase text-xl mb-2">{title}</h2>
            <p className="first-letter:ml-4 first-letter:text-xl font-montserrat pb-8">{message}</p>
          </div>
        </div>
    )
}