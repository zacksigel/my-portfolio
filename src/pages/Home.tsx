// import { Link } from "react-router-dom";
import rawProjects from "../data/projects.json";

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
  
  const homeInsuranceLinks = [
    {
      url: 'https://www.investopedia.com/affected-by-the-wildfires-in-southern-california-you-might-be-safe-from-home-insurance-cancellations-through-2026-8778112',
      text: 'Affected by the wildfires in Southern California? You might be safe from home insurance cancellations.',
      publisher: 'Investopedia'
    },
    {
      url: 'https://www.insure.com/case-study/home-insurance/mold-damage-home-repairs/',
      text: 'From mold discovery to full repairs: how homeowners insurance protected Sam’s home',
      publisher: 'Insure.com'
    },
    {
      url: 'https://www.insure.com/home-insurance/hoa-master-insurance-policy/',
      text: 'What is a homeowners association master insurance policy?',
      publisher: 'Insure.com'
    },
    {
      url: 'https://www.policygenius.com/renters-insurance/renters-insurance-vs-condo-insurance/',
      text: 'Renters insurance vs condo insurance',
      publisher: 'Policygenius'
    }
  ];
  
  const carInsuranceLinks = [
    {
      url: 'https://www.policygenius.com/auto-insurance/car-insurance-declarations-page/',
      text: "What's on my car insurance declarations page?",
      publisher: 'Policygenius'
    },
    {
      url: 'https://www.insure.com/car-insurance/1000-deductible/',
      text: 'Should I take our a car insurance policy with a $1,000 deductible?',
      publisher: 'Insure.com'
    },
    {
      url: 'https://www.insure.com/car-insurance/insurance-claim-processing-time/',
      text: 'How long does car insurance take to process my claim?',
      publisher: 'Insure.com'
    },
    {
      url: 'https://www.insure.com/car-insurance/how-paying-off-car-loan-affects-insurance/',
      text: 'Does paying off my car loan affect my insurance premiums?',
      publisher: 'Insure.com'
    }
  ];
  
  const lifeInsuranceLinks = [
    {
      url: 'https://www.investopedia.com/is-your-term-life-insurance-a-waste-of-money-8774621',
      text: 'Is your term life insurance a waste of money?',
      publisher: 'Investopedia'
    },
    {
      url: 'https://www.investopedia.com/can-your-dna-change-how-much-you-pay-for-life-insurance-8768536',
      text: 'Can your genetics affect how much you pay for life insurance?',
      publisher: 'Investopedia'
    },
    {
      url: 'https://www.policygenius.com/wills/how-life-insurance-works-with-wills-and-trusts/',
      text: 'How life insurance works with wills and trusts',
      publisher: 'Policygenius'
    },
    {
      url: 'https://www.investopedia.com/gtl-group-term-life-on-paycheck-5095033',
      text: 'What is group term life insurance (GTL) on a paycheck?',
      publisher: 'Investopedia'
    }
  ];
  
  const healthInsuranceLinks = [
    {
      url: 'https://www.investopedia.com/articles/personal-finance/090814/pros-and-cons-health-savings-account-hsa.asp',
      text: 'Pros and cons of a health savings account (HSA)',
      publisher: 'Investopedia'
    },
    {
      url: 'https://www.investopedia.com/9-major-medicare-changes-for-2025-and-how-theyll-impact-your-coverage-11684794',
      text: "9 major Medicare changes for 2025 and how they'll impact your coverage",
      publisher: 'Investopedia'
    }
  ];
  
  const rentersInsuranceLinks = [
    {
      url: 'https://www.policygenius.com/renters-insurance/does-renters-insurance-cover-jewelry/',
      text: 'Does renters insurance cover jewelry?',
      publisher: 'Policygenius'
    },
    {
      url: 'https://www.policygenius.com/renters-insurance/how-do-i-file-a-renters-insurance-claim/',
      text: 'How do I file a renters insurance claim?',
      publisher: 'Policygenius'
    },
    {
      url: 'https://www.policygenius.com/renters-insurance/learn/replacement-cost-renters-insurance/',
      text: 'What is replacement cost renters insurance?',
      publisher: 'Policygenius'
    }
  ];
  
  

  return (
<div className="flex flex-col w-5/6 mx-auto">
  <h1 className="text-3xl font-bold mb-10">My Portfolio</h1>
  <div className="mb-10">
    <h2 className="text-2xl font-semibold mb-1">Writing & Journalism</h2>
    <p className="text-gray-600 mb-4">Subheader TKTKTK</p>
    <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
      <div className="mt-[4%]">
        <h3 className="text-lg font-medium">Home Insurance</h3>
        <ul className="mt-4 space-y-2">
          {homeInsuranceLinks.map(({ url, text, publisher }) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {text}
              </a><span className="italic"> | </span><span className="font-semibold text-xs italic">{publisher}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
      <div className="mt-[4%]">
        <h3 className="text-lg font-medium">Car Insurance</h3>
        <ul className="mt-4 space-y-2">
          {carInsuranceLinks.map(({ url, text, publisher }) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {text}
              </a><span className="italic"> | </span><span className="font-semibold text-xs italic">{publisher}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
      <div className="mt-[4%]">
        <h3 className="text-lg font-medium">Life Insurance</h3>
        <ul className="mt-4 space-y-2">
          {lifeInsuranceLinks.map(({ url, text, publisher }) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {text}
              </a><span className="italic"> | </span><span className="font-semibold text-xs italic">{publisher}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
      <div className="mt-[4%]">
        <h3 className="text-lg font-medium">Health Insurance</h3>
        <ul className="mt-4 space-y-2">
          {healthInsuranceLinks.map(({ url, text, publisher }) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {text}
              </a><span className="italic"> | </span><span className="font-semibold text-xs italic">{publisher}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
      <div className="mt-[4%]">
        <h3 className="text-lg font-medium">Renters Insurance</h3>
        <ul className="mt-4 space-y-2">
          {rentersInsuranceLinks.map(({ url, text, publisher }) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {text}
              </a><span className="italic"> | </span><span className="font-semibold text-xs italic">{publisher}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
        </div>
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
            <div className="aspect-square rounded p-6 flex flex-col">
            <img
                src={project.image}
                className="h-3/4 w-full object-cover rounded"
              />
              <div className="mt-[4%]">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
              </div>
              {/* <Link
                to={`/projects/${project.id}`}
                className="text-blue-600 mt-4 underline"
              >
                View Project
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>


  );
}
