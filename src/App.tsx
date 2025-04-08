import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Home from "./pages/Home.tsx";
import AllArticles from "./pages/AllArticles.tsx";
import Project from "./pages/Project.tsx";
import Layout from "./components/Layout";

function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/AllArticles" element={<AllArticles />} />
      <Route path="/projects/:id" element={<Project />} />
      </Route></Routes></>
  );
}

export default App;
