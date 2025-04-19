import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  //   const frontendSkills = ["React", "TypeScript", "Next.js", "TailwindCSS"];

  const backendSkills = [
    "Python",
    "SQL",
    "Apache Airflow",
    "AWS",
    "Docker",
    "PostgreSQL",
    "Typescript",
    "Javascript",
    "Django",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-3">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md gap-6">
              {/* <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div> */}

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    Electronics Communication And Information Engineering
                  </strong>
                  - Tribhuvan University
                  <br />
                  <span className="text-gray-500">
                    Pulchowk Engineering Campus
                  </span>
                  {/* (2018-2023) */}
                </li>
                {/* <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li> */}
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Jounior Software/Data Developer at Grepsr
                  </h4>
                  <p>Scrape, Clean and Analysis on Data.</p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Python Developer at DAASRA Tech
                  </h4>
                  <p>Built Sclable Django, Flask Web Apps.</p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Python Tutor at Npalaya College
                  </h4>
                  <p>Taught Python Programming Concepts.</p>
                </div>
                <div>
                  <h4 className="font-semibold"> Intern at Agrobotics Nepal</h4>
                  <p>
                    Contributed on development of cattle wear system using seeds
                    studio Xiao nrf52840 sense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
