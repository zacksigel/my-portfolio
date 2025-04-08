import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AllArticles from "./pages/AllArticles.tsx";
import Project from "./pages/Project.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AllArticles" element={<AllArticles />} />
      <Route path="/projects/:id" element={<Project />} />
    </Routes>
  );
}

export default App;
