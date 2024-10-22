const Note = () => {
  return (
    <div className="flex h-full flex-col bg-pink-50 text-black/50">
      <div className="flex h-[15%] w-full items-center justify-center">
        <h1 className="pt-2 text-center font-water-brush text-5xl tracking-wider text-red-300">
          Thank you
        </h1>
      </div>
      <div className="flex h-[90%] w-full flex-col items-center justify-start p-4">
        <p className="first-letter:ml-2 first-letter:font-water-brush first-letter:text-2xl first-letter:text-red-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat
          ut eius, vitae ipsam ullam neque doloremque maiores incidunt
          reiciendis, porro excepturi quam illo tempore! A, ipsa aliquam minus
          excepturi nobis consectetur cupiditate quisquam dolores quaerat
          assumenda accusamus maxime suscipit rem sed nam hic, temporibus ad
          fugiat dolore? Quas, magni.
        </p>
        <p className="mt-4 self-end font-water-brush text-3xl tracking-wider text-red-300">
          Corina Guzman
        </p>
      </div>
    </div>
  );
};
export default Note;
