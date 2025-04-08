import rawArticles from "../data/articles.json"

export default function AllArticles() {

  
  return (
<div className="flex flex-col w-5/6 mx-auto">
  <h1 className="text-3xl font-bold mb-10">Zack Sigel | Articles</h1>
  <div className="mb-10">
    <h2 className="text-2xl font-semibold mb-1">Writing & Journalism (Selections)</h2>
    <p className="text-gray-600 mb-4">Subheader TKTKTK</p>
    <div className="flex flex-wrap -mx-2">
        {rawArticles.map(({ title, links }) => (
          <div key={title} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className="mt-[4%]">
              <h3 className="text-lg font-medium">{title}</h3>
              <ul className="mt-4 space-y-2 md:text-base">
              {links.map(({ url, text, publisher }) => (
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

  
</div>


  );
}