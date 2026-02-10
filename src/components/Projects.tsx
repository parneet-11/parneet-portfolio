// src/components/Projects.tsx

import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
  title: "Natural Language to SQL Agent",
  description: "Developed a tool that helps people talk to their data without needing to know code. By using the Gemini 2.0 Flash model, the assistant translates natural language questions into accurate SQL queries in real-time.",
  tech: ["Generative AI Integration", "Prompt Engineering", "Python", "Streamlit", "Docker"],
  github: "https://github.com/parneet-11/SQL_Query_Generator",
  
  duration: "Apr 2024"
},
{
    title: "Cloud Analytics Lakehouse",
    description: "Built a Medallion Lakehouse on Azure Databricks with PySpark and Delta Lake. Created reliable, replayable ETL pipelines and modeled analytics data in SCD Type 2 star schema, with CI/CD and governance via Unity Catalog.",
    tech: ["PySpark", "Azure Databricks", "Delta Lake", "Azure Data Factory", "Data Modeling"],
    github: "https://github.com/parneet-11/Spotify-Data-Engineering-Project",
   
    duration: "Jan 2025"
  },
  {
    title: "Bank Loan Analysis Dashboard",
    description: "Designed an interactive Tableau dashboard with summary, trends, and regional metrics, enabling stakeholders to track key lending KPIs.",
    tech: ["Tableau", "Data Visualization", "KPI Analysis", "Dashboard Design"],
    github: "https://github.com/parneet-11/bank-loan-dashboard",
   
    duration: "Mar 2024"
  },
  
  {
    title: "YouTube Data Optimization",
    description: "Developed end-to-end ETL pipelines using SQL and PySpark to extract YouTube data and visualize performance metrics via AWS QuickSight.",
    tech: ["AWS", "S3", "Redshift", "SQL", "QuickSight"],
    github: "https://github.com/parneet-11/youtube-etl",
   
    duration: "Aug 2024"
  }
  

];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore some of my data engineering and analytics projects, combining scalable ETL workflows with interactive dashboards and statistics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} className="bg-blue-50 text-blue-800">{tech}</Badge>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="text-blue-700 border-blue-300 hover:bg-blue-100">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </a>
                </div>
               
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/parneet-11?tab=repositories" target="_blank">
            <Button variant="outline" className="text-blue-700 border-blue-400 hover:bg-blue-50">
              See All Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
