import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Clock,
  MapPin,
  CheckCircle,
} from "lucide-react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "1000+", label: "Happy Customers" },
  { value: "50+", label: "Team Members" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide reliable, affordable, and sustainable engineering solutions that improve the quality of life for communities across Karnataka. We are committed to delivering excellence in water purification, lighting, and solar energy systems.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become Karnataka's most trusted name in engineering solutions, known for our quality products, expert installations, and exceptional after-sales service. We aim to contribute to a cleaner, greener, and better-lit future.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, quality, and customer satisfaction are at the core of everything we do. We believe in building long-term relationships with our customers through honest dealings and dependable service.",
  },
];

const milestones = [
  {
    year: "2014",
    event: "Company founded in Hirehadagali As Sarvamangala Enterprises",
  },
  { year: "2016", event: "Added solar solutions portfolio" },
  { year: "2020", event: "Crossed 300+ project milestone" },
  { year: "2022", event: "Launched high mast lighting division" },
  { year: "2024", event: "Serving 6+ districts in Karnataka " },
  { year: "2025", event: "Expanded to commercial RO segment" },
  {
    year: "2025",
    event:
      "Officially Open Our Head Office as Shree Matha Enterprises In Huvinahadagali ",
  },
];

const serviceAreas = [
  { name: "Huvinahadagali", description: "Headquarters & Main Service Center" },
  { name: "Vijayanagara", description: "Full Service Coverage" },
  { name: "Bellary", description: "Dedicated Service Team" },
  { name: "Hospet", description: "Service Center Available" },
  { name: "Kampli", description: "Regular Service Visits" },
  { name: "Siruguppa", description: "On-call Service" },
  { name: "Haveri", description: "Service Center Available" },
  { name: "Ranebennur", description: "Service Center Available" },
  { name: "Chitradurga", description: "On-call Service" },
  { name: "Harapanahalli", description: "Dedicated Service Team" },
  { name: "Gadag", description: "Dedicated Service Team" },
  { name: "Mundargi", description: "On-call Service" },
  { name: "Koppal", description: "Service Center Available" },
  { name: "All Over Karnataka..", description: "Dedicated Service Team" },
];

const certifications = [
  "ISO 9001:2015 Certified",
  "Government Registered Vendor",
  "GeM Portal Listed",
  "MSME Registered",
  "Authorized Business Partner of Eurka Forbes",
  // "Licensed Electrical Contractor",
];

export default function About() {
  return (
    <div>
      <PageHero
        title="About Shree Matha Enterprises"
        description="With over a decade of experience in engineering solutions, we are Karnataka's trusted partner for RO water purification, high-mast lighting, and solar energy systems."
        showCTAs={false}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="py-8">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              data-testid="story-title"
            >
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Shree Matha Enterprises began its journey in 2014 in
                Hirehadagali, originally established as Sarvamangala
                Enterprises. What started as a small initiative to deliver
                essential engineering solutions quickly grew through consistent
                execution and customer trust.
              </p>
              <p>
                By 2016, we expanded into solar power solutions, followed by a
                major milestone in 2020 when we crossed 300+ completed projects.
                Our capabilities continued to diversify with the launch of the
                high-mast lighting division in 2022, enabling us to serve larger
                commercial and public-infrastructure requirements. By 2024, our
                operations extended across 6+ districts in Karnataka.
              </p>
              <p>
                In 2025, we entered the commercial RO plant segment and
                officially established our head office in Huvinahadagali under
                the unified brand name Shree Matha Enterprises. Today, we
                continue to grow on the pillars of technical excellence,
                transparent service, and long-term customer partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-8"
                data-testid="journey-title"
              >
                Our Journey
              </h2>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                      {milestone.year.slice(2)}
                    </div>
                    <div className="pt-2">
                      <p className="font-semibold">{milestone.year}</p>
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-8"
                data-testid="certifications-title"
              >
                Certifications & Registrations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center shrink-0">
                        <Award className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <p className="font-medium text-sm">{cert}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              data-testid="coverage-title"
            >
              Service Coverage
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide our services across multiple districts in Karnataka
              with dedicated teams in key locations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="text-center">
                <CardContent className="py-6 px-4">
                  <MapPin className="h-8 w-8 mx-auto text-primary mb-3" />
                  <h3 className="font-semibold mb-1">{area.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Work With Us"
        subtitle="Whether you need water purification, solar energy, or lighting solutions, we're here to help."
      />
    </div>
  );
}
