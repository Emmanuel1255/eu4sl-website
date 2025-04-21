import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, GraduationCap, Users, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 text-white bg-secondary">
  <div className="absolute inset-0 bg-[url('/images/LOGO2.png')] bg-no-repeat bg-center opacity-10"></div>
  <div className="container relative px-4 mx-auto">
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-row flex-wrap items-center justify-center gap-4 mb-8">
        <img
          src="./logo.png"
          alt="EU4SALONE Logo"
          className="w-auto h-48"
        />
        <img
          src="./Eu.jpeg"
          alt="European Union Logo"
          className="w-auto h-32 md:h-36 lg:h-40" // Resize here
        />
      </div>
      <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        European Interdisciplinary Studies in Sierra Leone
      </h1>
      <p className="max-w-2xl mt-4 mb-8 text-xl opacity-80">
        A Jean Monnet Module at Fourah Bay College, University of Sierra Leone
      </p>
      <div className="flex gap-4">
        <Link href="/about">
          <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90">
            Learn More
          </Button>
        </Link>
        <Link href="/courses">
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white bg-secondary hover:bg-white hover:text-secondary"
          >
            View Courses
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>



      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">6+</div>
              <div className="text-gray-600">Courses Offered</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">15+</div>
              <div className="text-gray-600">Expert Faculty</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">100+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">10+</div>
              <div className="text-gray-600">Research Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-secondary">Why Choose EU4SL?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-8 transition-all bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-lg bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-primary">Academic Excellence</h3>
              <p className="text-gray-600">
                Comprehensive courses taught by experienced faculty members specializing in European Studies.
              </p>
            </div>
            <div className="p-8 transition-all bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-lg bg-primary/10">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-primary">Research Focus</h3>
              <p className="text-gray-600">
                Dedicated research group exploring EU-Africa relations and European integration.
              </p>
            </div>
            <div className="p-8 transition-all bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-lg bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-primary">International Perspective</h3>
              <p className="text-gray-600">
                Gain insights into European politics, economics, and culture from an African perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Events */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-secondary">Latest News & Events</h2>
            <Link href="/news" className="flex items-center gap-2 text-primary hover:text-primary/80">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "EU4SL Welcomes New Cohort",
                date: "March 15, 2024",
                description: "Join us in welcoming our newest cohort of students to the EU4SL program.",
              },
              {
                title: "International Conference on EU-Africa Relations",
                date: "April 2, 2024",
                description: "Annual conference bringing together experts from Europe and Africa.",
              },
              {
                title: "Research Workshop Series",
                date: "April 10, 2024",
                description: "Weekly workshops focusing on research methodologies and current trends.",
              },
            ].map((event, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-secondary">{event.title}</h3>
                  <p className="mb-4 text-gray-600">{event.description}</p>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      
    </div>
  )
}

