import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
export default function Page() {
  return (
    <main className="">
      <section className="min-h-screen flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-5xl font-bold flex flex-col gap-y-5 mb-10">
            <p>Plan Your Projects</p>
            <p>
              With{" "}
              <span className="bg-primary text-primary-foreground px-3 py-2 rounded-xl hover:bg-secondary hover:text-secondary-foreground hover:border-4 hover:border-primary hover:py-1 hover:px-2 transition duration-300">
                PlanJect
              </span>
            </p>
          </div>
          <p className="text-md">
            One of the project management platforms that is easy to use
            <br /> and friendly for new users
          </p>
          <Link
            href={"/auth"}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-4 mt-6 rounded-xl w-fit flex items-center gap-x-4"
          >
            Log In Now <FaArrowRight />
          </Link>
        </div>

        <Image
          src={"/assets/images/home-images-removebg.png"}
          alt="Home Image"
          className="w-6/12"
          width={500}
          height={500}
        />
      </section>
    </main>
  );
}
