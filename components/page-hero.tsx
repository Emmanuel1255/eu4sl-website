import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PageHeroProps {
  title: string
  breadcrumbs: { label: string; href: string }[]
}

export function PageHero({ title, breadcrumbs }: PageHeroProps) {
  return (
    <div className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb, index) => (
              <li key={index}>
                <div className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                  <Link href={crumb.href} className="ml-1 text-sm font-medium text-gray-300 hover:text-white md:ml-2">
                    {crumb.label}
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  )
}

