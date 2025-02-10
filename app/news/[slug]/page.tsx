import { PageHero } from "@/components/page-hero"
import { Calendar } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// This would typically come from a database or API
const newsItems = [
  {
    id: 1,
    title: "EU4SL Welcomes New Cohort",
    date: "March 15, 2024",
    content: `
      <p>We are thrilled to welcome our newest cohort of students to the EU4SL program at Fourah Bay College, University of Sierra Leone. This year's intake includes students from diverse backgrounds across Sierra Leone and neighboring countries, bringing a wealth of perspectives to our classrooms.</p>
      
      <p>The incoming class of 2024 comprises 50 students, selected from a competitive pool of applicants. These students represent various academic disciplines, including political science, economics, international relations, and law.</p>
      
      <h2>Orientation Week</h2>
      
      <p>The new cohort will begin their journey with a comprehensive orientation week, designed to introduce them to the program, faculty, and resources available at EU4SL. The orientation will include:</p>
      
      <ul>
        <li>Welcome address by the program director</li>
        <li>Introduction to the EU4SL curriculum and learning objectives</li>
        <li>Campus tour and resource center orientation</li>
        <li>Meet and greet sessions with faculty members</li>
        <li>Team-building activities and icebreakers</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      
      <p>As we embark on this new academic year, we are excited about the potential of our new students and the contributions they will make to the field of European Studies. The EU4SL program remains committed to fostering a deep understanding of European integration, EU-Africa relations, and the role of the European Union in the global context.</p>
      
      <p>We look forward to the engaging discussions, insightful research, and collaborative projects that will emerge from this diverse and talented group of students.</p>
      
      <p>Please join us in extending a warm welcome to the EU4SL class of 2024!</p>
    `,
    slug: "eu4sl-welcomes-new-cohort",
  },
  // ... other news items (omitted for brevity)
]

export default function NewsPost({ params }: { params: { slug: string } }) {
  const post = newsItems.find((item) => item.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div>
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: "News", href: "/news" },
          { label: post.title, href: `/news/${post.slug}` },
        ]}
      />
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="mt-8">
            <Link href="/news" className="text-primary hover:text-primary/80">
              &larr; Back to News
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

