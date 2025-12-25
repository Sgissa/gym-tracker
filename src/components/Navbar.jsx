import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function Navbar() {
  return (
    <aside className="">
      <nav className="">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/exercises">Exercises</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
