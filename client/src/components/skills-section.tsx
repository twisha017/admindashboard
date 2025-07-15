import { Code, Server, Database, Brain, Smartphone, Cloud } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-8 h-8 text-orange-500" />,
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 85 },
        { name: "TypeScript", level: 80 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-8 h-8 text-green-500" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 90 },
        { name: "REST APIs", level: 85 },
      ],
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-8 h-8 text-blue-500" />,
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 65 },
      ],
    },
    {
      title: "Programming",
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 80 },
        { name: "Problem Solving", level: 88 },
        { name: "System Design", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="font-orbitron text-4xl font-bold text-center mb-16">
          <span className="text-blue-400">⚙️</span> TECHNICAL SKILLS
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="project-card p-6 rounded-xl">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="font-orbitron text-xl font-bold ml-3">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="skill-bar h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
