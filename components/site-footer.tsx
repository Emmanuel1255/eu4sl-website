import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">About EU4SL</h3>
            <p className="text-sm opacity-80">
              A Jean Monnet Module at Fourah Bay College, University of Sierra Leone, dedicated to European Studies and
              EU-Africa relations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Research Activities
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Fourah Bay College</li>
              <li>University of Sierra Leone</li>
              <li>Mount Aureol</li>
              <li>Freetown, Sierra Leone</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons/links here */}
             

            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-sm opacity-80">© 2025 EU4SL Project. All rights reserved.</p>
          <p className="mt-2 text-sm opacity-80">Funded by the European Union - Jean Monnet Actions</p>
        </div>
      </div>
    </footer>
  )
}

