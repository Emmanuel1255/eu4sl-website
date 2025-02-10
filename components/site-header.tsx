import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0stcEtQUKgfc6JubcQM7Qri1L1XArR.png"
              alt="EU4SALONE Logo"
              className="h-16 w-16 md:h-[70px] md:w-[70px] transition-transform hover:scale-105"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-secondary">EU4SL</h1>
              <p className="text-sm text-gray-600">European Studies in Sierra Leone</p>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors relative group">
            About
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link href="/courses" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Courses
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link href="/research" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Research
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

