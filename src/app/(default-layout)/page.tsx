import {
  Header,
  Works,
  Experience,
  Blogs,
  NpmPackages,
  Contact,
} from "@components/Home"

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
