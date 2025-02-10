import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHero } from "@/components/page-hero"

export default function ResearchPage() {
  return (
    <div>
      <PageHero title="Research Activities" breadcrumbs={[{ label: "Research", href: "/research" }]} />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-primary">Research Focus Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>European Integration Process</li>
                  <li>EU-Africa Relations</li>
                  <li>Comparative Regional Integration</li>
                  <li>Development Politics</li>
                  <li>Economic Cooperation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-primary">Research Group</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The EU4SL project includes the establishment of a dedicated research group focusing on European
                  Studies and EU-Africa relations. Our research activities aim to contribute to the academic discourse
                  on European integration and its implications for Africa.
                </p>
                <h3 className="font-semibold mt-4 mb-2 text-secondary">Current Research Projects</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Comparative analysis of EU and African Union integration processes</li>
                  <li>Impact of EU policies on African development</li>
                  <li>EU-Africa trade relations and economic partnerships</li>
                  <li>Cultural and educational exchanges between Europe and Africa</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-primary">Publications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our research group is committed to producing high-quality academic publications. We aim to publish at
                  least one scientific article per year in reputable journals focusing on European Studies and
                  international relations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

