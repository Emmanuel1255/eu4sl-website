import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PageHero } from "@/components/page-hero"

export default function ContactPage() {
  return (
    <div>
      <PageHero title="Contact Us" breadcrumbs={[{ label: "Contact", href: "/contact" }]} />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-primary">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 text-secondary">Address</h3>
                    <p className="text-gray-600">
                      Fourah Bay College
                      <br />
                      University of Sierra Leone
                      <br />
                      Mount Aureol
                      <br />
                      Freetown, Sierra Leone
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-secondary">Email</h3>
                    <p className="text-gray-600">info@eu4sl.edu.sl</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-secondary">Phone</h3>
                    <p className="text-gray-600">+232 XX XXX XXX</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

