import KanbanBoard from "@/components/team/kanbanBoard";

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center  py-10">
        <p className="text-4xl font-semibold mb-5">Your Task</p>

        <p className="text-lg font-light text-center">
          A good team is a team that is able to complete their tasks within a
          predetermined schedule.
          <br /> See the progress of your{" "}
          <span className="bg-gray-900 text-gray-100 py-1 px-2 rounded-xl border-2 border-gray-900 hover:bg-gray-100 hover:text-gray-900 duration-300">
            Assignments
          </span>{" "}
          here.
        </p>
        <div className="mt-20 border-t-4 border-gray-900 w-full pt-5 flex justify-around gap-5">
          <KanbanBoard />
        </div>
      </section>
    </main>
  );
}
