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
  
  return (
    <div>
<div className="flex flex-col w-5/6 mx-auto mt-6">
  <div className="flex flex-row gap-4 mb-8">
      <p className="mb-2 text-lg">
        I'm a writer, editor, and content marketer with over 12 years of experience helping grow startups and small businesses, with a focus on personal finance, insurance/insurtech, and business development. I'm passionate about explaining complex material for everyday people seeking even a small bit of financial security in a challenging economic world.
      </p>
  </div>
  <div className="mb-14">
  <div className="flex flex-row gap-4">
    <div className="w-2/4">
      <h2 id="writing" className="text-4xl font-semibold font-libre-caslon mb-6">Writing & Journalism (Selections)</h2>
      
    </div>
    <div className="w-7/8 lg:w-1/4 ">
      <div className="text-center mt-3 border border-solid border-gray-400 max-w-25 lg:max-w-50 mx-auto p-1">
                      <Link
                to="/AllArticles"
                className="text-blue-800 underline text-lg"
              >
                View All
              </Link></div>      
    </div>
  </div>
    <div className="flex flex-wrap -mx-2">
        {rawArticles.slice(0, 6).map(({ title, links, display }) => (
          <div key={title} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className="mt-[4%]">
              <h3 className="text-2xl font-medium mb-8">{title}</h3>
              <ul className="mt-4 space-y-2 md:text-base">
              {links.slice(0, display).map(({ url, text, publisher }) => (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 underline"
                    >
                      {text} ({publisher})
                    </a>
                  </li>
                ))}
              </ul>
      </div>
    </div>
        ))}
        </div>
    </div>

  {Object.entries(grouped).map(([category, projects]) => (
    <div className="mb-10" key={category}>
      <h2 id={category[0]} className="text-4xl font-semibold mb-10 font-libre-caslon">{category}</h2>

      <div className="flex flex-wrap -mx-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full sm:w-1/2 md:w-1/3 px-2 mb-6"
          >
            <div className="aspect-square rounded flex mr-4 flex-col">
            <img
                src={project.image}
                className="h-3/4 w-full object-cover rounded"
              />
              <div className="mt-[4%]">
                <h3 className="text-2xl font-medium">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
              </div>
              <Link
                to={`/projects/${project.id}`}
                className="text-blue-800 mt-4 underline"
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
</div>

  );
}
