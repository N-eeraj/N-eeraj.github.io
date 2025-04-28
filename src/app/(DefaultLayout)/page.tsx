import Header from "@components/Home/Header"
import Works from "@components/Home/Works"
import Experience from "@components/Home/Experience"
import Blogs from "@components/Home/Blogs"
import NpmPackages from "@components/Home/NpmPackages"
import Contact from "@components/Home/Contact"

async function HomePage() {
  return (
    <main className="flex flex-col gap-y-5 max-w-2xl mx-auto px-4 py-6">
      <Header />
      <Works />
      <Experience />
      <Blogs />
      <NpmPackages />
      <Contact />
    </main>
  )
}

export default HomePage
