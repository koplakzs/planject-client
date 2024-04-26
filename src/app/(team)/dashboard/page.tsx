import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Page() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center  py-10">
        <p className="text-4xl font-semibold mb-5">Your Dashboard</p>

        <p className="text-lg font-light text-center">
          A good team is a team that is able to carry out work optimally and
          achieve their goals.
          <br /> See all the work you&apos;ve{" "}
          <span className="bg-gray-900 text-gray-100 py-1 px-2 rounded-xl border-2 border-gray-900 hover:bg-gray-100 hover:text-gray-900 duration-300">
            Completed
          </span>{" "}
          here.
        </p>
        <div className="mt-20 border-t-4 border-gray-900 w-full pt-5 flex justify-around gap-5">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg font-semibold">
                Total Tasks
              </CardTitle>
              <CardDescription className="text-center">
                This is the total tasks you received during the project
              </CardDescription>
            </CardHeader>
            <CardContent className="text-4xl text-center">0</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg font-semibold">
                Task that have not been completed
              </CardTitle>
              <CardDescription className="text-center">
                This is the total tasks that you have not completed during the
                project
              </CardDescription>
            </CardHeader>
            <CardContent className="text-4xl text-center">0</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg font-semibold">
                Task that have been completed
              </CardTitle>
              <CardDescription className="text-center">
                This is the total tasks that you have completed during the
                project
              </CardDescription>
            </CardHeader>
            <CardContent className="text-4xl text-center">0</CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
