import Link from "next/link"
import { Button } from "@/components/ui/button"
export function SiteFooter() {
  return (
    <footer className="text-white bg-secondary">
      <section className="pt-20 text-white bg-secondary">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Start Your Journey?</h2>
            <p className="mb-8 text-lg opacity-90">
              Join our program and become part of a growing community of scholars and practitioners in European Studies.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/courses">
                <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90">
                  Explore Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white bg-secondary hover:bg-white hover:text-secondary"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-lg bg-white border-white opacity-90 text-secondary">
              The European Commission's support for the production of this publication does not constitute an endorsement of the contents, which reflect the
              views only of the authors, and the Commission  cannot be held responsible for any use which may be made of the information contained therein.
            </p>
          </div>
        </div>
      </section>
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About EU4SL</h3>
            <p className="text-sm opacity-80">
              A Jean Monnet Module at Fourah Bay College, University of Sierra Leone, dedicated to European Studies and
              EU-Africa relations.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm transition-opacity opacity-80 hover:opacity-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm transition-opacity opacity-80 hover:opacity-100">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-sm transition-opacity opacity-80 hover:opacity-100">
                  Research Activities
                </Link>
              </li>
            </ul>
          </div>
         
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Fourah Bay College</li>
              <li>University of Sierra Leone</li>
              <li>Mount Aureol</li>
              <li>Freetown, Sierra Leone</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons/links here */}
             

            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-white/10">
          <p className="text-sm opacity-80">© 2025 EU4SL Project. All rights reserved.</p>
          <p className="mt-2 text-sm opacity-80">Funded by the European Union - Jean Monnet Actions</p>
        </div>
      </div>
    </footer>
  )
}

