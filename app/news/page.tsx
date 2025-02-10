import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

// This would typically come from a database or API
const newsItems = [
  {
    id: 1,
    title: "EU4SL Welcomes New Cohort",
    date: "March 15, 2024",
    description:
      "Join us in welcoming our newest cohort of students to the EU4SL program. This year's intake includes students from diverse backgrounds across Sierra Leone and neighboring countries.",
    slug: "eu4sl-welcomes-new-cohort",
  },
  {
    id: 2,
    title: "International Conference on EU-Africa Relations",
    date: "April 2, 2024",
    description:
      "Our annual conference brings together experts from Europe and Africa to discuss the evolving dynamics of EU-Africa relations. This year's theme focuses on sustainable development and economic partnerships.",
    slug: "international-conference-eu-africa-relations",
  },
  {
    id: 3,
    title: "Research Workshop Series Kicks Off",
    date: "April 10, 2024",
    description:
      "Our weekly workshop series focusing on research methodologies and current trends in European Studies begins this month. Open to all EU4SL students and faculty members.",
    slug: "research-workshop-series-kicks-off",
  },
  {
    id: 4,
    title: "EU4SL Launches New Course on European Environmental Policy",
    date: "May 1, 2024",
    description:
      "We're excited to announce the launch of our new course on European Environmental Policy. This course will explore the EU's approach to climate change, biodiversity, and sustainable development.",
    slug: "new-course-european-environmental-policy",
  },
  {
    id: 5,
    title: "EU4SL Students Present at International Symposium",
    date: "May 15, 2024",
    description:
      "Three of our outstanding students have been selected to present their research at the International Symposium on European Studies in Brussels. Join us in congratulating them on this achievement.",
    slug: "students-present-international-symposium",
  },
]

export default function NewsPage() {
  return (
    <div>
      <PageHero title="News & Events" breadcrumbs={[{ label: "News", href: "/news" }]} />
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <Card key={item.id} className="transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-secondary">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link href={`/news/${item.slug}`}>
                    <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

