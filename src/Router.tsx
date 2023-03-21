import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import Home from "./pages/Home";
import About from "./pages/Sobre";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      </Route>
    </Routes>
  );
}