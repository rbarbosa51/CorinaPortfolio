import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center gap-4 bg-peacocktw bg-cover bg-center">
      <h1 className="text-center font-waterBrush text-6xl text-red-500">
        Page not Found
      </h1>
      <Link
        className="rounded-md border border-red-300 p-2 font-montserrat text-2xl text-red-300"
        to={"/hub"}
      >
        Go back
      </Link>
    </div>
  );
}
