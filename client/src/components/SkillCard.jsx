import { twMerge } from "tailwind-merge";
export default function SkillCard({ url, title, message, className }) {
  return (
    <div
      className={twMerge(
        "flex flex-shrink-0 basis-full flex-col gap-2 bg-opacity-0 px-20 py-2 text-rose-500 backdrop-blur-sm backdrop-filter md:px-10 lg:px-8",
        className,
      )}
    >
      <div className="flex items-center justify-center">
        <img
          src={url}
          alt={title}
          className="aspect-square w-[45%] rounded-full"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="mb-2 text-center font-montserrat text-xl font-semibold uppercase underline underline-offset-4">
          {title}
        </h2>
        <p className="pb-8 font-montserrat first-letter:ml-4 first-letter:text-xl">
          {message}
        </p>
      </div>
    </div>
  );
}
