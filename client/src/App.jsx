import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Home, Hub, Loading, Phone, Book,Skills } from "./pages";

export default function App() {
  return (
    <div className="h-screen bg-peacocktw">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/hub"
          element={
            <Suspense fallback={<Loading />}>
              <Hub />
            </Suspense>
          }
        />
        <Route path="/cell" element={<Phone />} />
        <Route path="/book" element={<Book />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={null} />
      </Routes>
    </div>
  );
}
