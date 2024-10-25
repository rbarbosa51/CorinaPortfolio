import {Link} from 'react-router-dom'
export default function NotFound() {
    return (
      <div className="relative flex flex-col h-screen gap-4 w-full items-center justify-center bg-peacocktw bg-cover bg-center">
        <h1 className="text-center font-waterBrush text-6xl text-red-500">
          Page not Found
        </h1>
        <Link className='border-red-300 border font-montserrat rounded-md p-2 text-2xl text-red-300' to={'/hub'}>Go back</Link>
      </div>
    );
  }
  