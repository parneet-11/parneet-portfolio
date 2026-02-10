// src/components/About.tsx

import { Badge } from "@/components/ui/badge";
import { Database, Globe, Code2, Smartphone } from "lucide-react";

const skills = [
  { category: "Data Engineering", icon: Database, techs: ["Python", "SQL", "ETL", "Data Pipelines", "Data Modelling", "Airflow"] },
  { category: "Analytics & BI", icon: Globe, techs: ["Power BI", "Tableau", "Pandas", "NumPy", "Matplotlib", "QuickSight"] },
  { category: "Programming", icon: Code2, techs: ["Python", "Java", "Angular", "MySQL", "ASP.NET", "C#"] },
  { category: "Cloud & Tools", icon: Smartphone, techs: ["Azure", "AWS S3", "Databricks", "Snowflake"] }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#f7f9fc]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a skilled Data Engineer and Analyst currently pursuing my Master’s in Computer Science at Arizona State University. 
            With prior experience at Cognizant, I specialize in building scalable pipelines, transforming data into insights, 
            and enabling business decisions with BI dashboards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.category}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg mr-3">
                  <skill.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-blue-50 text-blue-800 hover:bg-blue-100">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
