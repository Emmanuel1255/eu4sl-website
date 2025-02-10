"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { PageHero } from "@/components/page-hero"

interface Course {
  title: string
  description: string
  professor: string
  hours: number
  syllabus: string[]
}

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  const courses: Course[] = [
    {
      title: "Comparative European and African Political Economies",
      description: "Examine the political economy models of Europe and compare them with those in African nations.",
      professor: "Dr. Kamara Mohamed Foray",
      hours: 18,
      syllabus: [
        "Introduction to European and African political economies",
        "Comparative analysis of economic systems",
        "Role of institutions in economic development",
        "Case studies: EU member states and African countries",
        "Policy implications and future trends",
      ],
    },
    {
      title: "Development Politics in Europe and Africa",
      description:
        "Study political aspects of development in both regions, including policy-making and international organizations.",
      professor: "Dr. Idrissa Mamoud Tarawallie",
      hours: 18,
      syllabus: [
        "Theories of political development",
        "European development policies and institutions",
        "African development challenges and strategies",
        "Role of international organizations in development",
        "Comparative analysis of development outcomes",
      ],
    },
    {
      title: "European Union-Africa Relations in International Politics",
      description: "Explore the dynamics of EU-Africa relations within international politics.",
      professor: "TBD",
      hours: 18,
      syllabus: [
        "Historical context of EU-Africa relations",
        "EU's foreign policy towards Africa",
        "African Union and its engagement with the EU",
        "Trade agreements and economic partnerships",
        "Security cooperation and conflict resolution",
      ],
    },
    {
      title: "Economic Integration: Comparing the EU and African Models",
      description: "Analysis of economic integration mechanisms in the EU and African regional integration efforts.",
      professor: "Dr. Sylvester Bob Hadji",
      hours: 18,
      syllabus: [
        "Theories of economic integration",
        "EU single market and monetary union",
        "African economic communities and integration efforts",
        "Challenges and opportunities in regional integration",
        "Future prospects for EU-Africa economic cooperation",
      ],
    },
    {
      title: "Political Philosophy and Ideologies in Europe and Africa",
      description:
        "Explore philosophical underpinnings and ideological currents in European and African political thinking.",
      professor: "Dr. Leonard Omar Bangura",
      hours: 18,
      syllabus: [
        "Classical and modern European political philosophy",
        "African political thought and ideologies",
        "Comparative analysis of democratic systems",
        "Impact of colonialism on political ideologies",
        "Contemporary political movements in Europe and Africa",
      ],
    },
    {
      title: "Communication Strategies and Public Diplomacy in EU-African Relations",
      description: "Study communication and public diplomacy between the EU and African nations.",
      professor: "Dr. Abou Bhakarr Muhammed Binneh-Kamara",
      hours: 18,
      syllabus: [
        "Principles of public diplomacy",
        "EU's communication strategies towards Africa",
        "African public diplomacy initiatives",
        "Media relations and digital diplomacy",
        "Case studies in EU-Africa communication",
      ],
    },
  ]

  return (
    <div>
      <PageHero title="Our Courses" breadcrumbs={[{ label: "Courses", href: "/courses" }]} />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((course, index) => (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-primary">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <p>Professor: {course.professor}</p>
                      <p>Hours: {course.hours}</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" onClick={() => setSelectedCourse(course)}>
                          Learn More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>{selectedCourse?.title}</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <p className="text-sm text-gray-500 mb-2">Professor: {selectedCourse?.professor}</p>
                          <p className="text-sm text-gray-500 mb-4">Hours: {selectedCourse?.hours}</p>
                          <p className="text-gray-700 mb-4">{selectedCourse?.description}</p>
                          <h4 className="font-semibold mb-2">Course Syllabus:</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-600">
                            {selectedCourse?.syllabus.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

