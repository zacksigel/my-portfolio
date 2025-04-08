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
<div className="flex flex-col w-5/6 mx-auto">
  <h1 className="text-5xl font-bold mb-6 mt-6">Zack Sigel | Portfolio</h1>
  <div className="flex flex-row gap-6 mb-8">
    <div className="w-1/2">
      <p className="mb-2">
        I'm a writer, editor, and content marketer with over 12 years of experience helping grow startups and small businesses, with a focus on personal finance, insurance/insurtech, and business development. I'm passionate about explaining complex material for everyday people seeking even a small bit of financial security in a challenging economic world.
      </p>
      <p className="mb-2">
        My work speaks to the versatility of my skill set. This portfolio comprises both management and independent contributor roles, and it features content spanning a wide range of mediums, from blog posts and evergreen SEO articles to copywriting to static marketing deliverables to long- and short-form video.
      </p>
    </div>
    <div className="w-1/2">
      <p className="mb-2">
        I hope the following examples demonstrate my subject-matter expertise. The topics covered below include savings, mortgages, tax policy, law, property and casualty insurance, life insurance, estate planning, and accounting, among others.
      </p>
    </div>
  </div>
  <div className="mb-14">
    <h2 className="text-4xl font-semibold mb-1">Writing & Journalism (Selections)</h2>
    <div className="flex flex-wrap -mx-2">
        {rawArticles.slice(0, 6).map(({ title, links, display }) => (
          <div key={title} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className="mt-[4%]">
              <h3 className="text-2xl font-medium">{title}</h3>
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
        </div><div className="text-center mt-3 border border-solid border-gray-400 max-w-200 mx-auto p-1">
                      <Link
                to="/AllArticles"
                className="text-blue-800 underline"
              >
                View All
              </Link></div>
    </div>

  {Object.entries(grouped).map(([category, projects]) => (
    <div className="mb-10" key={category}>
      <h2 className="text-4xl font-semibold mb-5">{category}</h2>

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


  );
}
