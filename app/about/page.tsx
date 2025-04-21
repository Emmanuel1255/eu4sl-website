"use client"

import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface TeamMember {
  name: string
  role: string
  department: string
  image: string
  bio: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Kamara Mohamed Foray",
    role: "Academic coordinator",
    department: "Department of Political Science",
    image: "/placeholder.svg?height=200&width=200",
    bio: `Kamara Mohamed Foray, PhD in Political Economics, is a trained and qualified Economist and a trained and qualified Political Scientist. He is a specialist in the teaching of Economic History of Sierra Leone in the department of Economics and Modern Political Thought, Imperialism and Nationalism in the department of Political Science, Fourah Bay College, University of Sierra Leone at undergraduate level. He also teaches International Organizations as a module for MSc students of Diplomacy and International Relations and Regional and International Security as a module for MSc students of Security Strategic and Development Studies. Dr Foray has knowledge in land policy issues and reform processes in Sierra Leone, with ability to work independently and in a team environment, as the case may be. He has a proven track record of delivering excellent outputs on a continuous basis whilst adhering to deadlines and quality guidelines, including development of working documents for technical working groups, steering committee members and drafting comprehensive reports, using standard reporting format. Dr Foray has very good managerial skills acquired through work experience as head of the National Land Policy Reform Project in Sierra Leone. He is very passionate to succeed on the professional front through continuous learning and improvement, including very good oral and written communication skills in English.`,
  },
  {
    name: "Dr. Idrissa Mamoud Tarawallie",
    role: "Teaching staff",
    department: "Department of Political Science",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Dr. Idrissa Mamoud Tarawallie specializes in comparative politics with a focus on European and African political systems. His research interests include democratic institutions and governance in developing countries.",
  },
  {
    name: "Dr. Leonard Omar Bangura",
    role: "Teaching staff",
    department: "Department of Political Science",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Dr. Leonard Omar Bangura is an expert in international relations, with a particular focus on EU foreign policy. He has extensive experience in curriculum development and is committed to enhancing the quality of European Studies education in Sierra Leone.",
  },
]

export default function AboutPage() {
  return (
    <div>
      <PageHero title="About EU4SL" breadcrumbs={[{ label: "About", href: "/about" }]} />
      <div className="py-12">
        <div className="container px-4 mx-auto">
          <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-md">
            <div className="prose max-w-none">
              <p className="mb-6 text-lg text-gray-700">
                The EU4SL project, "European Interdisciplinary Studies in Sierra Leone," aims to establish an
                interdisciplinary module in European studies at the University of Sierra Leone. This initiative is particularly
                relevant to the Master's program in "International Relations," but its courses will also be accessible to
                students from other disciplines within the University of Sierra Leone's social sciences programs. The
                multidisciplinary nature of EU4SL will allow students from various specializations (politics, economics,
                political philosophy, regional studies, communication studies etc.) to participate.
              </p>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-primary">Our Objectives</h2>
              <ul className="pl-6 space-y-2 text-gray-700 list-disc">
                <li>Enhance knowledge about the European Union in Sierra Leone</li>
                <li>Improve teaching methods and education quality regarding European integration</li>
                <li>Foster research activities in European studies</li>
                <li>Train specialists in various social science disciplines</li>
                <li>Encourage the adoption of European educational experiences and practices</li>
              </ul>

              <h2 className="mt-8 mb-4 text-2xl font-bold text-primary">Our Team</h2>
              <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col items-center p-4 transition-all border border-gray-200 rounded-lg cursor-pointer bg-gray-50 hover:shadow-md hover:border-primary group">
          <div className="w-full h-48 overflow-hidden rounded-md">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={300}
              height={300}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-secondary">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
            <p className="text-sm text-gray-500">{member.department}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-primary">{member.name}</DialogTitle>
        </DialogHeader>
        <div className="overflow-y-auto max-h-[70vh]">
          <div className="w-full mb-4 overflow-hidden rounded-md">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={400}
              height={400}
              className="object-cover w-full h-60"
            />
          </div>
          <p className="text-sm font-medium text-gray-700">{member.role}</p>
          <p className="mb-4 text-sm text-gray-500">{member.department}</p>
          <p className="text-sm text-gray-600 whitespace-pre-line">{member.bio}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
