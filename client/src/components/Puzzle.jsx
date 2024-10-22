import { useRef } from "react";

const Puzzle = () => {
  const draggedElement = useRef();
  return (
    <div className="flex min-h-full w-full items-center justify-center gap-2 bg-slate-600">
      <div className="flex h-screen w-1/2 items-center justify-center">
        <div className="grid h-[90%] w-[90%] grid-cols-3 grid-rows-3 gap-4">
          <div
            className={`h-full w-full bg-black/30 bg-[url(/images/5.webp)] bg-cover bg-center`}
            draggable="true"
            onDragStart={(e) => {
              draggedElement.current = e.target;
            }}
          />
          <div
            className={`h-full w-full bg-black/30 bg-[url(/images/9.webp)] bg-cover bg-center`}
            draggable="true"
            onDragStart={(e) => {
              draggedElement.current = e.target;
            }}
          />
          <div
            className={`h-full w-full bg-black/30 bg-[url(/images/2.webp)] bg-cover bg-center`}
            draggable="true"
            onDragStart={(e) => {
              draggedElement.current = e.target;
            }}
          />
          <div
            className={`h-full w-full bg-black/30 bg-[url(/images/7.webp)] bg-cover bg-center`}
            draggable="true"
            onDragStart={(e) => {
              draggedElement.current = e.target;
            }}
          />
          <div
            className={`h-full w-full bg-black/30 bg-[url(/images/1.webp)] bg-cover bg-center`}
            draggable="true"
            onDragStart={(e) => {
              draggedElement.current = e.target;
            }}
          />
          <div
            className={`h-full w-full bg-black/30 bg-[url(/images/3.webp)] bg-cover bg-center`}
            draggable="true"
            onDragStart={(e) => {
              draggedElement.current = e.target;
            }}
          />
          <div
            className={`h-full w-full bg-black/30 bg-[url(/images/8.webp)] bg-cover bg-center`}
            draggable="true"
            onDragStart={(e) => {
              draggedElement.current = e.target;
            }}
          />
          <div
            className={`h-full w-full bg-black/30 bg-[url(/images/4.webp)] bg-cover bg-center`}
            draggable="true"
            onDragStart={(e) => {
              draggedElement.current = e.target;
            }}
          />
          <div
            className={`h-full w-full bg-black/30 bg-[url(/images/6.webp)] bg-cover bg-center`}
            draggable="true"
            onDragStart={(e) => {
              draggedElement.current = e.target;
            }}
          />
        </div>
      </div>
      <div className="relative flex h-screen w-1/2 items-center justify-center border-l border-slate-900">
        <div className="grid h-[90%] w-[90%] grid-cols-3 grid-rows-3 gap-4">
          <div
            className="bg-slate-700"
            onDrop={(e) => {
              e.target.appendChild(draggedElement.current);
              draggedElement.current = null;
            }}
            onDragOver={(e) => e.preventDefault()}
          ></div>
          <div
            className="bg-slate-700"
            onDrop={(e) => {
              e.target.appendChild(draggedElement.current);
              draggedElement.current = null;
            }}
            onDragOver={(e) => e.preventDefault()}
          ></div>
          <div
            className="bg-slate-700"
            onDrop={(e) => {
              e.target.appendChild(draggedElement.current);
              draggedElement.current = null;
            }}
            onDragOver={(e) => e.preventDefault()}
          ></div>
          <div
            className="bg-slate-700"
            onDrop={(e) => {
              e.target.appendChild(draggedElement.current);
              draggedElement.current = null;
            }}
            onDragOver={(e) => e.preventDefault()}
          ></div>
          <div
            className="bg-slate-700"
            onDrop={(e) => {
              e.target.appendChild(draggedElement.current);
              draggedElement.current = null;
            }}
            onDragOver={(e) => e.preventDefault()}
          ></div>
          <div
            className="bg-slate-700"
            onDrop={(e) => {
              e.target.appendChild(draggedElement.current);
              draggedElement.current = null;
            }}
            onDragOver={(e) => e.preventDefault()}
          ></div>
          <div
            className="bg-slate-700"
            onDrop={(e) => {
              e.target.appendChild(draggedElement.current);
              draggedElement.current = null;
            }}
            onDragOver={(e) => e.preventDefault()}
          ></div>
          <div
            className="bg-slate-700"
            onDrop={(e) => {
              e.target.appendChild(draggedElement.current);
              draggedElement.current = null;
            }}
            onDragOver={(e) => e.preventDefault()}
          ></div>
          <div
            className="bg-slate-700"
            onDrop={(e) => {
              e.target.appendChild(draggedElement.current);
              draggedElement.current = null;
            }}
            onDragOver={(e) => e.preventDefault()}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Puzzle;
