import Navbar from "@/components/Navbar";
import Routines from "@/components/Routines";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <header>Start Workout</header>
      <Routines></Routines>
    </main>
  );
}
