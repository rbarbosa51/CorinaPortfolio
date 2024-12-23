import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Home, Loading, Phone, Book, Skills, OS, NotFound } from "./pages";
const Hub = lazy(() => import('./pages/Hub'))

export default function App() {
  console.log(
    "%cCorina's Portfolio.",
    "font-weight: thin; color: #ff0000; font-size:4rem",
  );
  return (
    <div className="h-screen w-full bg-peacocktw">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/hub"
          exact
          element={
            <Suspense fallback={<Loading />}>
              <Hub />
            </Suspense>
          }
        />
        <Route path="/cell" exact element={<Phone />} />
        <Route path="/book" exact element={<Book />} />
        <Route path="/skills" exact element={<Skills />} />
        <Route path="/os" exact element={<OS />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
