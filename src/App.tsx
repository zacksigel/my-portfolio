import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AllArticles from "./pages/AllArticles.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AllArticles" element={<AllArticles />} />
    </Routes>
  );
}

export default App;
