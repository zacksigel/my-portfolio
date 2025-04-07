import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
// import Project from "./pages/Project.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/projects/:id" element={<Project />} /> */}
    </Routes>
  );
}

export default App;
