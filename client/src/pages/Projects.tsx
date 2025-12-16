import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const categories = ["All", "Commercial RO", "Domestic RO", "Solar", "High Mast"];

const projects = [
  {
    title: "Steel Factory RO Plant",
    category: "Commercial RO",
    location: "Ballari Industrial Area",
    specs: "2000 LPH Capacity",
  },
  {
    title: "Hospital Water Treatment",
    category: "Commercial RO",
    location: "Hospet General Hospital",
    specs: "1000 LPH with UV",
  },
  {
    title: "School Solar Installation",
    category: "Solar",
    location: "Vijayanagara Public School",
    specs: "25 kW On-Grid System",
  },
  {
    title: "Stadium High Mast Lights",
    category: "High Mast",
    location: "Vijayanagara Sports Complex",
    specs: "6x 35m Poles with LED",
  },
  {
    title: "Apartment Complex RO",
    category: "Commercial RO",
    location: "Sunrise Apartments, Ballari",
    specs: "500 LPH System",
  },
  {
    title: "Farm Solar Pump",
    category: "Solar",
    location: "Agricultural Farm, Siruguppa",
    specs: "5 HP Solar Pump",
  },
  {
    title: "Highway Street Lights",
    category: "High Mast",
    location: "NH-150B Stretch",
    specs: "12x 20m Poles",
  },
  {
    title: "Home RO Installation",
    category: "Domestic RO",
    location: "Residential Area, Kampli",
    specs: "15L Premium RO",
  },
  {
    title: "Hotel Water System",
    category: "Commercial RO",
    location: "Grand Hotel, Hospet",
    specs: "800 LPH Multi-point",
  },
  {
    title: "Rooftop Solar Project",
    category: "Solar",
    location: "Commercial Building, Ballari",
    specs: "50 kW Rooftop System",
  },
  {
    title: "Industrial Lighting",
    category: "High Mast",
    location: "Industrial Estate, Bellary",
    specs: "8x 25m Poles",
  },
  {
    title: "Village RO Scheme",
    category: "Commercial RO",
    location: "Huvinahadagali Village",
    specs: "1500 LPH Community RO",
  },
  {
    title: "Clinic RO System",
    category: "Domestic RO",
    location: "Health Clinic, Kampli",
    specs: "25L Commercial Grade",
  },
  {
    title: "Hybrid Solar System",
    category: "Solar",
    location: "Farmhouse, Siruguppa",
    specs: "10 kW Hybrid with Battery",
  },
  {
    title: "Junction Street Lights",
    category: "High Mast",
    location: "Main Junction, Hospet",
    specs: "4x 15m Poles",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      <PageHero
        title="Our Projects"
        description="Explore our portfolio of completed RO plants, solar installations, and high mast lighting projects across Karnataka. Each project showcases our commitment to quality and customer satisfaction."
        showCTAs={false}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection 
        title="Want to See More Projects?"
        subtitle="Contact us to learn more about our work or schedule a visit to our recent installations."
      />
    </div>
  );
}
