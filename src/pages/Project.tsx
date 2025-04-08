import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.json";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <h1>Project Not Found</h1>;

  return (
<div className="min-h-screen flex flex-col items-center justify-center px-4">
  <h1 className="text-4xl font-semibold mb-5 text-center">{project.title}</h1>
  
  <div className="max-w-2xl text-center">
    <img 
      src={project.image}
      alt="Project Banner" 
      className="w-full rounded-2xl shadow-lg mb-6"
    />
    <p className="text-lg text-gray-700 mb-4">
    <span className="font-semibold">Overview: </span>{project.overview}
    </p>
    <p className="text-lg text-gray-700">
    <span className="font-semibold">My Role: </span>{project.role}
    </p>
    <div className="mt-4">
      <Link to="/" className="text-blue-800 underline">
        Back
      </Link>
    </div>
  </div>
</div>

  );
}
