import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm mb-5">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side: App name / back */}
        <div className="">
          <span className="text-lg font-semibold">Workout Tracker</span>
        </div>

        {/* Right side: Navigation */}
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/exercises"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Exercises
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
