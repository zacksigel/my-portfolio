import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.json";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <h1>Project Not Found</h1>;

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
    <div className="max-w-2xl text-center">
        <h1>{project.title}</h1>
      <img 
        src={project.image}
        alt="Project Banner" 
        className="w-full rounded-2xl shadow-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-4">
      {project.description}
      </p>
      <p className="text-lg text-gray-700">
      {project.description}
      </p>
      <div className="mt-4">
        <Link
                to="/"
                className="text-blue-600 underline"
              >
                Back
        </Link>
        </div>
    </div>
    </div>
  );
}
