import {Html} from '@react-three/drei'

export default function SceneLoading(){
    
    return (
        <Html as='div' className='relative flex h-screen w-full items-center justify-center bg-peacocktw bg-cover bg-center' center>
            <h1 className="text-center font-waterBrush tracking-widest text-8xl text-red-500">
                Loading
            </h1>
        </Html>
    )
}