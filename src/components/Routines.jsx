import { Folder, Plus } from "lucide-react";

export default function Routines() {
  return (
    <>
      <section className="w-96 bg-white rounded-2xl shadow-md p-6 gap-4">
        <div className="flex gap-2">
          <h2>Your Routines</h2>
          <div>
            <button className="">
              <Folder />
              Folder
            </button>
            <button>
              {" "}
              <Plus />
              New Routine
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
