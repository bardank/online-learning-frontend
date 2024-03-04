import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthOutlet from "@/outlet/AuthOutlet";
import Image from "next/image";

export default function Home() {
  return (
    <AuthOutlet>
      <main className=" ">
        <header className="">
          <Navbar />
        </header>
        <div className="main grid grid-flow-col bg-secondary">
          <div className="flex justify-center items-center">
            <div>
              <h4 className="text text-white font-bold text-3xl">
                <span className="text-yellow-500">Studying</span> Online is now
                much easier
              </h4>
              <p className="text-sm text-white mt-4">
                E-Learning is an interesting platform that will teach you in
                more an interactive way
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="./assets/images/studying-girl.png"
              className="h-96 "
              alt=""
              style={{ filter: "drop-shadow(5px 5px 5px grey )" }}
            />
          </div>
        </div>
        <section className="flex justify-center py-4">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
        </section>
        <section className="flex justify-center py-4">
          <h2 className="font-bold text-2xl">Top Courses</h2>
        </section>
        <div className="grid grid-cols-5 gap-4 p-8">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <CourseCard title={"Hello"} />
            ))}
        </div>
        <Footer />
      </main>
    </AuthOutlet>
  );
}
