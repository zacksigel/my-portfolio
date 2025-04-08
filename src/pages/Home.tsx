import { Link } from "react-router-dom";
import rawProjects from "../data/projects.json";
import rawArticles from "../data/articles.json";

export default function Home() {
  const grouped = rawProjects.reduce((acc: Record<string, typeof rawProjects>, project) => {
    const category = project.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {} as Record<string, typeof rawProjects>);

  const categoryDescriptions: Record<string, string> = {
    "Content Marketing": "TKTKTK",
    "SEO Content Strategy": "TKTKTK",
    "Journalism & Reporting": "TKTKTK",
    // Add more categories as needed
  };
  
  return (
<div className="flex flex-col w-5/6 mx-auto">
  <h1 className="text-3xl font-bold mb-10">My Portfolio</h1>
  <div className="mb-10">
    <h2 className="text-2xl font-semibold mb-1">Writing & Journalism (Selections)</h2>
    <p className="text-gray-600 mb-4">Subheader TKTKTK</p>
    <div className="flex flex-wrap -mx-2">
        {rawArticles.slice(0, 6).map(({ title, links, display }) => (
          <div key={title} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className="mt-[4%]">
              <h3 className="text-lg font-medium">{title}</h3>
              <ul className="mt-4 space-y-2 md:text-base">
              {links.slice(0, display).map(({ url, text, publisher }) => (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {text} ({publisher})
                    </a>
                  </li>
                ))}
              </ul>
      </div>
    </div>
        ))}
        </div><div className="text-center mt-3 border border-solid border-gray-400 max-w-200 mx-auto p-1">
                      <Link
                to="/AllArticles"
                className="text-blue-600 underline"
              >
                View All
              </Link></div>
    </div>

  {Object.entries(grouped).map(([category, projects]) => (
    <div className="mb-10" key={category}>
      <h2 className="text-2xl font-semibold mb-1">{category}</h2>
    {categoryDescriptions[category] && (
      <p className="text-gray-600 mb-4">{categoryDescriptions[category]}</p>
    )}
      <div className="flex flex-wrap -mx-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4"
          >
            <div className="aspect-square rounded flex mr-4 flex-col">
            <img
                src={project.image}
                className="h-3/4 w-full object-cover rounded"
              />
              <div className="mt-[4%]">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
              </div>
              <Link
                to={`/projects/${project.id}`}
                className="text-blue-600 mt-4 underline"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>


  );
}
