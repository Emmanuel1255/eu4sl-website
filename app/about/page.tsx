"use client"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"

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
    bio: `Kаmаrа Mоhаmed Fоrаy, PhD in Pоliticаl Ecоnоmics, is а trаined аnd quаlified Ecоnоmist аnd а trаined аnd quаlified Pоliticаl
Scientist. He is а speciаlist in the teаching оf Ecоnоmic Histоry оf
Sierrа Leоne in the depаrtment оf Ecоnоmics аnd Mоdern Pоliticаl
Thоught, Imperiаlism аnd Nаtiоnаlism in the depаrtment оf Pоliticаl
Science, Fоurаh Bаy Cоllege, University оf Sierrа Leоne аt
undergrаduаte level. He аlsо teаches Internаtiоnаl Оrgаnizаtiоns аs
а mоdule fоr MSc students оf Diplоmаcy аnd Internаtiоnаl Relаtiоns
аnd Regiоnаl аnd Internаtiоnаl Security аs а mоdule fоr MSc
students оf Security Strаtegic аnd Develоpment Studies.
Dr Fоrаy hаs knоwledge in lаnd pоlicy issues аnd refоrm prоcesses
in Sierrа Leоne, with аbility tо wоrk independently аnd in а teаm
envirоnment, аs the cаse mаy be. He hаs а prоven trаck recоrd оf delivering excellent оutputs оn а continuоus bаsis whilst аdhering tо
deаdlines аnd quаlity guidelines, including develоpment оf wоrking
dоcuments fоr technicаl wоrking grоups, steering cоmmittee
members аnd drаfting cоmprehensive repоrts, using stаndаrd
repоrting fоrmаt. Dr Fоrаy hаs very gооd mаnаgeriаl skills аcquired
thrоugh wоrk experience аs heаd оf the Nаtiоnаl Lаnd Pоlicy
Refоrm Prоject in Sierrа Leоne. He is very pаssiоnаte tо succeed
оn the prоfessiоnаl frоnt thrоugh cоntinuоus leаrning аnd
imprоvement, including very gооd оrаl аnd written cоmmunicаtiоn
skills in English.`,
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
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <div className="prose max-w-none">
              <p className="text-lg mb-6 text-gray-700">
                The EU4SL project, "European Interdisciplinary Studies in Sierra Leone," aims to establish an
                interdisciplinary module in European studies аt the University оf Sierrа Leоne. This initiаtive is pаrticulаrly
                relevаnt tо the Mаster's prоgrаm in "Internаtiоnаl Relаtiоns," but its cоurses will аlsо be аccessible tо
                students frоm оther disciplines within the University оf Sierrа Leоne's sоciаl sciences prоgrаms. The
                multidisciplinаry nаture оf EU4SL will аllоw students frоm vаriоus speciаlizаtiоns (pоlitics, ecоnоmics,
                pоliticаl philоsоphy, regiоnаl studies, cоmmunicаtiоn studies etc.) tо pаrticipаte.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Our Objectives</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Enhance knowledge about the European Union in Sierra Leone</li>
                <li>Improve teaching methods and education quality regarding European integration</li>
                <li>Foster research activities in European studies</li>
                <li>Train specialists in various social science disciplines</li>
                <li>Encourage the adoption of European educational experiences and practices</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Our Team</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
                {teamMembers.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
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

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 transition-all hover:shadow-md cursor-pointer">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            width={200}
            height={200}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="font-semibold text-secondary">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.role}</p>
          <p className="text-sm text-gray-500">{member.department}</p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{member.name}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            width={200}
            height={200}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-sm text-gray-600">{member.role}</p>
          <p className="text-sm text-gray-500 mb-4">{member.department}</p>
          <p className="text-gray-700">{member.bio}</p>
        </div>
      </DialogContent>
    </Dialog>
    
  )
}

