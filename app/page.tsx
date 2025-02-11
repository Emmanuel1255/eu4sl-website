import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, GraduationCap, Users, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-32">
        <div className="absolute inset-0 bg-[url('/images/LOGO2.png')] bg-no-repeat bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center">
            <img
              src="./logo.png"
              alt="EU4SALONE Logo"
              className="h-48 w-auto mb-8"
            />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              European Interdisciplinary Studies in Sierra Leone
            </h1>
            <p className="mt-4 max-w-2xl text-xl opacity-80 mb-8">
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
                  className="bg-secondary text-white border-white hover:bg-white hover:text-secondary"
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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6+</div>
              <div className="text-gray-600">Courses Offered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Expert Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Research Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">Why Choose EU4SL?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">Academic Excellence</h3>
              <p className="text-gray-600">
                Comprehensive courses taught by experienced faculty members specializing in European Studies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">Research Focus</h3>
              <p className="text-gray-600">
                Dedicated research group exploring EU-Africa relations and European integration.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">International Perspective</h3>
              <p className="text-gray-600">
                Gain insights into European politics, economics, and culture from an African perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Events */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">Latest News & Events</h2>
            <Link href="/news" className="text-primary hover:text-primary/80 flex items-center gap-2">
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
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-secondary">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <Link
                    href="#"
                    className="text-primary hover:text-primary/80 flex items-center gap-2 text-sm font-medium"
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
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join our program and become part of a growing community of scholars and practitioners in European Studies.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90">
                  Explore Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                 className="bg-secondary text-white border-white hover:bg-white hover:text-secondary"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

