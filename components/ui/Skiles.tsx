import Image from "next/image";

type SkillConfig = {
  name: string;
  description: string;
  iconText: string;
  colors: [string, string];
};

type SkillCategory = {
  title: string;
  skills: SkillConfig[];
};

const createIconDataUri = (text: string, colors: [string, string]) => {
  const sanitizedText = text.toUpperCase();
  const gradientId = `grad-${sanitizedText.replace(/[^a-zA-Z0-9]/g, "")}`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colors[0]}" />
      <stop offset="100%" stop-color="${colors[1]}" />
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="18" fill="url(#${gradientId})" />
  <text x="32" y="36" font-size="18" font-family="Inter, Arial, sans-serif" font-weight="700" fill="#ffffff" text-anchor="middle">${sanitizedText}</text>
</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML5",
        description: "Semantic markup & accessibility best practices.",
        iconText: "HTML",
        colors: ["#f97316", "#fb923c"],
      },
      {
        name: "CSS3",
        description: "Layouts, media queries, flexbox & grid systems.",
        iconText: "CSS",
        colors: ["#2563eb", "#38bdf8"],
      },
      {
        name: "JavaScript (ES6+)",
        description: "Modern JS patterns, modules, and tooling.",
        iconText: "JS",
        colors: ["#facc15", "#f97316"],
      },
      {
        name: "TypeScript",
        description: "Type-safe React apps & shared interfaces.",
        iconText: "TS",
        colors: ["#1d4ed8", "#3b82f6"],
      },
      {
        name: "React.js",
        description: "Hooks, context, and component-driven architecture.",
        iconText: "RE",
        colors: ["#0ea5e9", "#22d3ee"],
      },
      {
        name: "Next.js",
        description: "App Router, SSR, ISR, and internationalization.",
        iconText: "NX",
        colors: ["#111827", "#374151"],
      },
    ],
  },
  {
    title: "Styling & Experience",
    skills: [
      {
        name: "SCSS/SASS",
        description: "Modular styles, mixins, variables, and utilities.",
        iconText: "SASS",
        colors: ["#ec4899", "#db2777"],
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first workflow & design systems.",
        iconText: "TW",
        colors: ["#06b6d4", "#3b82f6"],
      },
      {
        name: "Bootstrap",
        description: "Rapid prototyping & responsive components.",
        iconText: "BT",
        colors: ["#6d28d9", "#8b5cf6"],
      },
      {
        name: "Responsive Design",
        description: "Mobile-first layouts & adaptive breakpoints.",
        iconText: "RWD",
        colors: ["#0ea5e9", "#6366f1"],
      },
      {
        name: "UI/UX Awareness",
        description: "User journeys, usability, and design systems.",
        iconText: "UIUX",
        colors: ["#f97316", "#ec4899"],
      },
    ],
  },
  {
    title: "Motion & Interaction",
    skills: [
      {
        name: "Animation",
        description: "Micro-interactions & motion guidelines.",
        iconText: "ANIM",
        colors: ["#f472b6", "#a855f7"],
      },
      {
        name: "Scroll Effects",
        description: "Scroll-triggered storytelling experiences.",
        iconText: "SCRL",
        colors: ["#34d399", "#059669"],
      },
      {
        name: "Performance Optimization",
        description: "Bundle sizing, lazy loading, and profiling.",
        iconText: "PERF",
        colors: ["#facc15", "#f97316"],
      },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      {
        name: "Node.js",
        description: "REST APIs, SSR, and tooling with Node runtime.",
        iconText: "NODE",
        colors: ["#22c55e", "#16a34a"],
      },
      {
        name: "Express.js",
        description: "Routing, middleware, and API architecture.",
        iconText: "EXP",
        colors: ["#15803d", "#22c55e"],
      },
      {
        name: "PHP",
        description: "Server-rendered apps and CMS customization.",
        iconText: "PHP",
        colors: ["#6366f1", "#8b5cf6"],
      },
      {
        name: "Laravel",
        description: "MVC structure, Blade, and RESTful services.",
        iconText: "LARA",
        colors: ["#ef4444", "#f97316"],
      },
      {
        name: "API Integration",
        description: "REST, third-party services, and authentication flows.",
        iconText: "API",
        colors: ["#0ea5e9", "#14b8a6"],
      },
      {
        name: "Axios",
        description: "HTTP clients, interceptors, and retries.",
        iconText: "AX",
        colors: ["#1d4ed8", "#3b82f6"],
      },
    ],
  },
  {
    title: "Data & Persistence",
    skills: [
      {
        name: "MongoDB",
        description: "Schema design & aggregation pipelines.",
        iconText: "MONGO",
        colors: ["#10b981", "#047857"],
      },
      {
        name: "SQL",
        description: "Relational databases, queries, and optimization.",
        iconText: "SQL",
        colors: ["#0ea5e9", "#2563eb"],
      },
    ],
  },
  {
    title: "Workflow & Delivery",
    skills: [
      {
        name: "Git",
        description: "Branching strategies & collaboration.",
        iconText: "GIT",
        colors: ["#f97316", "#ef4444"],
      },
      {
        name: "GitHub",
        description: "Project management, PR reviews, and CI basics.",
        iconText: "GH",
        colors: ["#111827", "#4b5563"],
      },
      {
        name: "Problem Solving",
        description: "Debugging, patterns, and decision-making.",
        iconText: "SOLV",
        colors: ["#22c55e", "#3b82f6"],
      },
      {
        name: "Time Management",
        description: "Planning, priorities, and on-time delivery.",
        iconText: "TIME",
        colors: ["#facc15", "#f97316"],
      },
    ],
  },
  {
    title: "Communication & Business",
    skills: [
      {
        name: "Communication Skills",
        description: "Clear updates, documentation, and teamwork.",
        iconText: "COM",
        colors: ["#38bdf8", "#6366f1"],
      },
      {
        name: "Marketing",
        description: "Product messaging & audience understanding.",
        iconText: "MKT",
        colors: ["#f97316", "#facc15"],
      },
      {
        name: "Sales",
        description: "Consultative approach & client needs analysis.",
        iconText: "SALE",
        colors: ["#ef4444", "#f97316"],
      },
      {
        name: "English",
        description: "Professional communication & collaboration.",
        iconText: "EN",
        colors: ["#60a5fa", "#2563eb"],
      },
    ],
  },
];

function Skiles() {
  return (
    <section className="mt-20 px-6 py-10 transition-colors duration-300">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
          My Experience
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-800 dark:text-(--p_text) md:text-4xl">
          Skills & Specialties
        </h2>
      </div>

      <div className="mt-12 flex flex-col gap-14">
        {skillCategories.map((category) => (
          <div key={category.title} className="mx-auto w-full max-w-6xl">
            <div className="mb-6 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="w-full max-w-[320px] rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-[#1b1b1b]"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={createIconDataUri(skill.iconText, skill.colors)}
                      alt={skill.name}
                      width={55}
                      height={55}
                      unoptimized
                      className="rounded-xl"
                    />
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {skill.name}
                      </h4>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skiles;
