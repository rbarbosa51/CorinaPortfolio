import { Link } from "react-router-dom";
export default function Hub() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-100 to-rose-500">
      <h1 className="text-4xl">Hub</h1>
      <Link className="underline" to={"/cell"}>
        Phone
      </Link>
      <Link className="underline" to={'/skills'}>
      Skills
      </Link>
      <Link className="underline" to={'/book'}>Book</Link>
      <Link className="underline" to={'/os'}>OS</Link>
    </div>
  );
}
